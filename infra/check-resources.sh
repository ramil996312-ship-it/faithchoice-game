#!/bin/bash
# Мониторинг памяти/диска на VPS (147.45.146.120, faithchoice.net + referal-api).
# Шлёт сообщение в Telegram, если память или диск превысят порог (по умолчанию 80%).
# Запускается через cron. Настройка целиком описана в infra-notes.md этого проекта
# (раздел "Мониторинг ресурсов сервера").
#
# Настройка: подставить TG_BOT_TOKEN и TG_CHAT_ID ниже (или через /etc/faithchoice-monitor.env,
# см. README) — не хранить токен в этом файле, если он попадёт в git.

set -euo pipefail

THRESHOLD=${THRESHOLD:-80}
ENV_FILE="/etc/faithchoice-monitor.env"
if [ -f "$ENV_FILE" ]; then
  # shellcheck disable=SC1090
  source "$ENV_FILE"
fi

if [ -z "${TG_BOT_TOKEN:-}" ] || [ -z "${TG_CHAT_ID:-}" ]; then
  echo "TG_BOT_TOKEN/TG_CHAT_ID не заданы (см. $ENV_FILE) — оповещение отправить некуда." >&2
  exit 1
fi

send_alert() {
  local text="$1"
  curl -s -X POST "https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage" \
    -d chat_id="${TG_CHAT_ID}" \
    -d text="${text}" \
    -d parse_mode="HTML" > /dev/null
}

# Память: используем доступную память (available), не "free" — available учитывает
# переиспользуемый buff/cache, free — нет, и часто пугающе занижен на Linux без причины.
MEM_TOTAL_KB=$(awk '/MemTotal/ {print $2}' /proc/meminfo)
MEM_AVAIL_KB=$(awk '/MemAvailable/ {print $2}' /proc/meminfo)
MEM_USED_PCT=$(( 100 - (MEM_AVAIL_KB * 100 / MEM_TOTAL_KB) ))

# Диск: корневой раздел.
DISK_USED_PCT=$(df --output=pcent / | tail -1 | tr -dc '0-9')

ALERTS=()
if [ "$MEM_USED_PCT" -ge "$THRESHOLD" ]; then
  ALERTS+=("🧠 Память: ${MEM_USED_PCT}% (порог ${THRESHOLD}%)")
fi
if [ "$DISK_USED_PCT" -ge "$THRESHOLD" ]; then
  ALERTS+=("💾 Диск: ${DISK_USED_PCT}% (порог ${THRESHOLD}%)")
fi

if [ ${#ALERTS[@]} -gt 0 ]; then
  MSG="⚠️ <b>faithchoice.net / referal — сервер 147.45.146.120</b>%0A"
  for a in "${ALERTS[@]}"; do
    MSG="${MSG}${a}%0A"
  done
  MSG="${MSG}%0AВремя: $(date '+%Y-%m-%d %H:%M')"
  send_alert "$MSG"
fi
