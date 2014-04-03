<?php
/**
 * Template Name: home
 */
get_header();
?>
<div class="loader1"></div>
<div class="splash-tower"></div>
<div class="splash"></div>
<div class="content" id="content">
    <div class="flexslider"> <!-- start of slider -->
    <?php
    while (have_posts()): the_post();
    the_content();
    endwhile;
    ?>
    </div>
</div>
<?php get_footer(); ?>