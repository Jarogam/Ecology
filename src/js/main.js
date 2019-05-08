// menu 
jQuery(document).ready(function($) {

    var menuToggle = function() {
        $('.burger').click(function(e) {
            $(this).toggleClass('open');
            e.preventDefault();
            $(this).toggleClass('is-active');
            $('.nav').toggleClass('is-active');
        });
    }

    menuToggle();

});

// toggle 
$(document).ready(function () {
    $('.tabs_animate').tabslet({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });
    $('.tabs-active').tabslet({
        active: 2,
    });
});

// $('.tabs_hover').tabslet({
//     mouseevent: 'hover',
//     attribute: 'href',
//     animation: false
// });


//  popup
$('#popup1').popup();
// $('#slide').popup({
//     focusdelay: 400, // for smoother slide-in animations on Android
//     outline: true,
//     vertical: 'top'
// });


//  slider
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is <= 320px

        575: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 20
        }

    }
});

