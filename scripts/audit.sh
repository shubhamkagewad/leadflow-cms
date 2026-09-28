#!/usr/bin/env bash

set -e

echo "======================================"
echo "        LeadFlow Website Audit"
echo "======================================"

echo ""

echo "Checking project structure..."
echo ""

required_files=(
    "wordpress/wp-content/themes/leadflow/style.css"
    "wordpress/wp-content/themes/leadflow/functions.php"
    "wordpress/wp-content/themes/leadflow/front-page.php"
    "wordpress/wp-content/themes/leadflow/header.php"
    "wordpress/wp-content/themes/leadflow/footer.php"
    "wordpress/wp-content/themes/leadflow/assets/css/base.css"
    "wordpress/wp-content/themes/leadflow/assets/js/main.js"
    "api/src/server.ts"
    "api/src/routes/leadRoutes.ts"
    "api/src/routes/newsletterRoutes.ts"
)

missing_files=0

for file in "${required_files[@]}"; do

    if [ -f "$file" ]; then

        echo "✓ $file"

    else

        echo "✗ Missing: $file"

        missing_files=$((missing_files + 1))

    fi

done


echo ""
echo "Checking sensitive files..."

if [ -f ".env" ]; then

    echo "⚠ .env exists locally."

else

    echo "✓ .env not found."

fi


if [ -f ".gitignore" ]; then

    echo "✓ .gitignore exists."

else

    echo "✗ .gitignore missing."

fi


echo ""
echo "Checking Node.js API..."

if [ -f "api/package.json" ]; then

    echo "✓ API package.json found."

else

    echo "✗ API package.json missing."

fi


echo ""
echo "======================================"

if [ "$missing_files" -eq 0 ]; then

    echo "Audit completed successfully."

else

    echo "Audit completed with $missing_files missing file(s)."

    exit 1

fi

echo "======================================"