<?php

get_header();

?>

<main>

    <!-- Hero Section -->
    <section class="hero-section">

        <div class="container hero-section__inner">

            <div class="hero-section__content">

                <p class="hero-section__eyebrow">
                    Digital Growth Platform
                </p>

                <h1 class="hero-section__title">
                    Build Faster Websites.
                    Generate More Leads.
                </h1>

                <p class="hero-section__description">
                    LeadFlow helps businesses create fast, SEO-friendly
                    websites that turn visitors into qualified leads.
                </p>

                <div class="hero-section__actions">

                    <a
                        class="button button--primary"
                        href="<?php echo esc_url(home_url('/contact/')); ?>"
                    >
                        Get Started
                    </a>

                    <a
                        class="button button--secondary"
                        href="<?php echo esc_url(home_url('/services/')); ?>"
                    >
                        Explore Services
                    </a>

                </div>

            </div>

        </div>

    </section>

</main>

<?php

get_footer();