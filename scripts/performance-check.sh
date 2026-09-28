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
echo "Checking image formats..."
echo ""

UNOPTIMIZED_IMAGES=0

for file in \
    wordpress/wp-content/themes/leadflow/assets/images/*
do
    if [ -f "$file" ]; then

        case "$file" in

            *.jpg|*.jpeg|*.png|*.gif)

                echo "⚠ Consider converting to WebP or AVIF: $file"

                UNOPTIMIZED_IMAGES=$((UNOPTIMIZED_IMAGES + 1))

                ;;

            *.webp|*.avif)

                echo "✓ Optimized image format: $file"

                ;;

            *)

                echo "✓ Image format checked: $file"

                ;;

        esac

    fi
done

if [ "$UNOPTIMIZED_IMAGES" -eq 0 ]; then
    echo "✓ No JPG, JPEG, PNG or GIF images found."
fi
echo ""
echo "Checking accessibility basics..."
echo ""

THEME_DIR="wordpress/wp-content/themes/leadflow"

echo "Checking image alt attributes..."

if grep -R '<img' "$THEME_DIR" \
    --include="*.php" \
    --include="*.html" \
    | grep -v 'alt=' >/dev/null 2>&1; then

    echo "⚠ Images without alt attributes may exist."

else

    echo "✓ No images missing alt attributes detected."

fi


echo ""
echo "Checking form labels..."

FORM_COUNT=$(grep -R '<form' "$THEME_DIR" \
    --include="*.php" \
    --include="*.html" \
    | wc -l)

LABEL_COUNT=$(grep -R '<label' "$THEME_DIR" \
    --include="*.php" \
    --include="*.html" \
    | wc -l)

echo "  Forms found: $FORM_COUNT"
echo "  Labels found: $LABEL_COUNT"


echo ""
echo "Checking viewport meta tag..."

if grep -R 'name="viewport"' "$THEME_DIR" \
    --include="*.php" \
    --include="*.html" \
    >/dev/null 2>&1; then

    echo "✓ Viewport meta tag found."

else

    echo "⚠ Viewport meta tag not found."

fi
echo ""

echo "======================================"
echo "Performance check completed."
echo "======================================"