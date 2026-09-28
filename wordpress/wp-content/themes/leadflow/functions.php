<?php

function leadflow_theme_setup() {

    add_theme_support('title-tag');

    add_theme_support('post-thumbnails');

    register_nav_menus([
        'primary' => 'Primary Menu'
    ]);
}

add_action('after_setup_theme', 'leadflow_theme_setup');
function leadflow_enqueue_assets() {

    wp_enqueue_style(
        'leadflow-base',
        get_template_directory_uri() . '/assets/css/base.css',
        [],
        '1.0'
    );
}

add_action('wp_enqueue_scripts', 'leadflow_enqueue_assets');

function leadflow_enqueue_scripts() {

    wp_enqueue_script(
        'leadflow-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        '1.0',
        true
    );
}

add_action('wp_enqueue_scripts', 'leadflow_enqueue_scripts');