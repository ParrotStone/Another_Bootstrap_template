
'use strict';

$(() => {
   
    function adjustScreenHeight() {
        if ($(window).width() >= 992) {
            const carouselHeight = $(window).height()
                - $('header').height()
                - $('nav.navbar').height() - 16;

            $('section#showcase #main-carousel').css({
                maxHeight: carouselHeight,
            });
            $('section#showcase .carousel-inner').css({
                maxHeight: carouselHeight,
            });
            $('section#showcase .carousel-item').css({
                maxHeight: carouselHeight,
            });
        }
    }

    adjustScreenHeight();

    $(window).on('resize', adjustScreenHeight);

    $('[data-toggle="tooltip"]').tooltip();

    $('nav.navbar a.nav-link').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        $(':root, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70,
        }, 800);
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 500) {
            if ($('div.scroll-up').is(':hidden')) {
                $('div.scroll-up').show(400);
            }
        } else {
            if ($('div.scroll-up').is(':visible')) {
                $('div.scroll-up').hide(400);
            }
        }
    });

    $('div.scroll-up').on('click', function () {
        $(':root, body').animate({
            scrollTop: 0,
        }, 800);
    });

    // Projects - Portfolio Section
    // Toggling the active class of the un-ordered list
    $('section#about .row .list-group li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Activating/Triggering MixItUp Shuffle Plugin
    const mixer = mixitup('.portfolio-shuffle .container');
    // var mixer = mixitup('.portfolio-shuffle .container', {
    //     animation: {
    //         applyPerspective: false
    //     }
    // });
});