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
	$(".else__carousel").owlCarousel({
		loop: true,
		items: 4,
		nav: true,
		dots: true,
		navText: " ",
		mouseDrag: false
	});
	$(".seen-list").owlCarousel ({
		loop: true,
		items: 4,
		nav: true,
		navText: ""
	});

	$("a#watch-card").fancybox();
	$("a#watch-card").fancybox({
		'hideOnContentClick': true
	});

	$('.cardunit-all').on('click', function(e) {
		e.preventDefault();
		var allparams = $('.allparams-title').offset().top;
		
		$('html, body').animate({
			scrollTop: allparams
		}, 1000);
	});
});
