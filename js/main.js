
'use strict';

$(() => {
    // ===============================================
    // ========== Showcase-Carousel Section ==========
    //  jQuery Code To Make It Work[screen thingie]
    // ===============================================
    // I did use the code below just as a personal opinion of it[to make the screen looks great as possible on many viewports as possible], it does work by the way that it makes the screen goes dynamic with large/big heights as long as the height align with the width -> [align here means ratio between them allow the screen to take full-width and not to shrink]
    // Calculate available window height to be assigned to the carousel height
    // the '17' is the py-2[.5 rem for each 1 in paddings||margins in Bootstrap and that resolves into 16px when added top && bottom, thus, resulting in '16px'] of the header and the one is the bottom border height of the navigation section, which i removed, and so i updated the value back to '16'
    // It's overall not LIKED[To use jQuery to adjust the heights & widths in your webpages{just my opinion about the subject, it's not a convention}], at least this how i saw it at the time of writing this code[2/26/2019].
    // The code below solves the problem and make it dynamic with each resize to adjust the window height to become full-width aligned with the height & so on...
    function adjustScreenHeight() {
        // Just a breakpoint to start apply the damn styles [I just chose it as it coincides with Bootstrap v4.2 lg screens starting breakpoint]
        // I think there's no need for conditions || checks here since it applies exactly what we want, to adjust the height of the 'showcase-carousel' every time a 'resize' has been done
        if ($(window).width() >= 992) {
            // Calculate remaining height from the navigation & header sections and assign it to the showcase-carousel section for full-width/height thingie...
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

    // On getting advanced in your skills of javascript/jQuery, figure out a way to call the above function when it's made as self-calling
    // When i do it here, it throws an error saying 'reference error' because of the scoping thing, so just figure it out next time you open this code => It's A Commitment For You => It's Serious & Very Important To Know
    $(window).on('resize', adjustScreenHeight);

    // ============================================================================================================================================================================================
    // ======== The code below is taken from the second template & the associated comments are not present here, so refer to the second template for further information/understanding... =========
    // ============================================================================================================================================================================================

    $('[data-toggle="tooltip"]').tooltip();

    $('nav.navbar a.nav-link').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        $(':root, body').animate({
            // The number '60' down here is to solve the problem of the damn navigation overlapping with the rest of the content on the page, thus, the number down here ensure that it doesn't happen
            // It makes the page to scroll the thing, not straight at it but before it a little bit like margin thing, but it's not, i think you get me here.
            // You could argue what about the #home||home link, then, i'll say that since the header#home is the first thing on the page and have offset 0[Even if it has more than 'zero' value, as long as the value subtracted from it will result in negative value, it will reverse and go back to the 'ZERO' value resulting in a 0 scroll for the window/page which is what we want in the first place] and gets subtracted by 65 will result in -65 which is not allowed for the page to scroll out of the viewable-content/visible-area/..., thus, it will scroll back to 'ZERO', which is what we already want 😉
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
    // Try to checkout their website to solve the bugs in the portfolio section
    const mixer = mixitup('.portfolio-shuffle .container');
    // var mixer = mixitup('.portfolio-shuffle .container', {
    //     animation: {
    //         applyPerspective: false
    //     }
    // });
});

// When the 'this' keyword is out of a function whatsoever it will be considered to be pointing at the global 'window' object and not the thing you it does to - As an aside note this the same in the case of 'Arrow' functions

// Finish the last things in the reView folder of the JavaScript stuff & some stuff of the W3 Schools to wrap it up well enough + finally look at some things in the notes & fasty notes & quickie, take what can be and then wrap all up and jump into the PHP damn course and finish the shit out of it all + finish any leftovers generally left by jQuery | HTML | CSS | JavaScript

// Add WOW TO YOUR LAST BOOTSRTAP TEMPLATE

// Start HERE
// Review damn scroll shit things before getting on the Bootstrap part
// Half Bootstrap Shit
// Rest of Bootstrap Shit
// Finish them all ASAP please
// After finishing all things to be finished and entering javascript w3 things in the middle there you can do the scrolling down there with links changes automatically as with the case with active ones. => Document your attempts for further reference + A fast mock_up on things Zero did in the two remaining videos of jQuery just for good damn fukcing MEASURE
// Design something with the position: sticky thing for more hands-on-experience work