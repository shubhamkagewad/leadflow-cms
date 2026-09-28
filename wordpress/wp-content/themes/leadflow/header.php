<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>

    <meta charset="<?php bloginfo('charset'); ?>">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<header class="site-header">

    <div class="container site-header__inner">

        <a
            class="site-logo"
            href="<?php echo esc_url(home_url('/')); ?>"
        >
            LeadFlow
        </a>

        <button
    class="menu-toggle"
    type="button"
    aria-label="Toggle navigation"
    aria-expanded="false"
    aria-controls="primary-navigation"
>
    ☰
</button>

        <nav
    id="primary-navigation"
    class="site-navigation"
    aria-label="Primary navigation"
>

            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container'      => false,
                'fallback_cb'    => false
            ]);
            ?>

            <a
                class="header-cta"
                href="<?php echo esc_url(home_url('/contact/')); ?>"
            >
                Get Started
            </a>

        </nav>

    </div>

</header>