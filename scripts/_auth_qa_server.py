#!/usr/bin/env python3
"""Minimal static server + QA result sink for auth E2E."""
from __future__ import annotations

import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "scripts" / "_auth_qa_status.json"


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/__auth_qa_done":
            qs = parse_qs(parsed.query)
            payload = {
                "status": (qs.get("status") or ["unknown"])[0],
                "detail": (qs.get("detail") or [""])[0],
            }
            OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
            body = b"ok"
            self.send_response(200)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        return super().do_GET()

    def log_message(self, fmt, *args):
        pass


if __name__ == "__main__":
    if OUT.exists():
        OUT.unlink()
    server = ThreadingHTTPServer(("127.0.0.1", 8765), Handler)
    print("serving http://127.0.0.1:8765/", flush=True)
    server.serve_forever()
