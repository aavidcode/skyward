<?php
/**
 * Template Name: career
 */
get_header();
?>
<div id="content">
    <div class="career">
        <div class="flexslider"> <!-- start of slider -->
        <?php
                $page = get_page_by_title('career');
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
            echo get_field('careers');
        ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>