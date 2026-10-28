# KHL SensorHub 云端部署与移交教程（Teams 版）

这一版把网站放到云端，**不需要你开电脑**。成员在 Teams 里打开链接就能看，网页永久在线。浏览网页**不需要密码**；只有进入“管理”后台、增删传感器时才需要管理员邮箱和密码。

架构：

- 网页：GitHub Pages（免费、永久在线）
- 传感器数据：Firebase Realtime Database（免费额度足够，网页后台实时增删）

## 一、一次性配置 Firebase（约 10 分钟）

1. 打开 https://console.firebase.google.com ，用 Google 账号登录，点「Create a project（创建项目）」，项目名随意，例如 `khl-sensorhub`。
2. 创建完成后，点左侧「Build → Realtime Database → Create database」。
   - 位置选离你最近的区域（例如 `europe-west1`）。
   - 安全规则先选 **Start in test mode**，之后马上改成下面的规则。
3. 点左侧「Project settings（项目设置）」→「General」→ 最下面「Your apps」→ 选择 Web（`</>`），填个应用名，点注册。
   - 页面会给你一段 `firebaseConfig`，里面有 `apiKey`、`projectId` 等，先复制出来。
4. 点左侧「Build → Authentication → Get started」。
   - 登录方式里启用 **Email/Password**。
   - 进「Users」标签，点「Add user」，创建一个管理员账号，例如邮箱 `admin@你的实验室.com` 和你想设的密码。这就是管理后台的登录账号。
5. 点左侧「Build → Realtime Database → Rules」，把规则改成：

```json
{
  "rules": {
    "sensors": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

然后点「Publish」。意思是：**任何人都能读传感器数据（所以网页打开就能看），但只有登录的管理员才能写（增删传感器）**。

6. 回到本项目文件夹，打开 `config.js`（仓库里已经有这个文件，内容就是三个待填的字段），把第 3 步拿到的 `apiKey`、`projectId` 和数据库地址填进去。数据库地址形如：

```
https://你的项目名-default-rtdb.firebaseio.com
```

填好后保存。`config.js` 就是公开的 Firebase Web 配置（不是密码），真正保护数据的是上面的 Rules 和管理员登录账号，所以直接提交到仓库即可。

## 二、把 config.js 放进仓库并发布

1. 打开 `config.js`，确认三个值都填好了（也可以直接在 GitHub 网页上编辑这个文件，保存提交）。
2. 在项目文件夹打开终端，执行：

```powershell
git add -A
git commit -m "fill Firebase config for cloud deployment"
git push
```

3. 在 GitHub 仓库页点「Settings → Pages」，把 Source 设为 `main` 分支、根目录 `/`，保存。
4. 等 1 分钟左右，打开：

```
https://H-626.github.io/khl-sensor-handbook/
```

它会自动跳到中文版。右上角「中文 / EN / 对照」切换三个独立页面，「管理」进入后台（需要管理员邮箱和密码）。

## 三、在 Teams 里分享

直接把下面这个链接发到 Teams 群即可，成员点开就能看，不需要密码、不需要你开电脑：

```
https://H-626.github.io/khl-sensor-handbook/
```

三个独立页面也可以分别发：

```
https://H-626.github.io/khl-sensor-handbook/index-zh.html
https://H-626.github.io/khl-sensor-handbook/index-en.html
https://H-626.github.io/khl-sensor-handbook/index-both.html
```

## 四、增删传感器

1. 打开网站，点右上角「管理」。
2. 用第一步创建的管理员邮箱和密码登录。
3. 可以：
   - 查看、删除已有传感器；
   - 按网站格式新增传感器（物理量 ID、中英文名称、简介、原理、型号、价格、层级、适用场景、配套组合）；
   - 直接编辑完整 JSON 做批量修改。
4. 保存后，刷新主网页即可看到变化。

## 五、把管理权移交给下一个人

移交只需要两步，不需要碰任何代码：

1. **GitHub 仓库**：在 GitHub 仓库页「Settings → Collaborators」把对方账号加进来；或者更彻底地「Settings → Danger Zone → Transfer ownership」把仓库转给对方。
2. **Firebase 项目**：在 Firebase 控制台「Project settings → Users and permissions」把对方邮箱加为 Owner；需要完全移交时，在「Project settings → General」里转移项目所有权。

对方接手后，在 Firebase Authentication 里删掉旧管理员账号、新建自己的管理员账号即可。

## 六、本地方案仍然可用

如果你想在实验室局域网里不用外网也能用，双击 `start.bat`，按窗口提示访问 `http://localhost:8000`（或发局域网 IP 给同网成员）。本地方案不需要 Firebase，数据存在本机 `sensors.json`。
