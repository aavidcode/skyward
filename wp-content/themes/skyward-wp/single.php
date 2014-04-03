<?php
/**
 * The Template for displaying all single posts
 *
 * @package WordPress
 * @subpackage skyward
 * @since skyward 1.0
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
    <div class="news-content">
        <div class="single-page-wrapper">
            <div class="address">
            <?php
                    while (have_posts()): the_post();
            echo '<h2>' . get_the_title() . '</h2>';
            the_content();
            endwhile;
            ?>
            </div>
            <div class="career-slider-content">
                <div class="loader">
                    <div class="flexslider career-slider career-landing">
                    <?php echo get_field('project_image'); ?>
                        <div class="img-popup">
                            <div class="sp"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-popup">
            <div class="flexslider career-slider">
            <?php echo get_field('project_image'); ?>
                <div class="img-popup img-pop">
                    <div class="ps"></div>
                </div>
            </div>
        </div>
<!--    </div>-->
</div>
<script type="text/javascript">
    if(window.location.href.indexOf("news") > -1) {
        $('.footer').addClass('footer-dark-bg');
    } else {
        $('.footer').removeClass('footer-dark-bg');
    }
</script>
<?php get_footer(); ?>