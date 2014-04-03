<?php
/**
 * Template Name: project list
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
        <div class="project-list-wrapper ">
            <div class="project-list-header">
                <p>Project Name</p>

                <p>Category</p>

                <p>Location</p>

                <p>Scope Of Service</p>

                <p>Year</p>
            </div>
            <div class="project-list-space">
                <div class="project-scroll scroll-content">

                <?php
                            $args = array('post_type' => 'post', 'category_name' => 'projects', 'orderby' => 'title', 'order' => 'ASC', 'showposts' => -1);
                $myposts = get_posts($args);
                echo '<div class="titles-content">';
                foreach ($myposts as $post) : setup_postdata($post);
                echo '<div class="titles"><a href="' . get_permalink() . '">' . get_the_title() . '</a></div>';
                endforeach;
                echo '</div>';

                echo '<div class="category-content">';
                foreach ($myposts as $post) : setup_postdata($post);
                $category = get_field('category');
                echo '<div class="category">';
                if ($category != '') {
                    echo $category;
                } else {
                    echo '';
                }
                echo '</div>';
                endforeach;
                echo '</div>';

                echo '<div class="location-content">';
                foreach ($myposts as $post) : setup_postdata($post);
                $location = get_field('location');
                echo '<div class="location">';
                if ($location != '') {
                    echo $location;
                } else {
                    echo '';
                }
                echo '</div>';
                endforeach;
                echo '</div>';

                echo '<div class="scope-content">';
                foreach ($myposts as $post) : setup_postdata($post);
                $scope_of_service = get_field('scope_of_service');
                echo '<div class="scope">';
                if ($scope_of_service != '') {
                    echo $scope_of_service;
                } else {
                    echo '';
                }
                echo '</div>';
                endforeach;
                echo '</div>';

                echo '<div class="year-content">';
                foreach ($myposts as $post) : setup_postdata($post);
                $year = get_field('year');
                echo '<div class="year">';
                if ($year != '') {
                    echo $year;
                } else {
                    echo '';
                }
                echo '</div>';
                endforeach;
                echo '</div>';
                ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>