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
                    data-track="primary_cta">
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

            <?php

$services_query = new WP_Query([
    'post_type'      => 'service',
    'posts_per_page' => 3,
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'order'          => 'ASC'
]);

if ($services_query->have_posts()) :

    while ($services_query->have_posts()) :

        $services_query->the_post();

        ?>

        <article class="service-card">

            <div class="service-card__content">

                <h3 class="service-card__title">
                    <?php the_title(); ?>
                </h3>

                <div class="service-card__description">

                    <?php the_content(); ?>

                </div>

            </div>

        </article>

        <?php

    endwhile;

    wp_reset_postdata();

else :

    ?>

    <p>
        Services will be available soon.
    </p>

    <?php

endif; ?>

        </div>

    </div>

</section>
    <!-- Why LeadFlow Section -->
    <section class="why-section">

        <div class="container">

            <div class="section-heading">

                <p class="section-heading__eyebrow">
                    Why LeadFlow
                </p>

                <h2 class="section-heading__title">
                    Built for Performance and Growth
                </h2>

                <p class="section-heading__description">
                    LeadFlow combines modern web development practices
                    with SEO and performance optimization.
                </p>

            </div>

            <div class="why-grid">

                <article class="why-card">

                    <div class="why-card__icon">
                        01
                    </div>

                    <h3 class="why-card__title">
                        Fast Performance
                    </h3>

                    <p class="why-card__description">
                        Lightweight HTML, CSS and JavaScript help create
                        fast-loading experiences across devices.
                    </p>

                </article>


                <article class="why-card">

                    <div class="why-card__icon">
                        02
                    </div>

                    <h3 class="why-card__title">
                        SEO Ready
                    </h3>

                    <p class="why-card__description">
                        Semantic HTML, clean structure and technical SEO
                        practices help search engines understand the website.
                    </p>

                </article>


                <article class="why-card">

                    <div class="why-card__icon">
                        03
                    </div>

                    <h3 class="why-card__title">
                        Mobile First
                    </h3>

                    <p class="why-card__description">
                        Responsive layouts ensure the website works smoothly
                        across mobile, tablet and desktop devices.
                    </p>

                </article>

            </div>

        </div>

    </section>
        <!-- CTA Section -->
    <section class="cta-section">

        <div class="container">

            <div class="cta-section__content">

                <p class="cta-section__eyebrow">
                    Ready to Grow?
                </p>

                <h2 class="cta-section__title">
                    Turn More Website Visitors Into Leads
                </h2>

                <p class="cta-section__description">
                    Build a faster, SEO-friendly website designed to
                    support your marketing and lead-generation goals.
                </p>

                <a
                    class="button button--primary"
                    href="<?php echo esc_url(home_url('/contact/')); ?>"
                >
                    Start a Conversation
                </a>

            </div>

        </div>

    </section>
</main>
<section class="newsletter-section">

    <div class="container newsletter-section__inner">

        <div class="newsletter-content">

            <p class="section-heading__eyebrow">
                Stay Updated
            </p>

            <h2>
                Get Web Development & Marketing Insights
            </h2>

            <p>
                Subscribe to receive useful insights about web development,
                SEO, performance and lead generation.
            </p>

        </div>


        <div class="newsletter-form-wrapper">

            <form
                id="newsletter-form"
                class="newsletter-form"
                novalidate
            >

                <div class="newsletter-form__field">

                    <label
                        for="newsletter-email"
                    >
                        Email Address
                    </label>

                    <input
                        type="email"
                        id="newsletter-email"
                        name="email"
                        autocomplete="email"
                        placeholder="Enter your email"
                        required
                    >

                </div>

<input type="hidden" name="utm_source" id="utm_source">

<input type="hidden" name="utm_medium" id="utm_medium">

<input type="hidden" name="utm_campaign" id="utm_campaign">
                <button
                    type="submit"
                    class="button button--primary newsletter-form__submit"
                >
                    Subscribe
                </button>

            </form>


            <p
                id="newsletter-status"
                class="newsletter-form__status"
                aria-live="polite"
            ></p>

        </div>

    </div>

</section>
<?php

get_footer();