#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""KHL SensorHub local server.

Static files + a small JSON API for managing sensors.json so lab members can
add / remove sensors from the browser admin page (admin.html).
"""

import http.server
import json
import os
import secrets
import socket
import socketserver
import urllib.parse

PORT = 8000
ROOT = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(ROOT, "sensors.json")
TOKEN_FILE = os.path.join(ROOT, ".admin_token")

ADMIN_TOKEN = None


def get_admin_token():
    global ADMIN_TOKEN
    if ADMIN_TOKEN:
        return ADMIN_TOKEN
    if os.path.exists(TOKEN_FILE):
        with open(TOKEN_FILE, "r", encoding="utf-8") as f:
            ADMIN_TOKEN = f.read().strip()
    if not ADMIN_TOKEN:
        ADMIN_TOKEN = secrets.token_urlsafe(24)
        with open(TOKEN_FILE, "w", encoding="utf-8") as f:
            f.write(ADMIN_TOKEN)
    return ADMIN_TOKEN


def read_sensors():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def write_sensors(data):
    tmp = DATA_FILE + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    os.replace(tmp, DATA_FILE)


def lan_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except OSError:
        try:
            return socket.gethostbyname(socket.gethostname())
        except OSError:
            return "127.0.0.1"


def send_json(handler, obj, status=200):
    body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.send_header("Cache-Control", "no-store")
    handler.end_headers()
    handler.wfile.write(body)


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt, *args):
        pass  # keep the console clean

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == "/api/sensors":
            send_json(self, read_sensors())
            return
        if path == "/api/health":
            send_json(self, {"ok": True, "version": 25, "token": get_admin_token()})
            return
        if path == "/config.js":
            body = "window.FIREBASE_MODE='local';window.FIREBASE_CONFIG=null;window.FIREBASE_ADMIN_EMAIL='';\n".encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/javascript; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
            return

        if path in ("/", "/index.html"):
            path = "/index-zh.html"

        self.path = path
        super().do_GET()

    def _admin_ok(self):
        auth = self.headers.get("Authorization", "")
        token = auth[len("Bearer "):] if auth.startswith("Bearer ") else ""
        return bool(token) and token == get_admin_token()

    def do_PUT(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path != "/api/sensors":
            send_json(self, {"error": "not found"}, 404)
            return
        if not self._admin_ok():
            send_json(self, {"error": "unauthorized"}, 401)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            data = json.loads(self.rfile.read(length).decode("utf-8"))
            if not isinstance(data, dict) or "quantities" not in data or "scenarios" not in data:
                raise ValueError("bad shape")
            write_sensors(data)
            send_json(self, {"ok": True, "saved": True})
        except Exception as e:
            send_json(self, {"ok": False, "error": str(e)}, 400)

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path != "/api/sensors":
            send_json(self, {"error": "not found"}, 404)
            return
        if not self._admin_ok():
            send_json(self, {"error": "unauthorized"}, 401)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            body = json.loads(self.rfile.read(length).decode("utf-8"))
            q = body.get("quantity") if isinstance(body, dict) else None
            if not isinstance(q, dict) or not q.get("id"):
                raise ValueError("quantity needs an id")
            sensors = read_sensors()
            sensors["quantities"] = [x for x in sensors["quantities"] if x.get("id") != q["id"]]
            sensors["quantities"].append(q)
            write_sensors(sensors)
            send_json(self, {"ok": True, "saved": True})
        except Exception as e:
            send_json(self, {"ok": False, "error": str(e)}, 400)


class ThreadingServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


def main():
    os.chdir(ROOT)
    get_admin_token()
    with ThreadingServer(("0.0.0.0", PORT), Handler) as httpd:
        print("=" * 60)
        print("KHL SensorHub is running.")
        print()
        print("  On this computer : http://localhost:" + str(PORT))
        print("  Share on Teams   : http://" + lan_ip() + ":" + str(PORT))
        print()
        print("  Chinese    ->  /index-zh.html")
        print("  English    ->  /index-en.html")
        print("  Bilingual  ->  /index-both.html")
        print("  Admin      ->  /admin.html")
        print("=" * 60)
        print("Keep this window open. Press Ctrl+C to stop.")
        httpd.serve_forever()


if __name__ == "__main__":
    main()
