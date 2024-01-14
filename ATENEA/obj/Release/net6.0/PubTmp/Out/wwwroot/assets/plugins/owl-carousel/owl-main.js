$(document).ready(function () {
    var owl = $('.owl-carousel2');
	owl.owlCarousel({
		loop:true,
		margin:25,
		autoplay:true,
		nav: false,
		dots: false,
		slideTransition: 'linear',
		autoplayTimeout: 3700,
		smartSpeed: 3700,
		animateIn: 'linear',
		animateOut: 'linear',
		autoplayHoverPause:true,
		responsive: {
				0: {
					items: 1,
					nav: true
				},
				600: {
					items: 1,
					nav: true
				},
				1300: {
					items: 2,
					nav: true
				},
				1600: {
					items:4,
					nav: true
				}
			}
	});
	var owl = $('.owl-carousel1');
	owl.owlCarousel({
		loop:true,
		margin:25,
		autoplay:true,
		nav: false,
		dots: false,
		slideTransition: 'linear',
		autoplayTimeout: 3700,
		smartSpeed: 3700,
		animateIn: 'linear',
		animateOut: 'linear',
		autoplayHoverPause:true,
		responsive: {
				0: {
					items: 1,
					nav: true
				},
				600: {
					items: 2,
					nav: true
				},
				1000: {
					items: 3,
					nav: true
				},
				1600: {
					items:4,
					nav: true
				}
			}
	});
});