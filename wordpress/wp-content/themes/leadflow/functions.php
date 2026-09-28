<?php
define(
    'LEADFLOW_VERSION',
    '1.0.0'
);
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
    LEADFLOW_VERSION
);
}

add_action('wp_enqueue_scripts', 'leadflow_enqueue_assets');

function leadflow_enqueue_scripts() {

    wp_enqueue_script(
    'leadflow-main',
    get_template_directory_uri() . '/assets/js/main.js',
    [],
    LEADFLOW_VERSION,
    true
);
}

add_action('wp_enqueue_scripts', 'leadflow_enqueue_scripts');

function leadflow_add_meta_description() {

    if (is_front_page()) {

        $description =
            'LeadFlow helps businesses build fast, SEO-friendly websites and generate more leads through modern web development and digital marketing solutions.';

    } elseif (is_page('contact')) {

        $description =
            'Contact LeadFlow to discuss website development, SEO, performance optimization and lead generation solutions.';

    } elseif (is_page('services')) {

        $description =
            'Explore LeadFlow website development, SEO optimization and lead generation services.';

    } else {

        $description =
            'LeadFlow - performance-focused web development, SEO and lead generation solutions.';

    }


    echo '<meta name="description" content="' .
        esc_attr($description) .
        '">' . "\n";
}

add_action(
    'wp_head',
    'leadflow_add_meta_description'
);
function leadflow_add_canonical_url() {

    if (is_singular()) {

        $canonical_url =
            get_permalink();

        echo '<link rel="canonical" href="' .
            esc_url($canonical_url) .
            '">' . "\n";
    }

}

add_action(
    'wp_head',
    'leadflow_add_canonical_url'
);

function leadflow_add_open_graph_tags() {

    if (is_front_page()) {

        $title =
            'LeadFlow - Build Faster Websites. Generate More Leads.';

        $description =
            'Performance-focused web development, SEO and lead generation solutions.';

        $url =
            home_url('/');

    } else {

        $title =
            wp_get_document_title();

        $description =
            get_bloginfo('description');

        $url =
            get_permalink();

    }


    echo '<meta property="og:title" content="' .
        esc_attr($title) .
        '">' . "\n";

    echo '<meta property="og:description" content="' .
        esc_attr($description) .
        '">' . "\n";

    echo '<meta property="og:url" content="' .
        esc_url($url) .
        '">' . "\n";
echo '<meta property="og:site_name" content="' .
    esc_attr(get_bloginfo('name')) .
    '">' . "\n";
    echo '<meta property="og:type" content="website">' .
        "\n";

}

add_action(
    'wp_head',
    'leadflow_add_open_graph_tags'
);
function leadflow_add_robots_rules(
    $output,
    $public
) {

    if ($public) {

        $output .=
            "\nSitemap: " .
            esc_url(
                home_url('/wp-sitemap.xml')
            ) .
            "\n";
    }


    return $output;
}

add_filter(
    'robots_txt',
    'leadflow_add_robots_rules',
    10,
    2
);
function leadflow_add_schema_markup() {

    if (!is_front_page()) {
        return;
    }


    $schema = [

        '@context' => 'https://schema.org',

        '@type' => 'Organization',

        'name' => 'LeadFlow',

        'url' => home_url('/'),

        'description' =>
            'Performance-focused web development, SEO and lead generation solutions.'

    ];


    echo '<script type="application/ld+json">' .
        wp_json_encode($schema) .
        '</script>' . "\n";

}

add_action(
    'wp_head',
    'leadflow_add_schema_markup'
);
