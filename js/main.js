
'use strict';

$(() => {
    // ============================================================
    // ===== The part of centering the content of the header ======
    // ============================================================

    // We here calculate the half of the window height and then subtract the result by the nav height & so in consider within the damn middling thing & the number '16' is the top & bottom 'padding' of the navigation thing by default in Bootstrap styles & the '1px' is for the bottom 'border' i have applied there, and so it has to be subtracted as well from the height so the the 'container' can be center at the center of the viewport correctly - You might notice that the thing still looks un-centered despite all the fuss below, but it actually are, but because the container starts from that line of the center and render the content from the top to bottom it looks like it's more closer to the bottom than the middle but actually the top line in the container is exactly in the middle of the damn viewport, to verify that, try to comment/remove all the content and then put a border around the container and you'll see for yourself that the thing is middle at the center of the viewport exactly as it must be. => play with offsets to make sure even more. and of the we did the last part to center the content and notice that the content here is different from the LINE of the container which is at the middle before we add the last part, we just did it so we can center the content elegently on the page and looks like if it's at the middle and of course the dividing thing we did so we can center it more elegently, because if we didn't do so, the result will be too close to the navigation bar and so we divide it so we subtract half of the height of the content and middle thing as correctly as we can. After all that said, i encourage you to choose the flex/height way over this one as this one is not easily done especially at first when you need to factor out all the margins & paddings of other elements on the header/showcase/... to center whatever you wanna center, the flex do so to you easier than this fucked up way.
    // $('#main-header .over > .container').css({
    //     marginTop: ($(window).height() / 2) - ($('#main-header .over > nav').height() + 17) - $('#main-header .over > .container').height() / 2,
    // });

    // Activating Tooltips Plugin from Bootstrap
    $('[data-toggle="tooltip"]').tooltip();

    // Toggle the links with active class & Nice-Scroll to certain sections on the page
    $('header#main-header nav.navbar a.nav-link').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        $(':root, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 800);
    });

    // Applies the toggling of the scroll-up button
    $(window).on('scroll', function () {
        // The inner condition is just to ensure that the thing will check only once or at least not every time the window scrolls
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

    // Scroll Up Back To The Main Window/Screen/UpThing/...
    $('div.scroll-up').on('click', function () {
        $(':root, body').animate({
            scrollTop: 0,
        }, 800);
    });
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