$(document).ready(function() {
	$(document).ready(function(){
	  $('.test_slider').slick({
	  	arrows: true,
	  	dots: true,
	  	prevArrow: '<div class="slider-arrow slider-arrow_left"></div>',
	  	nextArrow: '<div class="slider-arrow slider-arrow_right"></div>',
	  	responsive: [
	  	    {
	  	      breakpoint: 768,
	  	      settings: {
	  	        arrows: false
	  	      }
	  	    }
	  	    ]
	  });
	});
	var navLink = $('.header_nav ul li a');
	navLink.on('click', function(event) {
		event.preventDefault();
		var offs = $(this).attr('href');
		var top = $(offs).offset().top;
		$('html, body').animate({scrollTop: top}, 1000);
	});
	var fix = $('.fix_top');
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$(fix).fadeIn('slow');
		} else {
			$(fix).fadeOut('slow');
		}
	});
	fix.on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 1000)
	});
	$('.portfolio_btn').on('click', function(event) {
		event.preventDefault();
		$('.portfolio_hidden').fadeIn('slow');
		$(this).css('display', 'none');
	});
});