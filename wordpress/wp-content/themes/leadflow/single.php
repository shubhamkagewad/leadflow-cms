<?php

get_header();

?>

<main>

    <?php if (have_posts()) : ?>

        <?php while (have_posts()) : ?>

            <?php the_post(); ?>

            <article class="single-post">

                <div class="container">

                    <header class="single-post__header">

                        <p class="single-post__eyebrow">
                            LeadFlow Insights
                        </p>

                        <h1 class="single-post__title">
                            <?php the_title(); ?>
                        </h1>

                        <p class="single-post__meta">
                            Published on
                            <?php echo esc_html(
                                get_the_date()
                            ); ?>
                        </p>

                        <?php if (has_post_thumbnail()) : ?>

    <div class="single-post__image">

        <?php
        the_post_thumbnail(
            'large',
            [
                'loading' => 'lazy'
            ]
        );
        ?>

    </div>

<?php endif; ?>

                    </header>

                    <div class="single-post__content">

                        <?php the_content(); ?>

                    </div>

                </div>

            </article>

        <?php endwhile; ?>

    <?php endif; ?>

</main>

<?php

get_footer();