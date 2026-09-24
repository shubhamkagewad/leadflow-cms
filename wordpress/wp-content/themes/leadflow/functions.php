<?php

function leadflow_theme_setup() {

    add_theme_support('title-tag');

    add_theme_support('post-thumbnails');

    register_nav_menus([
        'primary' => 'Primary Menu'
    ]);
}

add_action('after_setup_theme', 'leadflow_theme_setup');