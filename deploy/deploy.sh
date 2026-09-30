#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# اسکریپت انتشار سریع روی سرور لینوکسی
#   ./deploy/deploy.sh
# پیش‌نیاز: Node.js 20+ و npm نصب شده باشد و سرویس systemd به نام khalaj وجود داشته باشد.
# ---------------------------------------------------------------------------
set -euo pipefail

cd "$(dirname "$0")/.."
echo "▸ مسیر پروژه: $(pwd)"

echo "▸ دریافت وابستگی‌ها…"
npm ci --omit=dev || npm install --omit=dev

echo "▸ ساخت نسخه production…"
npm run build

if systemctl list-unit-files | grep -q '^khalaj.service'; then
  echo "▸ ری‌استارت سرویس khalaj…"
  sudo systemctl restart khalaj
  sleep 2
  sudo systemctl --no-pager --lines=15 status khalaj || true
else
  echo "▸ سرویس systemd پیدا نشد. اجرای دستی: npm start"
fi

echo "✓ انتشار انجام شد."
