#!/usr/bin/env bash

set -e

echo "======================================"
echo "      LeadFlow Performance Check"
echo "======================================"

echo ""

echo "Checking frontend assets..."
echo ""

CSS_FILE="wordpress/wp-content/themes/leadflow/assets/css/base.css"
JS_FILE="wordpress/wp-content/themes/leadflow/assets/js/main.js"

if [ -f "$CSS_FILE" ]; then

    CSS_SIZE=$(wc -c < "$CSS_FILE")

    echo "✓ CSS file found"
    echo "  Size: ${CSS_SIZE} bytes"

else

    echo "✗ CSS file missing"

fi


if [ -f "$JS_FILE" ]; then

    JS_SIZE=$(wc -c < "$JS_FILE")

    echo "✓ JavaScript file found"
    echo "  Size: ${JS_SIZE} bytes"

else

    echo "✗ JavaScript file missing"

fi


echo ""

echo "Checking for large frontend files..."
echo ""

MAX_SIZE=500000

for file in \
    wordpress/wp-content/themes/leadflow/assets/css/* \
    wordpress/wp-content/themes/leadflow/assets/js/* \
    wordpress/wp-content/themes/leadflow/assets/images/*

do

    if [ -f "$file" ]; then

        FILE_SIZE=$(wc -c < "$file")

        if [ "$FILE_SIZE" -gt "$MAX_SIZE" ]; then

            echo "⚠ Large file: $file (${FILE_SIZE} bytes)"

        else

            echo "✓ $file (${FILE_SIZE} bytes)"

        fi

    fi

done

echo ""

echo "Checking image assets..."
echo ""

IMAGE_COUNT=0

for file in \
    wordpress/wp-content/themes/leadflow/assets/images/*

do

    if [ -f "$file" ]; then

        IMAGE_COUNT=$((IMAGE_COUNT + 1))

        FILE_SIZE=$(wc -c < "$file")

        echo "✓ Image: $file (${FILE_SIZE} bytes)"

    fi

done


if [ "$IMAGE_COUNT" -eq 0 ]; then

    echo "✓ No image assets found."

fi
echo ""

echo "Checking JavaScript console statements..."
echo ""

if grep -R "console.log" \
    wordpress/wp-content/themes/leadflow/assets/js \
    >/dev/null 2>&1; then

    echo "⚠ console.log statements found."

else

    echo "✓ No console.log statements found."

fi


echo ""

echo "======================================"
echo "Performance check completed."
echo "======================================"