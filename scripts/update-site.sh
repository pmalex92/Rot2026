#!/usr/bin/env bash
# Reconstruiește site-ul pe VPS: ia ultima versiune din git, preia știrile de pe Facebook,
# generează dist/ și îl copiază în folderul servit de nginx. Făcut pentru cron (vezi README.md).
#
#   WEB_ROOT=/var/www/rotaryclubcaransebes.ro ./scripts/update-site.sh
set -euo pipefail

WEB_ROOT="${WEB_ROOT:-/var/www/rotaryclubcaransebes.ro}"
cd "$(dirname "$0")/.."

# Fișierele generate de sync (știri + poze) se refac la fiecare rulare, deci pot fi suprascrise.
git fetch --quiet origin main
git reset --quiet --hard origin/main

# Reinstalează pachetele doar când s-a schimbat package-lock.json.
if [ ! -d node_modules ] || [ package-lock.json -nt node_modules/.package-lock.json ]; then
  npm ci --no-audit --no-fund
fi

npm run build
# .well-known/ (certificate challenges, domain verification files) is not part of the build: never delete it.
rsync -a --delete --exclude ".well-known/" dist/ "$WEB_ROOT/"
echo "[update-site] $(date '+%F %T') site actualizat în $WEB_ROOT"
