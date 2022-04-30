require([
    'jquery', 
    'jquery/ui', 
    'slick'], function($) {
    $(document).ready(function() {
        $(".category-banner-wrp").slick({
            dots: true,
            arrow: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });
});