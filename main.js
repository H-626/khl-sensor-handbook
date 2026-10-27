/* KHL SensorHub app (v4) */
"use strict";

/* ================= markdown rendering (no dependencies) ================= */

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(s) {
  s = s.replace(/<sub>/g, "\u0001S\u0001").replace(/<\/sub>/g, "\u0001E\u0001");
  s = esc(s);
  s = s.replace(/\u0001S\u0001/g, "<sub>").replace(/\u0001E\u0001/g, "</sub>");
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*\s][^*]*)\*(?!\*)/g, "$1<em>$2</em>");
  return s;
}

function renderTable(rows) {
  if (!rows.length) return "";
  const bodyRows = rows.filter((r, i) => i !== 1);
  const cells = (row) => {
    let r = row.trim();
    if (r.startsWith("|")) r = r.slice(1);
    if (r.endsWith("|")) r = r.slice(0, -1);
    return r.split("|").map((c) => inline(c.trim()));
  };
  if (!bodyRows.length) return "";
  const head = cells(bodyRows[0]);
  let html = "<table><thead><tr>" + head.map((c) => "<th>" + c + "</th>").join("") + "</tr></thead><tbody>";
  for (const row of bodyRows.slice(1)) {
    html += "<tr>" + cells(row).map((c) => "<td>" + c + "</td>").join("") + "</tr>";
  }
  return html + "</tbody></table>";
}

function renderMarkdown(md) {
  const lines = md.split(/\r?\n/);
  const out = [], blocks = [], headings = [];
  let i = 0, n = lines.length;
  let para = [];
  const flush = () => {
    if (para.length) {
      const p = "<p>" + para.map(inline).join(" ") + "</p>";
      out.push(p); blocks.push(p); para = [];
    }
  };
  while (i < n) {
    const s = lines[i].trim();
    if (!s) { flush(); i++; continue; }
    const m = s.match(/^(#{1,6})\s+(.*)$/);
    if (m) {
      flush();
      const level = m[1].length, text = m[2].trim();
      const id = "h" + headings.length;
      const h = `<h${level} id="${id}">${inline(text)}</h${level}>`;
      out.push(h); blocks.push(h);
      headings.push({ id, level, text });
      i++; continue;
    }
    if (s.startsWith("|")) {
      flush();
      const rows = [];
      while (i < n && lines[i].trim().startsWith("|")) { rows.push(lines[i].trim()); i++; }
      const t = renderTable(rows); out.push(t); blocks.push(t);
      continue;
    }
    if (s.startsWith("- ")) {
      flush();
      const items = [];
      while (i < n && lines[i].trim().startsWith("- ")) { items.push(lines[i].trim().slice(2).trim()); i++; }
      const ul = "<ul>" + items.map((x) => "<li>" + inline(x) + "</li>").join("") + "</ul>";
      out.push(ul); blocks.push(ul);
      continue;
    }
    para.push(s); i++;
  }
  flush();
  return { html: out.join(""), headings, blocks };
}

function headingKey(text) {
  const t = text.trim();
  let m = t.match(/^(\d+(?:\.\d+)*)\b/);
  if (m) return m[1];
  m = t.match(/^第([一二三四五])部分/);
  if (m) return "part-" + ({ 一: "1", 二: "2", 三: "3", 四: "4", 五: "5" }[m[1]]);
  m = t.match(/^Part\s+([1-5])\b/);
  if (m) return "part-" + m[1];
  m = t.match(/^附录\s*([A-C])/) || t.match(/^Appendix\s+([A-C])/);
  if (m) return "appendix-" + m[1].toLowerCase();
  if (t.startsWith("参考文献") || t.startsWith("References")) return "references";
  if (t.startsWith("目录") || t.startsWith("Table of Contents")) return "toc";
  if (t.startsWith("手册说明") || t.startsWith("Handbook Notes")) return "notes";
  return null;
}

/* ================= citation & reference index ================= */

let REFS = [];
let REF_BY_KEY = new Map();

function normKey(s) { return (s || "").toLowerCase().replace(/[^a-zà-ÿ0-9]+/g, ""); }
function yearKey(y) { return (y || "").toLowerCase().replace(/[.\-]/g, ""); }
function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

function parseReferences(md) {
  const lines = md.split(/\r?\n/);
  let start = -1, end = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s+(参考文献|References)\s*$/.test(lines[i])) start = i;
    else if (start >= 0 && /^##\s+(附录|Appendices)\s*$/.test(lines[i])) { end = i; break; }
  }
  if (start < 0) return [];
  if (end < 0) end = lines.length;
  const refs = [];
  for (let i = start + 1; i < end; i++) {
    const s = lines[i].trim();
    if (!s.startsWith("- ")) continue;
    const full = s.slice(2).trim();
    const url = (full.match(/https?:\/\/[^\s]+/) || [""])[0];
    const proc = (full.match(/\b\d+\.\d+-\d+-\d+-\d+(?:\.\d+)?\b/) || [""])[0];
    const ym = full.match(/\b(\d{4}[a-z]?|n\.d\.(?:-[a-z])?)\b/);
    const year = ym ? ym[1] : "";
    const yk = yearKey(year);
    let firstAuthor = "", key = "", aliases = [];
    if (proc) {
      firstAuthor = "ITTC"; key = "p:" + proc;
    } else if (year) {
      const idx = full.indexOf(year);
      let pre = full.slice(0, idx).replace(/[.(,\s]+$/, "").trim();
      const bracket = pre.match(/\[([A-Z][A-Za-z]*)\]/);
      if (pre.includes(",")) pre = pre.split(",")[0].trim();
      firstAuthor = pre;
      if (bracket) aliases.push("a:" + normKey(bracket[1]) + ":" + yk);
      if (firstAuthor.toUpperCase() === "ITTC") key = "itc:" + yk;
      else key = "a:" + normKey(firstAuthor) + ":" + yk;
    }
    if (!key) key = "a:" + normKey(firstAuthor) + ":" + yk;
    refs.push({ key, aliases, full, url, year, yk, proc, firstAuthor });
  }
  return refs;
}

function buildOccurrences(refs) {
  const refHead = HEADING_MAP["references"] || "";
  for (const r of refs) {
    if (r.proc) r._test = (t) => t.includes(r.proc);
    else if (r.firstAuthor.toUpperCase() === "ITTC") {
      const re = new RegExp("\\bITTC\\s*" + r.yk + "(?!\\s*,\\s*\\d+\\.\\d+-\\d)", "i");
      r._test = (t) => re.test(t);
    } else if (r.firstAuthor && !r.firstAuthor.includes(" ")) {
      const y = r.yk === "nd" ? "n\\.d\\." : r.yk;
      const re = new RegExp("\\b" + escapeRegExp(r.firstAuthor) + "\\b[\\s\\S]{0,60}?\\b" + y + "\\b", "i");
      r._test = (t) => re.test(t);
    } else r._test = () => false;
    r.occurrences = [];
  }
  const scan = (blocks) => {
    let curId = "";
    for (const b of blocks) {
      const m = b.match(/<h[1-6] id="(h\d+)"/);
      if (m) { curId = m[1]; continue; }
      if (curId === refHead || !curId) continue;
      const text = b.replace(/<[^>]+>/g, "");
      for (const r of refs) if (r._test(text) && !r.occurrences.includes(curId)) r.occurrences.push(curId);
    }
  };
  scan(ZH.blocks);
  scan(EN.blocks);
  for (const r of refs) r.occurrences.sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
}

/* ================= state & i18n ================= */

let ZH = null, EN = null, SENSORS = null, TOC = null, HEADING_MAP = null, PRODUCTS = [];
let lang = "zh";
let currentView = "home";
let currentPid = null;
const SALT_B64 = "/v62Hwcm59BjapLR+rtuZg==";
const CHECK_ENC = { v: 1, iv: "+TAWhE8qxSJ+HBl5", data: "Uy6YcwzrD6U7/ygyuBRliS8SnYupLA==" };
let CRYPTO_KEY = null;


const UI = {
  zh: {
    docTitle: "KHL SensorHub",
    navHome: "首页", navProducts: "传感器产品", navSelector: "选型推荐", navLibrary: "知识库", navGuide: "使用手册",
    heroTitle: "面向水池试验与海上监测的传感器选型手册",
    heroSub: "覆盖 18 类物理量的测量方法、代表型号与价格，以及按实验需求的传感器推荐与使用方法。",
    ctaSelector: "开始选型", ctaProducts: "浏览传感器产品",
    statQty: "类测量量", statModels: "个代表型号", statLang: "种语言模式", statPdf: "种 PDF 导出",
    secProducts: "传感器产品", viewAll: "查看全部 →", viewDetail: "查看详情 →", secWhy: "为什么用它",
    f1t: "产品详情", f1d: "每个物理量都有测量原理、代表型号、参考价与配套组合。",
    f2t: "按需选型", f2d: "按场景和测量需求筛选，给出传感器推荐与搭配清单。",
    f3t: "中英对照", f3d: "中文、英文、中英对照三种模式，引用可点击跳转。",
    productsTitle: "传感器产品", productsSub: "按物理量浏览测量方法、代表型号与价格，点进查看详情。",
    detailBack: "← 返回产品列表",
    detailMethods: "测量原理", detailBasis: "测量依据", detailModels: "推荐型号", detailNoData: "该测量量暂无结构化选型数据，可在知识库查看完整章节。",
    detailToSelector: "加入选型推荐", detailToLibrary: "在知识库查看完整章节", usageLink: "使用教程 →", detailModelsNote: "以下为有公开型号与价格数据的原理，其余原理见上方「测量原理」。",
    selectorTitle: "选型推荐", selectorSub: "按使用场景和要测量的物理量，给出推荐原理、代表型号与配套组合。",
    stepScenario: "1 · 选择使用场景", stepQuantity: "2 · 选择要测量的物理量（可多选）", stepResult: "3 · 推荐结果",
    guideTitle: "使用手册", guideSub: "快速了解如何使用这个网站。",
    searchPlaceholder: "搜索需求 / 方法 / 章节…",
    exportPdf: "导出 PDF ▾", pdfZh: "中文 PDF", pdfEn: "English PDF", pdfBoth: "中英对照 PDF",
    gQuantity: "测量需求", gMethod: "传感器方法", gSection: "相关章节",
    recommendBtn: "推荐传感器", openSection: "打开章节", viewRecommend: "查看选型", searchEmpty: "没有匹配的结果",
    tocCount: "{n} 个条目", recEmpty: "请至少选择一个要测量的物理量", recNoResult: "该场景下暂无推荐条目",
    recKitPrefix: "搭配：", colModel: "型号", colSpec: "关键参数", colPrice: "参考价", colTier: "层次", colBuy: "购买", hasDataTag: "可在线选型", noDataTag: "详情阅读",
    citeNoRef: "未找到对应的参考文献条目", citeOccurrences: "引用该文献的章节（{n}）", citeNoOccurrences: "未检索到正文引用",
    citeToRef: "查看参考文献条目 →", backTop: "返回顶部"
  },
  en: {
    docTitle: "KHL SensorHub",
    navHome: "Home", navProducts: "Sensors", navSelector: "Selector", navLibrary: "Handbook", navGuide: "Guide",
    heroTitle: "Sensor selection handbook for tank testing and offshore monitoring",
    heroSub: "Measurement methods, representative models and prices across 18 physical quantities, plus needs-based sensor recommendation.",
    ctaSelector: "Start selecting", ctaProducts: "Browse sensors",
    statQty: "quantities", statModels: "models", statLang: "language modes", statPdf: "PDF exports",
    secProducts: "Sensors", viewAll: "View all →", viewDetail: "View details →", secWhy: "Why use it",
    f1t: "Product details", f1d: "Each quantity has principles, representative models, prices, and kits.",
    f2t: "Needs-based selection", f2d: "Filter by scenario and requirement to get sensor recommendations and kits.",
    f3t: "Bilingual", f3d: "Chinese, English and side-by-side modes, with clickable citations.",
    productsTitle: "Sensors", productsSub: "Browse measurement methods, models and prices by quantity.",
    detailBack: "← Back to sensors",
    detailMethods: "Measurement principles", detailBasis: "Measurement basis", detailModels: "Recommended models", detailNoData: "No structured selection data yet for this quantity — see the full section in the Handbook.",
    detailToSelector: "Add to selector", detailToLibrary: "Open full section in Handbook", usageLink: "Usage guide →", detailModelsNote: "Principles with published models and prices are listed below; see “Measurement principles” above for the rest.",
    selectorTitle: "Sensor selector", selectorSub: "Choose a scenario and the quantities to measure to get recommended principles, models and kits.",
    stepScenario: "1 · Scenario", stepQuantity: "2 · Quantities to measure (multi-select)", stepResult: "3 · Recommendations",
    guideTitle: "User guide", guideSub: "A quick guide to using this site.",
    searchPlaceholder: "Search requirements / methods / sections…",
    exportPdf: "Export PDF ▾", pdfZh: "Chinese PDF", pdfEn: "English PDF", pdfBoth: "Bilingual PDF",
    gQuantity: "Measurement requirements", gMethod: "Sensor methods", gSection: "Related sections",
    recommendBtn: "Recommend sensors", openSection: "Open section", viewRecommend: "View recommendation", searchEmpty: "No matches",
    tocCount: "{n} entries", recEmpty: "Select at least one quantity to measure", recNoResult: "No recommendation for this scenario",
    recKitPrefix: "Kit: ", colModel: "Model", colSpec: "Key specs", colPrice: "Price", colTier: "Tier", colBuy: "Buy", hasDataTag: "Online selector", noDataTag: "Read details",
    citeNoRef: "No matching reference entry", citeOccurrences: "Sections citing this reference ({n})", citeNoOccurrences: "No in-text citations found",
    citeToRef: "Go to reference entry →", backTop: "Back to top"
  }
};

function t(key) { return (UI[lang] && UI[lang][key]) || UI.zh[key] || key; }

function bi(zh, en) {
  if (lang === "en") return en;
  if (lang === "both") return zh === en ? zh : (zh + " / " + en);
  return zh;
}

function biKey(key) { return bi(UI.zh[key], UI.en[key]); }

function applyUiTexts() {
  document.title = t("docTitle");
  document.querySelectorAll(".nav-links button").forEach((b) => {
    const k = { home: "navHome", products: "navProducts", selector: "navSelector", library: "navLibrary", guide: "navGuide" }[b.dataset.view];
    if (k) b.textContent = t(k);
  });
  const set = (id, key) => { const el = document.getElementById(id); if (el) el.textContent = biKey(key); };
  set("hero-title", "heroTitle"); set("hero-sub", "heroSub");
  set("stat-qty", "statQty"); set("stat-models", "statModels"); set("stat-lang", "statLang"); set("stat-pdf", "statPdf");
  set("sec-products", "secProducts"); set("view-all", "viewAll"); set("sec-why", "secWhy");
  set("f1t", "f1t"); set("f1d", "f1d"); set("f2t", "f2t"); set("f2d", "f2d"); set("f3t", "f3t"); set("f3d", "f3d");
  set("products-title", "productsTitle"); set("products-sub", "productsSub");
  set("detail-back", "detailBack");
  set("selector-title", "selectorTitle"); set("selector-sub", "selectorSub");
  set("step-scenario", "stepScenario"); set("step-quantity", "stepQuantity"); set("step-result", "stepResult");
  set("guide-title", "guideTitle"); set("guide-sub", "guideSub");
  const search = document.getElementById("search");
  if (search) search.placeholder = t("searchPlaceholder");
  const exportBtn = document.getElementById("export-btn");
  if (exportBtn) exportBtn.textContent = t("exportPdf");
  document.querySelectorAll("#export-menu [data-export]").forEach((b) => {
    const k = { zh: "pdfZh", en: "pdfEn", both: "pdfBoth" }[b.dataset.export];
    if (k) b.textContent = t(k);
  });
  document.querySelectorAll('[data-go="selector"]').forEach((b) => { b.textContent = t("ctaSelector"); });
  document.querySelectorAll('[data-go="products"]').forEach((b) => { b.textContent = t("ctaProducts"); });
}

/* ================= linkify ================= */

function linkifyText(text) {
  if (!text) return text;
  text = text.replace(/ITTC\s*(\d{4})\s*,\s*(\d+\.\d+-\d+-\d+-\d+(?:\.\d+)?)/g, (m, y, p) => {
    const key = "p:" + p;
    return REF_BY_KEY.has(key) ? `<a class="cite" data-key="${key}">${m}</a>` : m;
  });
  text = text.replace(/ITTC\s*(\d{4})(?!\s*,\s*\d+\.\d+-\d+-\d+-\d+(?:\.\d+)?)/g, (m, y) => {
    const key = "itc:" + yearKey(y);
    return REF_BY_KEY.has(key) ? `<a class="cite" data-key="${key}">${m}</a>` : m;
  });
  text = text.replace(/\b([A-ZÀ-ÿ][A-Za-zÀ-ÿ'’-]+)(?:\s+(?:与|&|and)\s+([A-ZÀ-ÿ][A-Za-zÀ-ÿ'’-]+))?(?:\s*(?:等|et al\.))?\s*,\s*(\d{4}[a-z]?|n\.d\.(?:-[a-z])?)/g, (m, a1, a2, y) => {
    const key = "a:" + normKey(a1) + ":" + yearKey(y);
    return REF_BY_KEY.has(key) ? `<a class="cite" data-key="${key}">${m}</a>` : m;
  });
  text = text.replace(/(https?:\/\/[^\s<>"']+)/g, (url) => {
    const u = url.replace(/[.,;]+$/, "");
    return `<a href="${u}" target="_blank" rel="noopener">${u}</a>`;
  });
  text = text.replace(/(见|详见)(\s*)([0-9]+(?:\.[0-9]+)*)/g, (m, pre, sp, num) =>
    HEADING_MAP[num] ? `${pre}${sp}<a href="#${HEADING_MAP[num]}">${num}</a>` : m);
  text = text.replace(/(§)(\s*)([0-9]+(?:\.[0-9]+)*)/g, (m, pre, sp, num) =>
    HEADING_MAP[num] ? `${pre}${sp}<a href="#${HEADING_MAP[num]}">${num}</a>` : m);
  text = text.replace(/(附录|Appendix)(\s*)([A-C])/g, (m, pre, sp, L) => {
    const key = "appendix-" + L.toLowerCase();
    const label = pre === "附录" ? `附录${sp}${L}` : `${pre}${sp}${L}`;
    return HEADING_MAP[key] ? `<a href="#${HEADING_MAP[key]}">${label}</a>` : m;
  });
  text = text.replace(/(与)(\s*)([0-9]+(?:\.[0-9]+)+)(?=\s*(?:同款|同型号|同页|交叉引用|同款|相同))/g, (m, pre, sp, num) =>
    HEADING_MAP[num] ? `${pre}${sp}<a href="#${HEADING_MAP[num]}">${num}</a>` : m);
  text = text.replace(/(?<![\d.\-])([0-9]+(?:\.[0-9]+)+)(?![\d.\-])(?=\s*节)/g, (m, num) =>
    HEADING_MAP[num] ? `<a href="#${HEADING_MAP[num]}">${num}</a>` : m);
  return text;
}

function linkify(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    const parent = node.parentNode;
    if (!parent || ["A", "SCRIPT", "STYLE"].includes(parent.tagName)) continue;
    const text = node.nodeValue;
    if (!text || !/(https?:\/\/|ITTC|见|详见|§|附录|Appendix|, ?\d{4}|\d+\.\d+)/.test(text)) continue;
    const newHtml = linkifyText(text);
    if (newHtml === text) continue;
    const span = document.createElement("span");
    span.innerHTML = newHtml;
    parent.insertBefore(span, node);
    parent.removeChild(node);
  }
}

/* ================= products ================= */

const DATA_NO = { wave: "2.1", force: "2.2", pressure: "2.3", velocity: "2.4", motion: "2.5", acceleration: "2.6", strain: "2.7", displacement: "2.8", torque: "2.9", temperature: "2.10", hydrology: "2.11", meteorology: "2.12", position: "2.13", acoustic: "2.14", terrain: "2.15", corrosion: "2.16", fibre: "2.17", optical: "2.18" };
const EXTRA_QUANTITIES = [
  { id: "hydrology", no: "2.11", zh: "水文与水质", en: "Hydrology and water quality", zhDesc: "电导率、盐度、溶解氧、浊度与叶绿素等水质参数。", enDesc: "Conductivity, salinity, dissolved oxygen, turbidity, chlorophyll." },
  { id: "meteorology", no: "2.12", zh: "气象与风", en: "Meteorology and wind", zhDesc: "风速风向、三维风与湍流、风廓线。", enDesc: "Wind speed/direction, 3D wind and turbulence, wind profiles." },
  { id: "position", no: "2.13", zh: "位置与导航", en: "Position and navigation", zhDesc: "卫星定位、水声定位、多普勒测速与惯性导航。", enDesc: "GNSS, acoustic positioning, Doppler velocity, inertial navigation." },
  { id: "acoustic", no: "2.14", zh: "声学与水下感知", en: "Acoustics and underwater sensing", zhDesc: "噪声、空化、水听器阵列与水下通信。", enDesc: "Noise, cavitation, hydrophone arrays, underwater communication." },
  { id: "terrain", no: "2.15", zh: "地形与地球物理", en: "Terrain and geophysics", zhDesc: "多波束测深、侧扫声呐、浅地层剖面与激光扫描。", enDesc: "Multibeam bathymetry, side-scan, sub-bottom profiling, laser scanning." },
  { id: "corrosion", no: "2.16", zh: "腐蚀与阴极保护", en: "Corrosion and cathodic protection", zhDesc: "结构电位、腐蚀速率与牺牲阳极状态监测。", enDesc: "Structure potential, corrosion rate, sacrificial-anode monitoring." },
  { id: "fibre", no: "2.17", zh: "分布式光纤感知", en: "Distributed fibre-optic sensing", zhDesc: "沿整条光纤的分布式应变、温度与声振测量。", enDesc: "Distributed strain, temperature, and acoustic sensing along a fibre." },
  { id: "optical", no: "2.18", zh: "光学与图像测量", en: "Optical and image-based measurement", zhDesc: "PIV、DIC、立体视觉、高速成像与激光测振。", enDesc: "PIV, DIC, stereo vision, high-speed imaging, laser vibrometry." }
];

function buildProducts() {
  const order = ["wave", "force", "pressure", "velocity", "motion", "acceleration", "strain", "displacement", "torque", "temperature", "hydrology", "meteorology", "position", "acoustic", "terrain", "corrosion", "fibre", "optical"];
  const dataMap = {};
  for (const q of SENSORS.quantities) dataMap[q.id] = q;
  PRODUCTS = order.map((id) => {
    const q = dataMap[id];
    if (q) return { id, no: DATA_NO[id], zh: q.zh, en: q.en, zhDesc: q.noteZh, enDesc: q.noteEn, hasData: true, data: q };
    const ex = EXTRA_QUANTITIES.find((e) => e.id === id);
    return { ...ex, hasData: false };
  });
}

function updateStats() {
  const qtyEl = document.getElementById("stat-qty-num");
  if (qtyEl) qtyEl.textContent = PRODUCTS.length;
  const modelCount = PRODUCTS.filter((p) => p.hasData).reduce((s, p) => s + p.data.principles.reduce((a, pr) => a + pr.models.length, 0), 0);
  const modelEl = document.getElementById("stat-models-num");
  if (modelEl) modelEl.textContent = modelCount;
}

function productName(p) { return bi(p.zh, p.en); }
function productDesc(p) { return bi(p.zhDesc, p.enDesc); }

function cardHtml(p) {
  const tag = p.hasData
    ? `<span class="pcard-tag on">${biKey("hasDataTag")}</span>`
    : `<span class="pcard-tag off">${biKey("noDataTag")}</span>`;
  return `<a class="pcard" data-pid="${p.id}">
    <span class="pcard-top"><span class="badge">${p.no}</span>${tag}</span>
    <h3>${esc(productName(p))}</h3>
    <p>${esc(productDesc(p))}</p>
    <div class="pcard-foot">${biKey("viewDetail")}</div>
  </a>`;
}

function renderHome() {
  document.getElementById("home-products").innerHTML = PRODUCTS.slice(0, 6).map(cardHtml).join("");
}

function renderProducts() {
  document.getElementById("products-grid").innerHTML = PRODUCTS.map(cardHtml).join("");
}

function sectionInfoByNumber(no) {
  let h3 = null;
  for (const h of TOC) {
    if (h.level !== 3) continue;
    if (h.zh.startsWith(no + " ") || h.en.startsWith(no + " ")) { h3 = h; break; }
  }
  if (!h3) return null;
  const subs = [];
  for (const h of TOC) {
    if (h.level !== 4) continue;
    const tt = h.zh || h.en;
    if (tt.startsWith(no + ".")) subs.push({ id: h.id, zh: h.zh, en: h.en });
  }
  return { id: h3.id, subs };
}

function blocksBetweenDoc(blocks, fromId, toId) {
  const out = [];
  let active = false;
  for (const b of blocks) {
    const m = b.match(/<h[1-6] id="(h\d+)"/);
    if (m) {
      if (m[1] === fromId) { active = true; continue; }
      if (m[1] === toId) { active = false; break; }
      continue;
    }
    if (active) out.push(b);
  }
  return out;
}

function basisHtml(no) {
  const info = sectionInfoByNumber(no);
  if (!info || info.subs.length < 2) return "";
  const z = blocksBetweenDoc(ZH.blocks, info.subs[0].id, info.subs[1].id);
  const e = blocksBetweenDoc(EN.blocks, info.subs[0].id, info.subs[1].id);
  if (lang === "en") return e.join("");
  if (lang === "both") return interleaveHtml(z, e);
  return z.join("");
}

function principleBlocks(no, useEn) {
  const info = sectionInfoByNumber(no);
  if (!info || info.subs.length < 3) return [];
  const blocks = blocksBetweenDoc(useEn ? EN.blocks : ZH.blocks, info.subs[1].id, info.subs[2].id);
  const base = useEn
    ? ["working principle", "typical magnitudes and limitations", "advantages", "limitations"]
    : ["工作原理", "典型量级与限制", "优点", "局限"];
  const list = [];
  let cur = null;
  for (const b of blocks) {
    const nm = b.match(/<p><strong>(\d+)\.\s*(.*?)<\/strong><\/p>/);
    if (nm) {
      cur = { name: `${nm[1]}. ${nm[2]}`, blocks: [] };
      list.push(cur);
      continue;
    }
    if (!cur) continue;
    const lm = b.match(/<strong>(.*?)<\/strong>/);
    if (!lm) continue;
    const label = lm[1].trim().replace(/[:：]\s*$/, "");
    if (base.includes(label.toLowerCase ? label.toLowerCase() : label)) cur.blocks.push(b);
  }
  return list;
}

function subLinksHtml(info) {
  if (!info || !info.subs.length) return "";
  return `<div class="sub-links">` + info.subs.map((s) => `<a href="#${s.id}" data-libsec="${s.id}">${esc(lang === "en" ? s.en : s.zh)}</a>`).join("") + `</div>`;
}

function scenarioLabel(id) {
  const s = SENSORS.scenarios.find((x) => x.id === id);
  return s ? bi(s.zh, s.en) : id;
}

function scenarioTagsHtml(pr) {
  if (!pr.scenarios || !pr.scenarios.length) return "";
  return '<span class="tag-list">' + pr.scenarios.map((id) => `<span class="tag">${esc(scenarioLabel(id))}</span>`).join("") + "</span>";
}

function buyUrlFor(mo) {
  const nm = (mo.nameEn && mo.nameEn !== mo.name) ? mo.nameEn : mo.name;
  const q = encodeURIComponent(nm);
  if (mo.price && mo.price.startsWith("£")) return "https://www.amazon.co.uk/s?k=" + q;
  if (mo.price && mo.price.startsWith("¥")) return "https://s.taobao.com/search?q=" + q;
  return "https://www.google.com/search?q=" + q;
}

function renderModelsTable(pr, no) {
  let html = `<table class="rec-models"><thead><tr><th>${biKey("colModel")}</th><th>${biKey("colSpec")}</th><th>${biKey("colPrice")}</th><th>${biKey("colTier")}</th><th>${biKey("colBuy")}</th></tr></thead><tbody>`;
  for (const mo of pr.models) {
    const name = bi(mo.name, mo.nameEn || mo.name);
    const spec = bi(mo.spec, mo.specEn || mo.spec);
    const tier = bi(mo.tier, mo.tierEn || mo.tier);
  html += `<tr><td>${esc(name)}</td><td>${esc(spec)}</td><td>${mo.price}</td><td>${esc(tier)}</td><td><a href="${buyUrlFor(mo)}" target="_blank" rel="noopener" title="${esc(lang === "en" ? "Search to buy this model" : "按型号搜索购买")}">${biKey("colBuy")}</a></td></tr>`;
  }
  html += `</tbody></table>`;
  return html;
}

function usageLinkHtml(no) {
  const info = sectionInfoByNumber(no);
  const id = info && info.subs[2] ? info.subs[2].id : (info ? info.id : "");
  if (!id) return "";
  return `<a class="usage-link" href="#${id}" data-libsec="${id}" title="${esc(lang === "en" ? "Open the usage guide in the Handbook" : "在知识库中打开该物理量的使用教程")}">${biKey("usageLink")}</a>`;
}

function openDetail(pid) {
  const p = PRODUCTS.find((x) => x.id === pid);
  if (!p) return;
  currentPid = pid;
  const info = sectionInfoByNumber(p.no);
  let html = `<div class="detail-hero"><span class="badge">${p.no}</span><div><h2>${esc(productName(p))}</h2><p>${esc(productDesc(p))}</p></div></div>`;
  html += `<div class="detail-actions">`;
  if (p.hasData) html += `<button class="btn-outline" data-selq="${p.id}">${biKey("detailToSelector")}</button>`;
  if (info) html += `<button class="btn-outline" data-libsec="${info.id}">${biKey("detailToLibrary")}</button>`;
  html += `</div>`;
  if (info) {
    html += `<div class="detail-sec"><h3>${biKey("detailBasis")}</h3><div id="detail-basis" class="detail-basis">${basisHtml(p.no)}</div></div>`;
  }
  if (p.hasData) {
    html += `<div class="detail-sec"><h3>${biKey("detailMethods")}</h3>`;
    const plist = principleBlocks(p.no, lang === "en");
    if (plist.length) {
      for (const pc of plist) {
        html += `<div class="method-card"><div class="method-title"><h4>${esc(pc.name)}</h4></div>${pc.blocks.join("")}</div>`;
      }
    } else {
      for (const pr of p.data.principles) {
        html += `<div class="method-card"><div class="method-title"><h4>${esc(bi(pr.zh, pr.en))}</h4>${scenarioTagsHtml(pr)}</div>`;
        if (pr.descZh || pr.descEn) html += `<p class="method-desc">${esc(bi(pr.descZh || "", pr.descEn || ""))}</p>`;
        html += `</div>`;
      }
    }
    html += `</div>`;
    html += `<div class="detail-sec"><h3>${biKey("detailModels")}</h3><p class="detail-note">${biKey("detailModelsNote")}</p>`;
    for (const pr of p.data.principles) {
      html += `<div class="model-group"><div class="method-title"><h4>${esc(bi(pr.zh, pr.en))}</h4>${usageLinkHtml(p.no)}</div>${renderModelsTable(pr, p.no)}`;
      if (pr.kit && pr.kit.length) html += `<p class="method-kit">${biKey("recKitPrefix")}${pr.kit.map((k) => bi(k.zh, k.en)).join(" + ")}</p>`;
      html += `</div>`;
    }
    html += `</div>`;
  } else {
    html += `<div class="detail-sec"><div class="detail-nodata">${biKey("detailNoData")}</div></div>`;
  }
  html += subLinksHtml(info);
  const dc = document.getElementById("detail-content");
  dc.innerHTML = html;
  linkify(dc);
  showView("detail");
}

/* ================= selector ================= */

let selQ = new Set();
let selScenario = "tank";

function buildSelectorControls() {
  const sc = document.getElementById("sel-scenarios");
  sc.innerHTML = "";
  for (const s of SENSORS.scenarios) {
    const chip = document.createElement("div");
    chip.className = "chip" + (s.id === selScenario ? " active" : "");
    chip.textContent = bi(s.zh, s.en);
    chip.addEventListener("click", () => {
      for (const c of sc.children) c.classList.remove("active");
      chip.classList.add("active");
      selScenario = s.id;
      renderSelectorResults();
    });
    sc.appendChild(chip);
  }
  const qc = document.getElementById("sel-quantities");
  qc.innerHTML = "";
  for (const p of PRODUCTS) {
    const chip = document.createElement("div");
    chip.className = "chip" + (selQ.has(p.id) ? " active" : "") + (p.hasData ? "" : " disabled");
    chip.textContent = productName(p);
    if (!p.hasData) chip.title = lang === "en" ? "Data coming soon" : "暂无结构化数据";
    chip.addEventListener("click", () => {
      if (!p.hasData) return;
      if (chip.classList.contains("active")) { chip.classList.remove("active"); selQ.delete(p.id); }
      else { chip.classList.add("active"); selQ.add(p.id); }
      renderSelectorResults();
    });
    qc.appendChild(chip);
  }
}

function renderSelectorResults() {
  const el = document.getElementById("sel-results");
  if (!selQ.size) { el.innerHTML = `<div class="rec-empty">${biKey("recEmpty")}</div>`; return; }
  let html = "";
  for (const p of PRODUCTS) {
    if (!selQ.has(p.id) || !p.hasData) continue;
    const matched = p.data.principles.filter((pr) => pr.scenarios.includes(selScenario));
    html += `<div class="rec-q"><h3>${esc(productName(p))}</h3><p class="note">${esc(productDesc(p))}</p>`;
    if (!matched.length) html += `<p class="note">${biKey("recNoResult")}</p>`;
    for (const pr of matched) {
      html += `<div class="rec-p"><div class="method-title"><h4>${esc(bi(pr.zh, pr.en))}</h4>${scenarioTagsHtml(pr)}${usageLinkHtml(p.no)}</div>`;
      if (pr.descZh || pr.descEn) html += `<p class="rec-desc">${esc(bi(pr.descZh || "", pr.descEn || ""))}</p>`;
      html += renderModelsTable(pr, p.no);
      if (pr.kit && pr.kit.length) html += `<p class="rec-kit">${biKey("recKitPrefix")}${pr.kit.map((k) => bi(k.zh, k.en)).join(" + ")}</p>`;
      html += `</div>`;
    }
    html += `</div>`;
  }
  el.innerHTML = html;
}

/* ================= library reader ================= */

function headingLabelFor(id) {
  const h = TOC.find((x) => x.id === id);
  if (!h) return id;
  return lang === "en" ? h.en : h.zh;
}

function buildTree() {
  const tree = [];
  let cur2 = null, cur3 = null;
  for (const h of TOC) {
    if (h.level <= 1) continue;
    if (h.level === 2) { cur2 = { h, children: [] }; tree.push(cur2); cur3 = null; }
    else if (h.level === 3) { if (!cur2) { cur2 = { h: { id: "", level: 2, zh: "", en: "" }, children: [] }; tree.push(cur2); } cur3 = { h, children: [] }; cur2.children.push(cur3); }
    else { if (cur3) cur3.children.push(h); else if (cur2) cur2.children.push(h); }
  }
  return tree;
}

function renderToc() {
  const tocEl = document.getElementById("toc");
  const tocCount = document.getElementById("toc-count");
  const tree = buildTree();
  tocEl.innerHTML = "";
  let count = 0;
  const appendItem = (item) => {
    count++;
    const wrap = document.createElement("div");
    const a = document.createElement("a");
    a.className = "lvl3";
    a.href = "#" + item.h.id;
    a.textContent = headingLabelFor(item.h.id);
    if (item.children.length) {
      const toggle = document.createElement("button");
      toggle.className = "toc-toggle";
      toggle.textContent = "▸";
      const sub = document.createElement("div");
      sub.className = "toc-sub hidden";
      for (const c of item.children) {
        const ca = document.createElement("a");
        ca.className = "lvl4";
        ca.href = "#" + c.id;
        ca.textContent = headingLabelFor(c.id);
        sub.appendChild(ca);
      }
      toggle.addEventListener("click", (e) => {
        e.preventDefault(); e.stopPropagation();
        const open = sub.classList.toggle("hidden");
        toggle.textContent = open ? "▸" : "▾";
      });
      wrap.appendChild(toggle); wrap.appendChild(a); wrap.appendChild(sub);
    } else wrap.appendChild(a);
    tocEl.appendChild(wrap);
  };
  for (const g of tree) {
    if (!g.h.id) { for (const item of g.children) appendItem(item); continue; }
    const gl = document.createElement("a");
    gl.className = "lvl2";
    gl.href = "#" + g.h.id;
    gl.textContent = headingLabelFor(g.h.id);
    tocEl.appendChild(gl);
    for (const item of g.children) appendItem(item);
  }
  tocCount.textContent = t("tocCount").replace("{n}", count);
}

function interleaveHtml(zb, eb) {
  const n = Math.min(zb.length, eb.length);
  const parts = [];
  for (let i = 0; i < n; i++) {
    parts.push('<div class="b-zh">' + zb[i] + "</div>");
    parts.push('<div class="b-en">' + eb[i].replace(/ id="h\d+"/g, "") + "</div>");
  }
  for (let i = n; i < zb.length; i++) parts.push('<div class="b-zh">' + zb[i] + "</div>");
  for (let i = n; i < eb.length; i++) parts.push('<div class="b-en">' + eb[i].replace(/ id="h\d+"/g, "") + "</div>");
  return parts.join("");
}

function renderContent() {
  const content = document.getElementById("content");
  if (!ZH || !EN) return;
  if (lang === "both") content.innerHTML = interleaveHtml(ZH.blocks, EN.blocks);
  else content.innerHTML = lang === "zh" ? ZH.html : EN.html;
  linkify(content);
  indexReferenceAnchors();
  content.scrollTop = 0;
}

function indexReferenceAnchors() {
  const refId = HEADING_MAP["references"];
  if (!refId) return;
  const refHead = document.getElementById(refId);
  if (!refHead) return;
  const lis = [];
  let node = refHead.nextElementSibling;
  while (node && node.tagName !== "H2") {
    if (node.tagName === "UL") for (const li of node.children) if (li.tagName === "LI") lis.push(li);
    node = node.nextElementSibling;
  }
  lis.forEach((li, i) => { li.id = "ref-" + i; });
  REFS.forEach((r, i) => { r.anchor = "ref-" + i; });
}

/* ---------- smart search ---------- */

const Q_ALIASES = {
  wave: ["波面", "波高", "浪高", "波浪", "波", "wave", "free surface", "wave height", "elevation"],
  force: ["力", "载荷", "测力", "推力", "阻力", "张力", "力矩", "force", "load", "thrust", "tension", "moment", "drag", "resistance"],
  pressure: ["压力", "压强", "冲击", "砰击", "pressure", "slamming"],
  velocity: ["流速", "湍流", "速度场", "速度", "flow", "velocity", "turbulence", "PIV", "ADV", "ADCP", "LDV"],
  displacement: ["位移", "间隙", "距离", "测距", "displacement", "gap", "distance"],
  acceleration: ["加速度", "振动", "acceleration", "vibration", "shock"],
  strain: ["应变", "变形", "光纤", "strain", "deformation", "FBG", "fibre", "fiber"],
  torque: ["扭矩", "转矩", "转速", "功率", "torque", "speed", "power"],
  temperature: ["温度", "水温", "temperature"],
  motion: ["姿态", "运动", "六自由度", "升沉", "横摇", "纵摇", "motion", "attitude", "IMU", "heave", "roll", "pitch"],
  hydrology: ["水质", "水文", "电导率", "盐度", "溶解氧", "浊度", "叶绿素", "water quality", "conductivity", "salinity", "turbidity"],
  meteorology: ["气象", "风", "风速", "风向", "wind", "anemometer", "lidar"],
  position: ["位置", "定位", "导航", "position", "navigation", "GNSS", "USBL", "DVL"],
  acoustic: ["声学", "噪声", "空化", "水听器", "acoustic", "noise", "cavitation", "hydrophone", "sonar"],
  terrain: ["地形", "海床", "测深", "声呐", "terrain", "bathymetry", "seabed", "side scan"],
  corrosion: ["腐蚀", "阴极保护", "电位", "corrosion", "cathodic", "anode"],
  fibre: ["分布式光纤", "光纤传感", "DAS", "DTS", "fibre optic", "fiber optic", "distributed sensing"],
  optical: ["光学", "图像", "摄影测量", "高速成像", "optical", "imaging", "photogrammetry", "DIC"]
};

function fullTextSections(ql) {
  const ids = [];
  const seen = new Set();
  for (const h of TOC) {
    if (h.level >= 3 && (h.zh + " " + h.en).toLowerCase().includes(ql) && !seen.has(h.id)) { seen.add(h.id); ids.push(h.id); }
  }
  const scan = (blocks) => {
    let cur = "";
    for (const b of blocks) {
      const m = b.match(/<h[1-6] id="(h\d+)"/);
      if (m) { cur = m[1]; continue; }
      if (!cur || seen.has(cur)) continue;
      if (b.replace(/<[^>]+>/g, "").toLowerCase().includes(ql)) { seen.add(cur); ids.push(cur); }
    }
  };
  scan(ZH.blocks);
  scan(EN.blocks);
  return ids.slice(0, 12).map((id) => ({ id, label: headingLabelFor(id) }));
}

function runSearch(q) {
  const panel = document.getElementById("search-panel");
  const ql = q.trim().toLowerCase();
  if (!ql) { panel.classList.add("hidden"); return; }
  const parts = [];
  const qtys = PRODUCTS.filter((x) => {
    const hay = [x.zh, x.en, x.zhDesc, x.enDesc, ...(Q_ALIASES[x.id] || [])].join(" ").toLowerCase();
    return hay.includes(ql);
  });
  if (qtys.length) {
    let h = `<div class="s-group-title">${biKey("gQuantity")}</div>`;
    for (const p of qtys) {
      const info = sectionInfoByNumber(p.no);
      h += `<div class="s-item"><div class="s-name">${esc(productName(p))}</div><div class="s-note">${esc(productDesc(p))}</div>`;
      h += `<div class="s-actions">`;
      if (p.hasData) h += `<button class="mini" data-qid="${p.id}">${t("recommendBtn")}</button>`;
      if (info) h += `<a href="#${info.id}" data-libsec="${info.id}">${t("openSection")}</a>`;
      h += `</div>`;
      if (info && info.subs.length) {
        h += `<div class="s-subs">` + info.subs.map((s) => `<a href="#${s.id}" data-libsec="${s.id}">${esc(lang === "en" ? s.en : s.zh)}</a>`).join("") + `</div>`;
      }
      h += `</div>`;
    }
    parts.push(h);
  }
  const methods = [];
  for (const p of PRODUCTS) if (p.hasData) for (const pr of p.data.principles) if ((pr.zh + " " + pr.en).toLowerCase().includes(ql)) methods.push({ p, pr });
  if (methods.length) {
    let h = `<div class="s-group-title">${biKey("gMethod")}</div>`;
    for (const { p, pr } of methods.slice(0, 8)) {
      const info = sectionInfoByNumber(p.no);
      h += `<div class="s-item"><div class="s-name">${esc(productName(p))} · ${esc(bi(pr.zh, pr.en))}</div>`;
      h += `<div class="s-actions"><button class="mini" data-qid="${p.id}">${t("viewRecommend")}</button>`;
      if (info) h += `<a href="#${info.id}" data-libsec="${info.id}">${t("openSection")}</a></div></div>`;
    }
    parts.push(h);
  }
  const secs = fullTextSections(ql);
  if (secs.length) {
    let h = `<div class="s-group-title">${biKey("gSection")}</div>`;
    for (const s of secs) h += `<div class="s-item"><a href="#${s.id}" data-libsec="${s.id}">${esc(s.label)}</a></div>`;
    parts.push(h);
  }
  panel.innerHTML = parts.length ? parts.join("") : `<div class="s-empty">${biKey("searchEmpty")}</div>`;
  panel.classList.remove("hidden");
}

/* ================= citation popover ================= */

function showCitePop(citeEl, ev) {
  const key = citeEl.dataset.key;
  const ref = REF_BY_KEY.get(key);
  const citePop = document.getElementById("cite-pop");
  let html = "";
  if (ref) {
    html += `<div class="cite-ref">${esc(ref.full)}</div>`;
    if (ref.url) html += `<div class="cite-url"><a href="${esc(ref.url)}" target="_blank" rel="noopener">${esc(ref.url)}</a></div>`;
    const refTarget = ref.anchor || HEADING_MAP["references"] || "";
    if (refTarget) html += `<div class="cite-sec-list"><a href="#${refTarget}" data-libsec="${refTarget}">${biKey("citeToRef")}</a></div>`;
  } else html += `<div class="cite-ref">${t("citeNoRef")}</div>`;
  const occs = ref ? ref.occurrences : [];
  if (occs.length) {
    html += `<div class="cite-sec-title">${t("citeOccurrences").replace("{n}", occs.length)}</div><div class="cite-sec-list">`;
    for (const id of occs) html += `<a href="#${id}" data-libsec="${id}">${esc(headingLabelFor(id))}</a>`;
    html += `</div>`;
  } else html += `<div class="cite-sec-title">${t("citeNoOccurrences")}</div>`;
  citePop.innerHTML = html;
  citePop.classList.remove("hidden");
  const w = 400;
  citePop.style.left = Math.max(8, Math.min(ev.clientX, window.innerWidth - w - 16)) + "px";
  citePop.style.top = (ev.clientY + 18) + "px";
}

/* ================= export PDF ================= */

function buildPrintTitle(mode) {
  if (mode === "en") return "Kelvin Hydrodynamics Laboratory Tank-Testing Sensor Handbook · English";
  if (mode === "both") return "水池试验传感器手册 · 中英对照版";
  return "水池试验传感器手册 · 中文版";
}

function exportPdf(mode) {
  const pr = document.getElementById("print-root");
  const html = mode === "en" ? EN.html : mode === "zh" ? ZH.html : interleaveHtml(ZH.blocks, EN.blocks);
  pr.innerHTML = `<div class="print-title">${buildPrintTitle(mode)}</div>` + html;
  linkify(pr);
  window.print();
}

/* ================= user guide ================= */

const GUIDE = [
  {
    zh: "传感器产品", en: "Sensors",
    zhBody: "浏览 18 类物理量的产品卡片，点卡片进入详情页：测量依据、测量原理（含典型量级与限制、优点、局限）与推荐型号。每个原理名旁有「使用教程 →」，型号表格最后一列「购买」可跳转到购买搜索页。",
    enBody: "Browse 18 physical quantities. Open a card for the detail page: measurement basis, principles (typical magnitudes & limitations, advantages, limitations) and recommended models. Each principle has a Usage guide link, and the model table has a Buy link."
  },
  {
    zh: "选型推荐", en: "Selector",
    zhBody: "三步选型：① 选使用场景；② 选要测量的物理量（可多选）；③ 查看推荐原理、代表型号与配套组合。",
    enBody: "Three steps: ① pick a scenario; ② pick the quantities to measure (multi-select); ③ see recommended principles, models and kits."
  },
  {
    zh: "知识库", en: "Handbook",
    zhBody: "阅读完整手册：左侧目录导航；顶部搜索支持「需求 / 方法 / 章节」；正文引用可点击查看参考文献并跳转到引用它的章节；右上「导出 PDF」可下载中文 / 英文 / 中英对照版。",
    enBody: "Read the full handbook: left-side TOC, top search for requirements / methods / sections, clickable citations that jump to the reference and its citing sections, and PDF export (Chinese / English / bilingual)."
  },
  {
    zh: "语言切换", en: "Language",
    zhBody: "右上角可在 中文 / English / 对照 之间切换；对照模式显示中英并排或上下对照。",
    enBody: "Switch between Chinese / English / side-by-side bilingual in the top-right; bilingual mode shows both languages together."
  },
  {
    zh: "本地运行与分享", en: "Run & share",
    zhBody: "双击 start.bat 启动本地预览（保持黑窗打开），访问 http://localhost:8000。也可部署到 GitHub Pages 获得公开链接分享给他人。",
    enBody: "Double-click start.bat to start the local preview (keep the black window open) and visit http://localhost:8000. You can also deploy to GitHub Pages to get a public link to share."
  },
  {
    zh: "访问与密码", en: "Access & password",
    zhBody: "进入网站需输入管理员设定的密码；同一浏览器会话内无需重复输入。",
    enBody: "The site requires a password set by the administrator; you will not be asked again within the same browser session."
  }
];

function renderGuide() {
  const el = document.getElementById("guide-content");
  el.innerHTML = GUIDE.map((g, i) =>
    `<div class="guide-item"><div class="guide-num">${i + 1}</div><div><h3>${esc(bi(g.zh, g.en))}</h3><p>${esc(bi(g.zhBody, g.enBody))}</p></div></div>`
  ).join("");
}

/* ================= crypto (browser WebCrypto) ================= */

function b64ToBuf(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

function bufToB64(buf) {
  let bin = "";
  for (let i = 0; i < buf.length; i++) bin += String.fromCharCode(buf[i]);
  return btoa(bin);
}

async function deriveKey(pw) {
  const material = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: b64ToBuf(SALT_B64), iterations: 250000, hash: "SHA-256" },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

async function decryptText(key, obj) {
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64ToBuf(obj.iv) }, key, b64ToBuf(obj.data));
  return new TextDecoder().decode(plain);
}

async function exportKeyRaw(key) {
  const raw = await crypto.subtle.exportKey("raw", key);
  return bufToB64(new Uint8Array(raw));
}

async function importKeyRaw(b64) {
  return crypto.subtle.importKey("raw", b64ToBuf(b64), "AES-GCM", false, ["decrypt"]);
}

/* ================= access gate ================= */

function checkAccess() {
  const input = document.getElementById("gate-input");
  const gate = document.getElementById("access-gate");
  const err = document.getElementById("gate-error");
  const btn = document.getElementById("gate-btn");

  const fail = (msg) => {
    err.textContent = msg || "密码错误，请重试 / Incorrect password, try again";
    err.classList.remove("hidden");
  };

  const tryEnter = async () => {
    const pw = input.value;
    if (!pw) { fail(); return; }
    if (!window.crypto || !window.crypto.subtle) {
      fail("当前环境不支持网页加密，请通过 https 网址或 localhost 访问，不要直接双击 index.html 文件。 / Encryption is not available here; open the site via its https link or localhost instead of double-clicking the file.");
      return;
    }
    try {
      const key = await deriveKey(pw);
      const ok = await decryptText(key, CHECK_ENC);
      if (ok === "KHL_OK") {
        CRYPTO_KEY = key;
        sessionStorage.setItem("khl_access", "1");
        sessionStorage.setItem("khl_key", await exportKeyRaw(key));
        gate.classList.add("hidden");
        boot();
      } else {
        fail();
      }
    } catch (e) {
      console.error("access check failed", e);
      fail();
    }
  };

  btn.addEventListener("click", tryEnter);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") tryEnter(); });
  document.getElementById("gate-toggle").addEventListener("click", () => {
    const showing = input.type === "text";
    input.type = showing ? "password" : "text";
  });
  input.focus();
}

/* ================= view router ================= */

function showView(name) {
  currentView = name;
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  document.getElementById("view-" + name).classList.remove("hidden");
  document.querySelectorAll(".nav-links button").forEach((b) => b.classList.toggle("active", b.dataset.view === name));
  document.getElementById("search-panel").classList.add("hidden");
  document.getElementById("export-menu").classList.add("hidden");
  document.getElementById("cite-pop").classList.add("hidden");
  window.scrollTo(0, 0);
}

function goToSection(id) {
  showView("library");
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/* ================= wiring ================= */

document.querySelectorAll(".nav-links button").forEach((b) => b.addEventListener("click", () => showView(b.dataset.view)));
document.addEventListener("click", (e) => {
  const go = e.target.closest("[data-go]");
  if (go) { showView(go.dataset.go); return; }
  const pid = e.target.closest("[data-pid]");
  if (pid) { e.preventDefault(); openDetail(pid.dataset.pid); return; }
  const selq = e.target.closest("[data-selq]");
  if (selq) { selQ = new Set([selq.dataset.selq]); buildSelectorControls(); renderSelectorResults(); showView("selector"); return; }
  const libsec = e.target.closest("[data-libsec]");
  if (libsec) { e.preventDefault(); goToSection(libsec.dataset.libsec); return; }
  const cite = e.target.closest("a.cite");
  if (cite) { e.preventDefault(); showCitePop(cite, e); return; }
  if (e.target.closest("#cite-pop a")) { document.getElementById("cite-pop").classList.add("hidden"); return; }
  document.getElementById("cite-pop").classList.add("hidden");
  if (!e.target.closest(".search-wrap")) document.getElementById("search-panel").classList.add("hidden");
});
document.getElementById("detail-back").addEventListener("click", () => showView("products"));
document.getElementById("export-btn").addEventListener("click", (e) => { e.stopPropagation(); document.getElementById("export-menu").classList.toggle("hidden"); });
document.querySelectorAll("#export-menu [data-export]").forEach((b) => b.addEventListener("click", () => {
  document.getElementById("export-menu").classList.add("hidden");
  exportPdf(b.dataset.export);
}));
window.addEventListener("afterprint", () => { document.getElementById("print-root").innerHTML = ""; });
const backTop = document.getElementById("back-top");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("hidden", window.scrollY < 400);
});
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

let searchTimer;
document.getElementById("search").addEventListener("input", (e) => {
  clearTimeout(searchTimer);
  const v = e.target.value.trim();
  searchTimer = setTimeout(() => runSearch(v), 120);
});
document.getElementById("search-panel").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-qid]");
  if (btn) {
    selQ = new Set([btn.dataset.qid]);
    document.getElementById("search-panel").classList.add("hidden");
    buildSelectorControls(); renderSelectorResults(); showView("selector");
  }
});

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".lang-switch button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    lang = btn.dataset.lang;
    applyUiTexts();
    if (currentView === "home") renderHome();
    if (currentView === "products") renderProducts();
    if (currentView === "detail" && currentPid) openDetail(currentPid);
    if (currentView === "selector") { buildSelectorControls(); renderSelectorResults(); }
    if (currentView === "library") { renderToc(); renderContent(); }
    if (currentView === "guide") renderGuide();
    const sp = document.getElementById("search-panel");
    if (!sp.classList.contains("hidden")) runSearch(document.getElementById("search").value.trim());
  });
});

/* ================= boot ================= */

async function boot() {
  try {
    if (!CRYPTO_KEY) {
      const saved = sessionStorage.getItem("khl_key");
      if (saved) CRYPTO_KEY = await importKeyRaw(saved);
    }
    if (!CRYPTO_KEY) throw new Error("missing key");
    const [zhEnc, enEnc, sensorsEnc] = await Promise.all([
      fetch("KHL-Sensor.md.enc").then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); }),
      fetch("KHL-Sensor-en.md.enc").then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); }),
      fetch("sensors.json.enc").then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
    ]);
    const zhText = await decryptText(CRYPTO_KEY, zhEnc);
    const enText = await decryptText(CRYPTO_KEY, enEnc);
    const sensors = JSON.parse(await decryptText(CRYPTO_KEY, sensorsEnc));
    ZH = renderMarkdown(zhText);
    EN = renderMarkdown(enText);
    SENSORS = sensors;
    TOC = ZH.headings.map((h, i) => ({ id: h.id, level: h.level, zh: h.text, en: EN.headings[i] ? EN.headings[i].text : h.text }));
    HEADING_MAP = {};
    for (const h of TOC) { const k = headingKey(h.zh) || headingKey(h.en); if (k) HEADING_MAP[k] = h.id; }
    REFS = parseReferences(enText);
    REF_BY_KEY = new Map();
    for (const r of REFS) { REF_BY_KEY.set(r.key, r); for (const a of r.aliases) REF_BY_KEY.set(a, r); }
    buildOccurrences(REFS);
    buildProducts();
    updateStats();
    applyUiTexts();
    renderHome();
    renderProducts();
    buildSelectorControls();
    renderSelectorResults();
    renderToc();
    renderContent();
    renderGuide();
  } catch (err) {
    document.getElementById("app").innerHTML =
      `<div style="padding:48px;max-width:680px"><h2>无法解密内容 / Failed to decrypt content</h2>` +
      `<p>请确认使用了正确的密码，或刷新页面后重新登录。若本地预览，请双击 <code>start.bat</code> 后访问 <code>http://localhost:8000</code>。</p>` +
      `<p style="color:#63707d">错误信息 / Error：${err}</p></div>`;
  }
}

const savedKey = sessionStorage.getItem("khl_key");
if (sessionStorage.getItem("khl_access") === "1" && savedKey) {
  document.getElementById("access-gate").classList.add("hidden");
  importKeyRaw(savedKey).then((k) => { CRYPTO_KEY = k; boot(); }).catch(() => checkAccess());
} else {
  checkAccess();
}
