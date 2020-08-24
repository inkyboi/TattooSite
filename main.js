$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.fade-in'                     //  adauga  reverse: false , sub triggerElement sa apara 1 singura data !
    })
        .setClassToggle('.fade-in', 'show')
        .addTo(controller);
});

$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.fade-in2'                          // reverse: false , sa apara 1 singura data !
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
