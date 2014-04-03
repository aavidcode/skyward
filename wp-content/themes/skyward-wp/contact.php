<?php
/**
 * Template Name: contact
 */
get_header();
?>
<div id="content">
    <div class="contact">
        <div class="single-page-wrapper">
        <?php
                while (have_posts()): the_post();
        the_content();
        endwhile;
        ?>
            <span class="s-image"></span>
        </div>
    </div>
</div>
<?php get_footer(); ?>