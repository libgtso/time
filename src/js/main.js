$(document).ready(function() {

	$(".hatslider").owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		dots: true,
		navText: " ",
	});
	$(".hits__carousel").owlCarousel({
		loop: true,
		items: 4,
		nav: true,
		dots: true,
		navText: " ",
		mouseDrag: false
	});
	$("a#watch-card").fancybox();
	$("a#watch-card").fancybox({
		'hideOnContentClick': true
	});
});
