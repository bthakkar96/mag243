require([
    'jquery', 
    'jquery/ui', 
    'slick'], function($) {
    mobileOnlySlider(".product-img-wrp", true, false, 1360);

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
	var slider = $($slidername);
	var settings = {
		mobileFirst: true,
		dots: $dots,
		arrows: $arrows,
		responsive: [
			{
				breakpoint: $breakpoint,
				settings: "unslick"
			}
		]
	};

	slider.slick(settings);

	$(window).on("resize", function () {
		if ($(window).width() > $breakpoint) {
			return;
		}
		if (!slider.hasClass("slick-initialized")) {
			return slider.slick(settings);
		}
	});
} // Mobile Only Slider
});