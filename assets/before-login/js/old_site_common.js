$(window).on('load',function(){

	$('.smt_toggle').on('click', function () {

		if ($('.header_menu').hasClass('open')) {

			$('.header_menu').removeClass('open');

		} else {

			$('.header_menu').addClass('open');
		}

	});

});
