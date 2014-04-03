<?php
/**
 * Template Name: blog
 */
get_header();
?>
<div class="content" id="content">
    <div class="blog">
        <div class="overlay"></div>
        <div class="flexslider"> <!-- start of slider -->
        <?php
                $page = get_page_by_title('blog');
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
        ?>
        </div>
    </div>
</div>
<?php get_footer(); ?>