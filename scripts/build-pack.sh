#!/bin/bash
# build-pack.sh — empaqueta un drop o lead magnet con LICENSE.txt incluido
#
# Uso:
#   ./scripts/build-pack.sh <pack-name> <source-dir>
#
# Ejemplo:
#   ./scripts/build-pack.sh sahara-may-2026 ~/Music/Drumzon/sahara-may-2026
#   ./scripts/build-pack.sh the-first-drop ~/Music/Drumzon/the-first-drop
#
# Resultado:
#   ./packs/<pack-name>.zip  — pack listo para subir a R2
#
# Prerequisitos:
#   - LICENSE.txt en la raíz del repo (incluido en este commit)
#   - zip instalado (preinstalado en macOS y Linux)
#   - Opcional: wrangler CLI para subir auto a R2

set -e

PACK_NAME=$1
SOURCE_DIR=$2

if [ -z "$PACK_NAME" ] || [ -z "$SOURCE_DIR" ]; then
  echo "❌ Uso: ./scripts/build-pack.sh <pack-name> <source-dir>"
  echo "   Ej:  ./scripts/build-pack.sh sahara-may-2026 ~/Music/Drumzon/sahara-may-2026"
  exit 1
fi

if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ Source dir no existe: $SOURCE_DIR"
  exit 1
fi

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LICENSE_PATH="$REPO_ROOT/LICENSE.txt"
PACKS_DIR="$REPO_ROOT/packs"
WORK_DIR="$PACKS_DIR/$PACK_NAME"

if [ ! -f "$LICENSE_PATH" ]; then
  echo "❌ LICENSE.txt no existe en $LICENSE_PATH"
  echo "   Crea el archivo master antes de buildear packs."
  exit 1
fi

mkdir -p "$PACKS_DIR"

echo "📦 Building pack: $PACK_NAME"
echo "   Source: $SOURCE_DIR"
echo "   Output: $PACKS_DIR/$PACK_NAME.zip"
echo ""

# Limpia builds previos
rm -rf "$WORK_DIR"
rm -f "$PACKS_DIR/$PACK_NAME.zip"

# Copia source al work dir
echo "📂 Copying source files..."
cp -R "$SOURCE_DIR" "$WORK_DIR"

# Inyecta LICENSE.txt en la raíz del pack
echo "📜 Injecting LICENSE.txt..."
cp "$LICENSE_PATH" "$WORK_DIR/LICENSE.txt"

# Verifica que NO haya .DS_Store ni archivos basura
echo "🧹 Cleaning .DS_Store and junk..."
find "$WORK_DIR" -name ".DS_Store" -delete
find "$WORK_DIR" -name "Thumbs.db" -delete
find "$WORK_DIR" -name "__MACOSX" -exec rm -rf {} + 2>/dev/null || true

# Listado de qué va dentro (visual confirmation)
echo ""
echo "📋 Pack contents:"
find "$WORK_DIR" -maxdepth 2 -type f | sort | sed "s|$WORK_DIR|  |"
echo ""

# Zippea con compresión sin meta de macOS
echo "🗜  Zipping..."
cd "$PACKS_DIR"
zip -r -X "$PACK_NAME.zip" "$PACK_NAME" -x "*.DS_Store" "__MACOSX*"
cd - > /dev/null

# Limpia work dir
rm -rf "$WORK_DIR"

# Tamaño final
SIZE=$(du -h "$PACKS_DIR/$PACK_NAME.zip" | cut -f1)
echo ""
echo "✅ Pack built: $PACKS_DIR/$PACK_NAME.zip ($SIZE)"
echo ""

# Subida opcional a R2 si wrangler está disponible y R2_BUCKET está set
if command -v wrangler &> /dev/null && [ -n "$R2_BUCKET" ]; then
  echo "☁️  Uploading to R2 bucket: $R2_BUCKET..."
  wrangler r2 object put "$R2_BUCKET/$PACK_NAME.zip" --file="$PACKS_DIR/$PACK_NAME.zip"
  echo "✅ Uploaded to R2"
  echo ""
  echo "Public URL (si bucket es público):"
  echo "  $R2_PUBLIC_URL/$PACK_NAME.zip"
else
  echo "ℹ️  Wrangler no detectado o R2_BUCKET no set."
  echo "   Sube manualmente: Cloudflare Dashboard → R2 → $PACKS_DIR/$PACK_NAME.zip"
fi
