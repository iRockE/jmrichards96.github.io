$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('html').easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 120,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });
    $('.backToTop').click(function() {
        window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
    });
});