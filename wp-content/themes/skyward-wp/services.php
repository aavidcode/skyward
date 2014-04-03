<?php
/**
 * Template Name: Services
 */
get_header();
?>
<div class="content" id="content">
    <div class="overlay"></div>
    <div class="flexslider"> <!-- start of slider -->
    <?php
        $page = get_page_by_title('services');
    $content = apply_filters('the_content', $page->post_content);
    if ($content != '') {
        echo $content;
    } else {
        $page = get_page_by_title('practice');
        $content = apply_filters('the_content', $page->post_content);
        echo $content;
    }
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