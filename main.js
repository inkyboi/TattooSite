$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.fade-in'                     
    })
        .setClassToggle('.fade-in', 'show')
        .addTo(controller);
});

$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.fade-in2'                          
    })
        .setClassToggle('.fade-in2', 'show')
        .addTo(controller);
});

$(document).scroll(function () {

    if ($(this).scrollTop() >= 20) {


        $('#return-to-top').fadeIn(200);
    } else {


        $('#return-to-top').fadeOut(200);
    }

});

$('#return-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500, 'swing');
});
