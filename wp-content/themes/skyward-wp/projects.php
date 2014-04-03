<?php
/**
 * Template Name: projects
 */
get_header();
?>
<div class="content" id="content">
    <div class="flexslider"> <!-- start of slider -->
    <?php
    while (have_posts()): the_post();
    the_content();
    endwhile;
    ?>
    </div>
</div>
<?php get_footer();  ?>