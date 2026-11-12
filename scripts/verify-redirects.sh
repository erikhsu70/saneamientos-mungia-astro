#!/usr/bin/env bash
# Usage: scripts/verify-redirects.sh [curl connection options]
set -euo pipefail

config="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/public/.htaccess"
pass=0
fail=0
while read -r source destination; do
  url="https://saneamientosmungia.com/$source/"
  if result=$(curl --silent --show-error --max-time 15 --location --max-redirs 2 \
    --output /dev/null --write-out '%{http_code} %{num_redirects} %{url_effective}' "$@" "$url") &&
    [[ "$result" == "200 1 $destination" ]] &&
    first=$(curl --silent --show-error --max-time 15 \
      --output /dev/null --write-out '%{http_code} %{redirect_url}' "$@" "$url") &&
    [[ "$first" == "301 $destination" ]]; then
    pass=$((pass + 1))
  else
    printf 'FAIL %s → %s (%s)\n' "$url" "$destination" "${result:-no response}"
    fail=$((fail + 1))
  fi
done < <(awk '/^# URLs históricas/ { block=1; next } /^RewriteCond/ { block=0 } block && /^RewriteRule/ {
  source=$2; sub(/^\^/, "", source); sub(/\/\?\$$/, "", source); print source, $3
}' "$config")

printf '%d redirects passed, %d failed\n' "$pass" "$fail"
[[ "$pass" -gt 0 && "$fail" -eq 0 ]]
