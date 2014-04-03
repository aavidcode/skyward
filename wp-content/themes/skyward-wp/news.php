<?php
/**

 * Template Name: News
 */
get_header();
?>
<div class="content" id="content">
    <div class="news-bg-slider">
        <div class="overlay"></div>
        <div class="flexslider">
        <?php
            $page = get_page_by_title('practice');
            $content = apply_filters('the_content', $page->post_content);
            echo $content;
        ?>
        </div>
    </div>
    <div class="news-content only-news">
        <div class="single-page-wrapper">
            <div class="address">
            <?php
                     echo '<h2>' . get_the_title() . '</h2>';
            echo get_field('add_content');
            ?>
            </div>
            <div class="career-slider-content">
                <div class="loader">
                    <div class="flexslider career-slider career-landing">
                    <?php
                    while (have_posts()) : the_post();
                    the_content();
                    endwhile;
                    ?>
                        <div class="img-popup">
                            <div class="sp"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-popup">
            <div class="flexslider career-slider">
            <?php
            while (have_posts()) : the_post();
            the_content();
            endwhile;
            ?>
                <div class="img-popup img-pop">
                    <div class="ps"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php get_footer() ?>