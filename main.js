$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.fade-in',
        reverse: false
    })
        .setClassToggle('.fade-in', 'show')
        .addTo(controller);
});