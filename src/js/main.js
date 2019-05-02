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
$('.tabs').tabslet({
    mouseevent: 'click',
    attribute: 'href',
    animation: true
});