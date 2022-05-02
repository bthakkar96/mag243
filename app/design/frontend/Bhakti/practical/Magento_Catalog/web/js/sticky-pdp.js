require([
    'jquery', 
    'jquery/ui', 
    'slick'], function($) {
    $(document).ready(function() {
        $(".product-img-wrp").slick({
            dots: true,
            arrow: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 2000,
                    settings: "unslick"
                },
                {
                    breakpoint: 1600,
                    settings: "unslick"
                },
                {
                    breakpoint: 768,
                    settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
});