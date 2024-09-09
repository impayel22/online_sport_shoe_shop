
$(document).ready(function(){
    // Navbar toggler icon animation
    $('.navbar-toggler').on('click', function () {
        $('.navbar-toggler-icon').toggleClass('active');
    });

    // Owl Carousel Initialization
    $('.active-banner-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
});
