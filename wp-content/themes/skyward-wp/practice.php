<?php
/**
 * Template Name: practice
 */
get_header();
?>
<div class="content" id="content">
    <div class="overlay"></div>
    <div class="flexslider">
    <?php
    while (have_posts()): the_post();
    the_content();
    endwhile;
    ?>
    </div>
    <div class="content-wrapper">
    <?php
    echo '<h2>' . get_field('page_heading') . '</h2>';

    echo "<div class='detail-content'>";
    echo "<div class='down-arrow-block'><p class='down-arrow'></p></div>";
    echo "<div class='drop-down-description'>";
    echo '<p>' . get_field('page_description') . '</p>';
    echo '<p class="up-arrow"></p>';
    echo '</div></div>';
    ?>
    </div>
</div>
<?php get_footer(); ?>