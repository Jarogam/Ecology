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
        // animation: true
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
$('#callback').popup();
$('#thanksModal').popup();
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


$(".swiper-slide__item--more").click(function () {
    $(".swiper-slide__item").addClass('descr-active');

});
$(".swiper-slide__item--descr__close").click(function () {
    $(".swiper-slide__item--descr").css({
        'transform': 'translateY(-300%)'
    });
    
})

$('#image').click(function () {
    $('#foo').css({
        'background-color': 'red',
        'color': 'white',
        'font-size': '44px'
    });
});

// validation
var element = document.querySelectorAll('input[type="tel"]');
var maskOptions = {
    mask: "+{7} (000) 000-00-00"
};
if (element) {
    for (var i = 0; i < element.length; i++) {
        var mask = new IMask(element[i], maskOptions)
    }
}
$(document).ready(function () {
    $(".price").validate({
        messages: {
            name: "Введите Ваш текст",
            email: "Введите Вашу почту",
            phone: "Введите Ваш телефон",

        },
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            phone: {
                required: true
            }
        },
        submitHandler: function (b) {
            var a = $(".price").serialize();
            ajaxSend(".price", a)
        }
    })
});
$(document).ready(function () {
    $(".callbackform").validate({
        messages: {
            name: "Введите Ваш текст",
            email: "Введите Вашу почту",
            phone: "Введите Ваш телефон",

        },
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            phone: {
                required: true
            }
        },
        submitHandler: function (b) {
            var a = $(".callbackform").serialize();
            ajaxSend(".callbackform", a)
        }
    })
});
function ajaxSend(formName, data) {
    jQuery.ajax({
        type: "POST",
        url: "sendmail.php",
        data: data,
        success: function () {
            $("#callback").modal("hide");
            $("#thanksModal").popup('show');
            setTimeout(function () {
                $(formName).trigger('reset');
            }, 2000);
        }
    })
};