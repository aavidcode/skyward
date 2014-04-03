function AAPL_reload_code() {
//This file is generated from the admin panel - dont edit here! 
$('.down-arrow').click(function() {
        $(this).css('display', 'none');
        $('.drop-down-description').fadeIn();
        $('.overlay').fadeIn();
    })
    $('.up-arrow').click(function() {
        $('.drop-down-description').fadeOut(10);
        $('.down-arrow').fadeIn('slow');
        $('.overlay').fadeOut();
    })
$('.flexslider ul').addClass('slides');
    $('.flexslider').flexslider({
            animation: 'fade',
            animationSpeed: 600,
            animationLoop: true,
            slideshowSpeed: 8000,
            pauseOnAction: true,
            directionNav: true,
            pauseOnHover: true
        });

$('.menu-item-110').click(function(e) {
        showScrollp();
    });
       function showScrollp() {
        $("#scroll").show();
        $("#residential, #commercial, #civic").hide();
        if (!$("#scroll").hasClass("scroll_added")) {
            $(".scroll_content").niceScroll({autohidemode: false, zindex : "999999", cursorborderradius: "0", cursorwidth:"3px", railalign:"left", cursorborder:"0", cursorcolor:"#fff"});
            $("#scroll").addClass("scroll_added");
        }
    }
$('.menu-item-111').click(function(e) {
        showScrollr();
    });
 function showScrollr() {
        $("#residential").show();
        $("#scroll, #commercial, #civic").hide();
        if (!$("#residential").hasClass("scroll_added")) {
            $(".scroll_content").niceScroll({autohidemode: false, zindex : "999999", cursorborderradius: "0", cursorwidth:"3px", railalign:"left", cursorborder:"0", cursorcolor:"#fff"});
            $("#residential").addClass("scroll_added");
        }
    }
$('.menu-item-112').click(function(e) {
        showScrollc();
    });
    function showScrollc() {
        $("#commercial").show();
        $("#residential, #scroll, #civic").hide();
        if (!$("#commercial").hasClass("scroll_added")) {
            $(".scroll_content").niceScroll({autohidemode: false, zindex : "999999", cursorborderradius: "0", cursorwidth:"3px", railalign:"left", cursorborder:"0", cursorcolor:"#fff"});
            $("#commercial").addClass("scroll_added");
        }
    }
$('.menu-item-113').click(function(e) {
        showScrollcv();
    });
      function showScrollcv() {
        $("#civic").show();
        $("#residential, #commercial, #scroll").hide();
        if (!$("#civic").hasClass("scroll_added")) {
            $(".scroll_content").niceScroll({autohidemode: false, zindex : "999999", cursorborderradius: "0", cursorwidth:"3px", railalign:"left", cursorborder:"0", cursorcolor:"#fff"});
            $("#civic").addClass("scroll_added");
        }
    }
                
var $ht = $(window).height(),
      $wt = $(window).width();
$('.flexslider, .content, .flexslider .slides').css({
        'width': $wt,
        'height': $ht
    });
$('.flexslider li').each(function() {
        var src = "url(" + $(this).children('img').attr('src') + ")";
        $(this).css({
            'height': "100%",
            'width': "100%",
            'background': src + '0 0'
        });
        $(this).children('img').css('display', 'none');
    })
$('.career-slider-content .flexslider.career-slider li').each(function() {
        var src = "url(" + $(this).children('img').attr('src') + ")";
        $(this).css({
            'height': 450,
             'width': 470,
            'background': src + '0 0 / 100% 100%'
        });
        $(this).children('img').css('display', 'none');
    })

$('.sp').click(function() {
        $('.slider-popup, .flex-control-nav').fadeIn('slow');
        $('.single-page-wrapper, .footer, .nicescroll-rails').css('display', 'none');
        $('.flexslider.career-slider li').css('height', $ht);
        $('.news-content').css('height', '100%');
    });
    $('.ps').click(function() {
        //$('.footer-dark-bg').css('background-color', '#fff');
        $('.slider-popup, .flex-control-nav').css('display', 'none');
        $('.single-page-wrapper, .footer, .nicescroll-rails').css('display', 'block');
        $('.flexslider.career-slider li').css('height', '450');
        $('.news-content').css('height', '76%');
    });

$('.menu-item-40').click(function() {
        $('.menu-project-container').css('display', 'none');
    });

    $(".scroll-content").mCustomScrollbar({
        theme:"light"
    });

$('.loader .flexslider.career-slider').fadeIn(5000);


// For background-slider

 if ((window.location.href.indexOf("news") > -1) || (window.location.href.indexOf("project-list") > -1) || (window.location.href.indexOf("g-c-c-business-hotel") > -1) || (window.location.href.indexOf("flames-lounge") > -1) || (window.location.href.indexOf("only-parathas") > -1)) {
 var intervala = setInterval(function() {
            $('footer').css('display','block');
        }, 100);
        window.setTimeout(function() {
            clearInterval(intervala);
        }, 101);        
var $bgdark = $('.footer-dark-bg').css('background-image');
        $('.footer').css('background-image', $bgdark);
    } else {
        var $bglight = $('.footer-light-bg').css('background-image');
        $('.footer').css('background-image', $bglight);
    }
}

function AAPL_click_code(thiss) {
//This file is generated from the admin panel - dont edit here! 
// highlight the current menu item
jQuery('ul.menu li').each(function() {
	jQuery(this).removeClass('current-menu-item');
});
jQuery(thiss).parents('li').addClass('current-menu-item');
}

function AAPL_data_code(dataa) {
//This file is generated from the admin panel - dont edit here! 

}