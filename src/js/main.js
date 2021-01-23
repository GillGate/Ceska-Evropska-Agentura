$(function(){
	
	$('.getConsultation').on('click', function() {
		$('.popup--consultation').show(100, function() {
			$('.popup--consultation').css('opacity', '1');
		});
	});

	$('.popup__close').on('click', function() {
		$('.popup').css('opacity', '0');

		setTimeout(function() {
			$('.popup').hide();
		});
	});

	$('.nav__link, .footer__link').on('click', function(e) {

	let target = $(this).attr('href');
		$('html, body').animate({
		  scrollTop: $(target).offset().top
		}, 1000);
	});

	$('.faq__item').on('click', function() {
  		$(this).toggleClass('faq__item--active').children('p').slideToggle(300);
        $('.faq__item').not(this).removeClass('faq__item--active').children('p').slideUp(300);
  	});
});