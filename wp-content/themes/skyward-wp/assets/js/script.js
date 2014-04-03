$(document).ready(function() {

    var $w = $(window),
            $d = $(document),
            $footer = $('footer'),
            $copyRight = $('.copyright'),
            base_url = $('#base_url').val();

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

    $('.footer-wrapper ul li a').each(function() {

        $(this).click(function() {
            if ($(this).parent().parent().attr("id") == "menu-footer-left-sidebar") {
                $(".footer-wrapper").find("a").css('color', '#999');
            }
            $(this).parent().siblings().find('a').css('color', '#999');
            $(this).css('color', '#fff');
        })
    })

     $('.scroll_content a').each(function() {

        $(this).click(function() {
            $(this).css('color', '#fff');
            $(this).siblings().css('color', '#999');
        })
    })



    $('.flexslider ul').addClass('slides');

    function slider() {
        $('.flexslider').flexslider({
            animation: 'fade',
            animationSpeed: 600,
            animationLoop: true,
            slideshowSpeed: 5000,
            pauseOnAction: true,
            directionNav: true,
            pauseOnHover: true
        });
    }

    slider();

    var $imgWidth = $w.width(),
            $imgHeight = $w.height();

    if ($('.footer').is(':visible')) {
        $('.copyright').hide();
    }

    $('.flexslider, .content, .flexslider .slides').css({
        'width': $imgWidth,
        'height': $imgHeight
    });

    var x = $imgHeight - ($('.footer').height() + 30);
    $('.news-content').css('height', x);

    $('.single-page-wrapper .flexslider li').each(function() {
        $(this).css({
            'background-size': '100% 100%',
            'background-repeat': 'no-repeat'
        });
    });

    $('.flexslider li').each(function() {
        var src = "url(" + $(this).children('img').attr('src') + ")";
        $(this).css({
            'height': "100%",
            'width': "100%",
            'background': src + 'no-repeat 0 0 / cover'
        });
        $(this).children('img').css('display', 'none');
    })

    $('.slider-popup .flexslider li').each(function() {
        $(this).css({
            'background-size': 'contain',
            'background-repeat': 'no-repeat'
        });
    });

    $('.contact').css('height', $imgHeight);

    if ($imgWidth >= '980') {
        $('.footer').css('background-position', '49% 0');
        //$('.project-list-header p').css('width','160px');
    }


    if ((window.location.href.indexOf("news") > -1) || (window.location.href.indexOf("project-list") > -1) || (window.location.href.indexOf("g-c-c-business-hotel") > -1) || (window.location.href.indexOf("north-side-hotel") > -1) || (window.location.href.indexOf("luxal-hotel") > -1) || (window.location.href.indexOf("appartment-hotel") > -1) || (window.location.href.indexOf("nanded-club") > -1) || (window.location.href.indexOf("ramada-hotel") > -1) || (window.location.href.indexOf("3-star-hotel") > -1) || (window.location.href.indexOf("motilmahal-belapur") > -1) || (window.location.href.indexOf("motimahal-vashi") > -1) || (window.location.href.indexOf("motimahal-bahrain") > -1) || (window.location.href.indexOf("white") > -1) || (window.location.href.indexOf("flames") > -1) || (window.location.href.indexOf("black-lounge") > -1) || (window.location.href.indexOf("flames-lounge") > -1) || (window.location.href.indexOf("only-parathas") > -1) || (window.location.href.indexOf("sizzling-salsa") > -1) || (window.location.href.indexOf("upper-deck") > -1) || (window.location.href.indexOf("zing-cafe") > -1) || (window.location.href.indexOf("bay-leaf") > -1) || (window.location.href.indexOf("saalt") > -1) || (window.location.href.indexOf("purple-farm-villas") > -1) || (window.location.href.indexOf("waterfall") > -1) || (window.location.href.indexOf("pushpendra-city") > -1) || (window.location.href.indexOf("family") > -1) || (window.location.href.indexOf("residential") > -1) || (window.location.href.indexOf("goldmine") > -1) || (window.location.href.indexOf("tej-control") > -1) || (window.location.href.indexOf("dreamax") > -1) || (window.location.href.indexOf("thapar") > -1) || (window.location.href.indexOf("group") > -1) || (window.location.href.indexOf("irtwari") > -1) || (window.location.href.indexOf("university-planning") > -1) || (window.location.href.indexOf("mayor") > -1) || (window.location.href.indexOf("nanded") > -1) || (window.location.href.indexOf("karad") > -1) || (window.location.href.indexOf("government") > -1) || (window.location.href.indexOf("building") > -1) || (window.location.href.indexOf("college") > -1)) {
        var intervala = setInterval(function() {
            $('footer').css('display', 'block');
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

    if ($.browser.msie && parseInt($.browser.version, 10) === 8) {
        alert('Please Upgrade your browser');
    }

    function device() {
        if ($imgWidth == '980') {
            $('.splash-tower').css('background-size', 'cover');
            $('.slider-popup .img-pop').css('right', '20px');
            $('.flexslider li').css('background-size', 'cover');
            $('.single-page-wrapper').css('width', '92%');
            $('.project-list-wrapper').css('width', '94%');
            $('.project-list-header p, .titles, .category, .location, .scope, .year, .titles-content, .category-content, .location-content, .scope-content, .year-content').css('width', '148px');
            $('.location-content').css('width', '140px');
            $('.project-list-header > p:nth-child(4), .project-list-header > p:nth-child(5)').css('margin', '0');
            $('.project-list-header  p:nth-child(3)').css({'width':'128px', 'margin': '0 0 0 52px'});
            $('.project-list-header  p:nth-child(4)').css({'margin': '0 0 0 30px'});
            $('.project-list-header  p:nth-child(5)').css({'width':'105px', 'margin': '0 0 0 21px'});
        }
    }

    device();

    if (/iPad/i.test(navigator.userAgent)) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            $('.splash-tower').css('background-size', 'cover');
            $('.splash').css('background-position', 'center 60%');
            $('.news-content').css('height', '1025px');
            $('.flexslider li').css('background-size', 'cover');
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
            var x = $imgHeight - ($('.footer').height() + 30);
            $('.news-content').css('height', x);
            $('.splash').css('background-position', '50% 62%');
            $('.flexslider li').css('background-size', 'cover');
            $('.content-wrapper').css('left', '60px');
        }
    }

    $(window).bind('orientationchange', function() {
        $('.flexslider li').css('background-size', 'cover');
        if (window.matchMedia("(orientation: portrait)").matches) {
            $('.splash-tower').css('background-size', 'cover');
            $('.splash').css('background-position', 'center 60%');
            $('.news-content').css('height', '900px');
            $('.flexslider li').css('background-size', 'cover');
        }
        if (window.matchMedia("(orientation: landscape)").matches) {
            var x = $imgHeight - ($('.footer').height() + 30);
            $('.news-content').css('height', x);
            $('.splash').css('background-position', '50% 62%');
            $('.flexslider li').css('background-size', 'cover');
            $('.content-wrapper').css('left', '60px');
        }
        device();
    });

    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            $('.splash').css('background-position', '55% 70%');
        } else {
            $('.splash').css('background-position', '50% 60%');
        }
    }

    $(window).resize(function() {
        device();
        var x = $imgHeight - ($('.footer').height() + 30);
        $('.news-content').css('height', x);
    });

    $('.menu-item-40').click(function(e) {
        e.preventDefault();
        $('.menu-practice-container').fadeIn(1000);
        $('.footer-wrapper .menu-practice-container ul li a').css('color', '#999');
        $('.nicescroll-rails, .menu-project-container, .menu-project-type-container, #scroll, #residential, #commercial, #civic').css('display', 'none');
    });

    $('.menu-item-56').click(function(e) {
        e.preventDefault();
        $('.menu-services-container').fadeIn(1000);
        $('.footer-wrapper .menu-services-container ul li a').css('color', '#999');
        $('.menu-team-container').css('display', 'none');
    });

    $('.menu-item-55').click(function(e) {
        e.preventDefault();
        $('.menu-services-container').css('display', 'none');
        $('.menu-team-container').fadeIn(1000);
        $('.footer-wrapper .menu-team-container ul li a').css('color', '#999');
    });

    $('.menu-item-67').click(function(e) {
        e.preventDefault();
        $('.menu-services-container').css('display', 'none');
        $('.menu-team-container').fadeIn(1000);
        $('.footer-wrapper .menu-team-container ul li a').css('color', '#999');
    });

    $('.menu-item-47').click(function(e) {
        e.preventDefault();
        $('.menu-practice-container, .menu-project-container, .menu-services-container, .menu-team-container, .menu-project-type-container, #scroll, #residential, #commercial, #civic').css('display', 'none');
    });

    $('.menu-item-48').click(function(e) {
        e.preventDefault();
        $('.menu-project-container').fadeIn(1000);
        $('.footer-wrapper .menu-project-container ul li a').css('color', '#999');
        $('.menu-practice-container, .menu-services-container, .menu-team-container').css('display', 'none');
        $('.nicescroll-rails').css('display', 'none');
    });

    $('.menu-item-108').click(function(e) {
        e.preventDefault();
        $('.menu-project-type-container, .project-titles, #residential, #commercial, #civic, #ascrail2000, #ascrail2001, #ascrail2002, #ascrail2003').css('display', 'none');
    });

    $('.menu-item-109').click(function(e) {
        e.preventDefault();
        $('.menu-project-type-container').fadeIn(1000);
        $('.footer-wrapper .menu-project-type-container ul li a').css('color', '#999');
        $('.nicescroll-rails').css('display', 'none');
    });

    $('.menu-item-110').click(function(e) {
        e.preventDefault();
        $('.project-titles').fadeIn(1000);
        $('.footer-wrapper .project-titles ul li a').css('color', '#999');
        $('#residential, #commercial, #civic').css('display', 'none');
    });

    $('.menu-item-111').click(function(e) {
        e.preventDefault();
        $('#residential').fadeIn(1000);
        $('.footer-wrapper #residential ul li a').css('color', '#999');
        $('.project-titles, #commercial, #civic, #ascrail2000').css('display', 'none');
    });

    $('.menu-item-112').click(function(e) {
        e.preventDefault();
        $('#commercial').fadeIn(1000);
        $('.footer-wrapper #commercial ul li a').css('color', '#999');
        $('.project-titles, #residential, #civic').css('display', 'none');
    });

    $('.menu-item-113').click(function(e) {
        e.preventDefault();
        $('#civic').fadeIn(1000);
        $('.footer-wrapper #civic ul li a').css('color', '#999');
        $('.project-titles, #residential, #commercial').css('display', 'none');
    });

    function showScrollp() {
        $("#scroll").show();
        $("#residential, #commercial, #civic").hide();
        if (!$("#scroll").hasClass("scroll_added")) {
            $(".scroll_content").niceScroll({autohidemode: false, zindex : "999999", cursorborderradius: "0", cursorwidth:"3px", railalign:"left", cursorborder:"0", cursorcolor:"#fff"});
            $("#scroll").addClass("scroll_added");
        }
    }

    function showScrollr() {
        $("#residential").show();
        $("#scroll, #commercial, #civic").hide();
        if (!$("#residential").hasClass("scroll_added")) {
            $(".scroll_content").niceScroll({autohidemode: false, zindex : "999999", cursorborderradius: "0", cursorwidth:"3px", railalign:"left", cursorborder:"0", cursorcolor:"#fff"});
            $("#residential").addClass("scroll_added");
        }
    }

    function showScrollc() {
        $("#commercial").show();
        $("#residential, #scroll, #civic").hide();
        if (!$("#commercial").hasClass("scroll_added")) {
            $(".scroll_content").niceScroll({autohidemode: false, zindex : "999999", cursorborderradius: "0", cursorwidth:"3px", railalign:"left", cursorborder:"0", cursorcolor:"#fff"});
            $("#commercial").addClass("scroll_added");
        }
    }

    function showScrollcv() {
        $("#civic").show();
        $("#residential, #commercial, #scroll").hide();
        if (!$("#civic").hasClass("scroll_added")) {
            $(".scroll_content").niceScroll({autohidemode: false, zindex : "999999", cursorborderradius: "0", cursorwidth:"3px", railalign:"left", cursorborder:"0", cursorcolor:"#fff"});
            $("#civic").addClass("scroll_added");
        }
    }

    $('.career-slider-content .flexslider.career-slider li').each(function() {
        var src = "url(" + $(this).children('img').attr('src') + ")";
        $(this).css({
            'height': 450,
            'width': 470,
            'background': src + 'no-repeat 0 0 / center center'
        });
        $(this).children('img').css('display', 'none');
    })

    $('.sp').click(function() {
        $('.slider-popup, .flex-control-nav').fadeIn('slow');
        $('.single-page-wrapper, .footer, .nicescroll-rails').css('display', 'none');
        $('.flexslider.career-slider li').css('height', $imgHeight);
        $('.news-content').css('height', '100%');
    });
    $('.ps').click(function() {
        $('.slider-popup, .flex-control-nav').css('display', 'none');
        $('.single-page-wrapper, .footer, .nicescroll-rails').css('display', 'block');
        $('.flexslider.career-slider li').css('height', '450');
        if ($imgWidth == '980' && $imgHeight == '1185') {
            var x = $imgHeight - ($('.footer').height() + 30);
            $('.news-content').css('height', x);
        } else {
            $('.news-content').css('height', '78%');
        }
    });

    $('.loader .flexslider.career-slider').fadeIn(5000);

    /* Idle time for browser */
    var $idleTime = 0;
    var $idleInterval = setInterval(timerIncrement, 50000);
    $($w).hover(function (e) {
        $idleTime = 0;
        $('.footer').fadeIn('slow');
        $('.copyright').hide();
    });
    $(this).keypress(function (e) {
        $idleTime = 0;
        $('.footer').fadeIn('slow');
        $('.copyright').hide();
    });
    timerIncrement();

    function timerIncrement() {
        $idleTime = $idleTime + 1;
        if ($idleTime > 3) { // 2 minutes
            if ((window.location.href.indexOf("news") > -1) || (window.location.href.indexOf("project-list") > -1) || (window.location.href.indexOf("g-c-c-business-hotel") > -1) || (window.location.href.indexOf("north-side-hotel") > -1) || (window.location.href.indexOf("luxal-hotel") > -1) || (window.location.href.indexOf("appartment-hotel") > -1) || (window.location.href.indexOf("nanded-club") > -1) || (window.location.href.indexOf("ramada-hotel") > -1) || (window.location.href.indexOf("3-star-hotel") > -1) || (window.location.href.indexOf("motilmahal-belapur") > -1) || (window.location.href.indexOf("motimahal-vashi") > -1) || (window.location.href.indexOf("motimahal-bahrain") > -1) || (window.location.href.indexOf("white") > -1) || (window.location.href.indexOf("flames") > -1) || (window.location.href.indexOf("black-lounge") > -1) || (window.location.href.indexOf("flames-lounge") > -1) || (window.location.href.indexOf("only-parathas") > -1) || (window.location.href.indexOf("sizzling-salsa") > -1) || (window.location.href.indexOf("upper-deck") > -1) || (window.location.href.indexOf("zing-cafe") > -1) || (window.location.href.indexOf("bay-leaf") > -1) || (window.location.href.indexOf("saalt") > -1) || (window.location.href.indexOf("purple-farm-villas") > -1) || (window.location.href.indexOf("waterfall") > -1) || (window.location.href.indexOf("pushpendra-city") > -1) || (window.location.href.indexOf("family") > -1) || (window.location.href.indexOf("residential") > -1) || (window.location.href.indexOf("goldmine") > -1) || (window.location.href.indexOf("tej-control") > -1) || (window.location.href.indexOf("dreamax") > -1) || (window.location.href.indexOf("thapar") > -1) || (window.location.href.indexOf("group") > -1) || (window.location.href.indexOf("irtwari") > -1) || (window.location.href.indexOf("university-planning") > -1) || (window.location.href.indexOf("mayor") > -1) || (window.location.href.indexOf("nanded") > -1) || (window.location.href.indexOf("karad") > -1) || (window.location.href.indexOf("government") > -1) || (window.location.href.indexOf("building") > -1) || (window.location.href.indexOf("college") > -1)) {
                $('.footer').css('display', 'block');
                $('.copyright').hide();
            } else {
                $('.footer').css('display', 'none');
                $('.copyright').show();
            }
        }
    }

});

$(window).load(function() {
    $(".scroll-content").mCustomScrollbar({
        theme:"light"
    });

    var load = setInterval(function() {
        $(".loader1").fadeOut();
    }, 3000);
    window.setTimeout(function() {
        clearInterval(load);
    }, 3001);

    var a = setInterval(function() {
        $('.splash').fadeIn(1000);
    }, 4000);
    window.setTimeout(function() {
        clearInterval(a);
    }, 4001);

    var b = setInterval(function() {
        $('.splash').fadeOut(2000);
    }, 5000);
    window.setTimeout(function() {
        clearInterval(b);
    }, 5001);

    var c = setInterval(function() {
        $('.splash-tower').fadeOut(6000);
    }, 7000);
    window.setTimeout(function() {
        clearInterval(c);
    }, 7001);

    var interval = setInterval(function() {
        $('footer').fadeIn(3000);
    }, 9000);
    window.setTimeout(function() {
        clearInterval(interval);
    }, 9000);
});
  