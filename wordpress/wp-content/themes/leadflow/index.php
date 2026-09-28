<?php

get_header();

?>

<main>

    <?php if (have_posts()) : ?>

        <?php while (have_posts()) : ?>

            <?php the_post(); ?>

            <article class="container">

                <h1>
                    <?php the_title(); ?>
                </h1>

                <div>
                    <?php the_content(); ?>
                </div>

            </article>

        <?php endwhile; ?>

    <?php else : ?>

        <p class="container">
            No content found.
        </p>

    <?php endif; ?>

</main>

<?php

get_footer();