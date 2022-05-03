require([
    'jquery', 
    'jquery/ui', 
    'slick'], function($) {
    function sizing() {
        $(".product-img-wrp").slick({
            dots: true,
            arrows : false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 5000,
                    settings: "unslick"
                },
                {
                    breakpoint: 1360,
                    settings: {
                        arrows : false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    $(document).ready(sizing);
    $(window).resize(sizing);
});