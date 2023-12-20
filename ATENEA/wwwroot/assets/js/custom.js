(function($) {
	"use strict";

	// ______________Horizontal-menu
	$(document).on("click", "a[data-theme]", function(e) {
        $("head link#theme").attr("href", $(this).data("theme"));
        $(this).toggleClass('active').siblings().removeClass('active');
    });
    $(document).on("click", "a[data-effect]", function(e) {
        $("head link#effect").attr("href", $(this).data("effect"));
        $(this).toggleClass('active').siblings().removeClass('active');
    });
	$(document).on("click", "a[data-switcher]", function(e) {
		$("head link#switcher").attr("href", $(this).data("switcher"));
		$(this).toggleClass('active').siblings().removeClass('active');
	});	
	$(document).on("click", "switcher-style", function(e) {
		$('switcher-style').addClass('active');
	});
	
	/*Header Styles*/
	$(document).on('click', '#myonoffswitch', function(e){
		if (this.checked) {
			$('body').addClass('horizontal-fullwidth');
			$('body').removeClass('horizontal-conatiner');
			localStorage.setItem("horizontal-fullwidth", "True");
		}
		else {
			$('body').removeClass('horizontal-fullwidth');
			localStorage.setItem("horizontal-fullwidth", "false");
		}
	});

	$(document).on('click', '#myonoffswitch1', function(e){
		if (this.checked) {
			$('body').addClass('horizontal-conatiner');
			$('body').removeClass('horizontal-fullwidth');
			localStorage.setItem("horizontal-conatiner", "True");
		}
		else {
			$('body').removeClass('horizontal-conatiner');
			localStorage.setItem("horizontal-conatiner", "false");
		}
	});

	$(document).on('click', '#myonoffswitch2', function(e){
		if (this.checked) {
			$('body').addClass('Lightversion');
			localStorage.setItem("Lightversion", "True");
		}
		else {
			$('body').removeClass('Lightversion');
			localStorage.setItem("Lightversion", "false");
		}
	});

	$(document).on('click', '#myonoffswitch3', function(e){
		if (this.checked) {
			$('body').addClass('sidenav-toggled');
			localStorage.setItem("sidenav-toggled", "True");
		}
		else {
			$('body').removeClass('sidenav-toggled');
			localStorage.setItem("sidenav-toggled", "false");
		}
	});

	$(document).on('click', '#myonoffswitch4', function(e){
		if (this.checked) {
			$('body').addClass('sidenav-toggled1');
			$('body').removeClass('sidenav-toggled');
			localStorage.setItem("sidenav-toggled1", "True");
		}
		else {
			$('body').removeClass('sidenav-toggled1');
			localStorage.setItem("sidenav-toggled1", "false");
		}
	});
	
	$(document).on('click', '#myonoffswitch5', function(e){
		if (this.checked) {
			$('.slide-icon').addClass('rounded');
			$('.side-menu__label').addClass('side-menu__label_Icons');
			$('.slide-icon').removeClass('square');
			localStorage.setItem("rounded", "true");
		}
		else {
			$('.slide-icon').removeClass('rounded');
			localStorage.setItem("rounded", "false");
		}
	});
	
	$(document).on('click', '#myonoffswitch6', function(e){
		if (this.checked) {
			$('.slide-icon').addClass('square');
			$('.side-menu__label').addClass('side-menu__label_Icons');
			$('.slide-icon').removeClass('rounded');
			localStorage.setItem("square", "true");
		}
		else {
			$('.slide-icon').removeClass('square');
			localStorage.setItem("square", "false");
		}
	});
	
	$(document).on('click', '#myonoffswitch7', function(e){
		if (this.checked) {
			$('.slide-icon').removeClass('square');
			$('.slide-icon').removeClass('rounded');
			$('.side-menu__label').removeClass('side-menu__label_Icons');
		}
	});
	
	$(document).on('click', '#myonoffswitch8', function(e){
		if (this.checked) {
			$('.side-menu__label').addClass('side-menu__label_none');
			localStorage.setItem("side-menu__label_none", "true");
		}
		else {
			$('.side-menu__label').removeClass('side-menu__label_none');
			localStorage.setItem("side-menu__label_none", "false");
		}
	});

	// ______________Cover Image
	$(".cover-image").each(function() {
		var attr = $(this).attr('data-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});

	// ______________Ms Menu Trigger
	if ($('#ms-menu-trigger')[0]) {
		$('body').on('click', '#ms-menu-trigger', function() {
			$('.ms-menu').toggleClass('toggled');
		});
	}

	// ______________Full screen
	$(document).on("click", "#fullscreen-button", function toggleFullScreen() {
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			}
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	})

	// ______________ PAGE LOADING
	$(window).on("load", function(e) {
		$("#global-loader").fadeOut("slow");
	})

	// ______________ BACK TO TOP BUTTON
	$(window).on("scroll", function(e) {
		if ($(this).scrollTop() > 0) {
			$('#back-to-top').fadeIn('slow');
		} else {
			$('#back-to-top').fadeOut('slow');
		}
	});
	$(document).on("click", "#back-to-top", function(e) {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	// ______________ Star Rating
	var ratingOptions = {
		selectors: {
			starsSelector: '.rating-stars',
			starSelector: '.rating-star',
			starActiveClass: 'is--active',
			starHoverClass: 'is--hover',
			starNoHoverClass: 'is--no-hover',
			targetFormElementSelector: '.rating-value'
		}
	};
	$(".rating-stars").ratingStars(ratingOptions);

	// ______________ mCustomScrollbar
	$(".vscroll").mCustomScrollbar();
	$(".imagescroll").mCustomScrollbar({
		axis: "x",
		theme: "dark-3",
		advanced: {
			autoExpandHorizontalScroll: true
		}
	});
	$(".app-sidebar").mCustomScrollbar({
		theme: "minimal",
		autoHideScrollbar: true,
		scrollbarPosition: "outside"
	});
	$(".scroll-1").mCustomScrollbar({
		theme: "dark"
	});

	// ______________ Chart-Circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function() {
			let $this = $(this);
			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: '#f0f2f5',
				lineCap: 'round'
			});
		});
	}
	// ______________ Chart-Circle
	if ($('.chart-circle.chart-circle-dark').length) {
		$('.chart-circle.chart-circle-dark').each(function() {
			let $this = $(this);
			$this.circleProgress({
				fill: {
					color: $this.attr('data-color')
				},
				size: $this.height(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: 'rgba(0,0,0,0.2)',
				lineCap: 'round'
			});
		});
	}

	/* circle-primary */
	$('.circle-primary').circleProgress({
		fill: {
		  gradient: ["#1572e8", "#1572e8"]
		}
	});
	/* circle-primary closed */

	/* circle-secondary */
	$('.circle-secondary').circleProgress({
		fill: {
		  gradient: ["#ff9e27", "#ff9e27"]
		}
    });
    /* circle-secondary closed */

	/* circle-info */
	$('.circle-info').circleProgress({
		fill: {
		  gradient: ["#17c1f4", "#17c1f4"]
		}
    });
	/* circle-info closed*/

	/* circle-warning */
	$('.circle-warning').circleProgress({
		fill: {
		  gradient: ["#ecd53e", "#ecd53e"]
		}
    });
	/* circle-warning closed*/

	/* circle-success */
	$('.circle-success').circleProgress({
		fill: {
		  gradient: ["#3cbf2d", "#3cbf2d"]
		}
    });
	/* circle-success closed*/

	/* circle-danger*/
	$('.circle-danger').circleProgress({
		fill: {
		  gradient: ["#f95058", "#f95058"]
		}
    });
	/* circle-danger closed */

	const DIV_CARD = 'div.card';

	// ______________ Tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// ______________ Popover
	$('[data-toggle="popover"]').popover({
		html: true
	});

	// ______________ Card Remove
	$(document).on('click', '[data-toggle="card-remove"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.remove();
		e.preventDefault();
		return false;
	});

	// ______________ Card Collapse
	$(document).on('click', '[data-toggle="card-collapse"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-collapsed');
		e.preventDefault();
		return false;
	});

	// ______________ Card Fullscreen
	$(document).on('click', '[data-toggle="card-fullscreen"]', function(e) {
		let $card = $(this).closest(DIV_CARD);
		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');
		e.preventDefault();
		return false;
	});
})(jQuery);