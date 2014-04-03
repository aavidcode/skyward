<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage skyward
 * @since skyward 1.0
 */
?>
<div class="copyright">
       <span>
         <?php echo get_field('copyright', 5); ?>
       </span>
</div>

<footer class='footer'>
    <div class="footer-dark-bg"></div>
    <div class="footer-light-bg"></div>
    <div class="footer-wrapper">
    <?php wp_nav_menu(array('theme_location' => 'footer', 'menu_class' => 'footer-left-sidebar')); ?>
    <?php wp_nav_menu(array('theme_location' => 'practice', 'menu_class' => 'practice-sidebar')); ?>
    <?php wp_nav_menu(array('theme_location' => 'services', 'menu_class' => 'practice-submenu-sidebar')); ?>
    <?php wp_nav_menu(array('theme_location' => 'team', 'menu_class' => 'team-sidebar')); ?>
    <?php wp_nav_menu(array('theme_location' => 'project', 'menu_class' => 'project-sidebar')); ?>
    <?php wp_nav_menu(array('theme_location' => 'project-type', 'menu_class' => 'project-type-sidebar')); ?>
        <div class="footer-right-logo">

        <h1><a href="<?php echo site_url(); ?>">Skywardinc</a>Skywardinc</h1>
        <?php wp_nav_menu(array('theme_location' => 'secondary', 'menu_class' => 'footer-right-sidebar')); ?>
        </div>
        <div id="scroll" class="project-titles scroll_content">
        <?php
        $args = array('post_type' => 'post', 'category_name' => 'hospitality', 'orderby' => 'post_date', 'order' => 'ASC', 'showposts' => -1);
        $myposts = get_posts($args);
        foreach ($myposts as $post) : setup_postdata($post);
        echo '<a href="' . get_permalink() . '">' . get_the_title() . '</a>';
        endforeach;
        ?>
        </div>

        <div id="residential" class="scroll_content">
        <?php
        $args = array('post_type' => 'post', 'category_name' => 'residential', 'orderby' => 'post_date', 'order' => 'ASC', 'showposts' => -1);
        $myposts = get_posts($args);
        foreach ($myposts as $post) : setup_postdata($post);
        echo '<a href="' . get_permalink() . '">' . get_the_title() . '</a>';
        endforeach;
        ?>
        </div>

        <div id="commercial" class="scroll_content">
        <?php
        $args = array('post_type' => 'post', 'category_name' => 'commercial', 'orderby' => 'post_date', 'order' => 'ASC', 'showposts' => -1);
        $myposts = get_posts($args);
        foreach ($myposts as $post) : setup_postdata($post);
        echo '<a href="' . get_permalink() . '">' . get_the_title() . '</a>';
        endforeach;
        ?>
        </div>

        <div id="civic" class="scroll_content">
        <?php
        $args = array('post_type' => 'post', 'category_name' => 'civic', 'orderby' => 'post_date', 'order' => 'ASC', 'showposts' => -1);
        $myposts = get_posts($args);
        foreach ($myposts as $post) : setup_postdata($post);
        echo '<a href="' . get_permalink() . '">' . get_the_title() . '</a>';
        endforeach;
        ?>
        </div>

    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>