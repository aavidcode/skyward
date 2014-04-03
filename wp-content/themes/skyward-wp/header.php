<?php
/**
 * The Header for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage skyward
 * @since skyward 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8) ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico"/>
    <link rel="stylesheet" media="all" href="<?php echo get_template_directory_uri(); ?>/style.css"/>
    <link rel="stylesheet" media="all" href="<?php echo get_template_directory_uri(); ?>/assets/vendor/Flexslider.css"/>
    <link rel="stylesheet" media="all" href="<?php echo get_template_directory_uri(); ?>/assets/vendor/jquery.mCustomScrollbar.css"/>
    <script  src="<?php echo get_template_directory_uri(); ?>/assets/vendor/modernizr-2.6.2.min.js"></script>
    <script  src="<?php echo get_template_directory_uri();?>/assets/vendor/jquery-1.8.3.min.js"></script>
    <script  src="<?php echo get_template_directory_uri(); ?>/assets/vendor/jquery.flexslider.js"></script>
    <script  src="<?php echo get_template_directory_uri(); ?>/assets/vendor/jquery.mousewheel.js"></script>
    <script  src="<?php echo get_template_directory_uri(); ?>/assets/vendor/jquery.nicescroll.js"></script>
    <script  src="<?php echo get_template_directory_uri(); ?>/assets/vendor/jquery.mCustomScrollbar.concat.min.js"></script>
    <script  src="<?php echo get_template_directory_uri(); ?>/assets/js/script.js"></script>
<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php echo '<input type="hidden" id="base_url" name="base_url" value="' . site_url() . '" >' ?>