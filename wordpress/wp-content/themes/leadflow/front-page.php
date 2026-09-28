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
<!-- Services Section -->
<section class="services-section">

    <div class="container">

        <div class="section-heading">

            <p class="section-heading__eyebrow">
                What We Do
            </p>

            <h2 class="section-heading__title">
                Everything You Need to Grow Online
            </h2>

            <p class="section-heading__description">
                From high-performance websites to SEO and lead generation,
                LeadFlow provides the tools businesses need to grow digitally.
            </p>

        </div>

        <div class="services-grid">

            <article class="service-card">

                <div class="service-card__icon">
                    01
                </div>

                <h3 class="service-card__title">
                    Website Development
                </h3>

                <p class="service-card__description">
                    Build responsive, fast and user-friendly websites
                    designed for modern businesses.
                </p>

            </article>


            <article class="service-card">

                <div class="service-card__icon">
                    02
                </div>

                <h3 class="service-card__title">
                    SEO Optimization
                </h3>

                <p class="service-card__description">
                    Improve technical and on-page SEO to help your
                    website become easier to discover.
                </p>

            </article>


            <article class="service-card">

                <div class="service-card__icon">
                    03
                </div>

                <h3 class="service-card__title">
                    Lead Generation
                </h3>

                <p class="service-card__description">
                    Create conversion-focused experiences that turn
                    website visitors into potential customers.
                </p>

            </article>

        </div>

    </div>

</section>
</main>

<?php

get_footer();