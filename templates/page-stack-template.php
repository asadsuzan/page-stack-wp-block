<?php
/* Minimal template without header and footer */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <main id="primary" class="site-main">
        <?php
        while ( have_posts() ) :
            the_post();
            the_content(); // this will render your Page Stack block
        endwhile;
        ?>
    </main>
    <?php wp_footer(); ?>
</body>
</html>
