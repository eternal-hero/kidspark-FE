$(function () {


	$(document).ready(function() {
		$('.form_place_item input[type=checkbox]').each(function() {
			if( $(this).prop("checked") == true ) {
				$(this).parent().addClass('select');
			}
		});
	});

	//撮影希望場所選択の画像を押したら、選択とinput=hidden追加、外したらinput=hidden削除
	$('.form_place_item label').on('click', function () {
		if ($(this).parent().hasClass('select')) {
			$(this).parent().removeClass('select');

			//var no = $(this).data('place');
			//$('.js_place_'+no).remove();

		} else {
			$(this).parent().addClass('select');
			var no = $(this).data('place');
			//$('.form_place_box').append('<input type="hidden" name="place[no]" class="js_place_'+no+'" value="'+no+'">');
		}
	});
/*
	$('#js_select').hover(
		function () {
			$('.form_plans').addClass('show');
	});*/
	// Open window
	$('#js_select').on('click', function () {
		if ($('.form_plans').hasClass('show')) {
			$('.form_plans').removeClass('show');
		} else {
			$('.form_plans').addClass('show');
		}
	});


	// Open window
	$('input[name="plans"]:radio' ).on('click', function () {
		var radioval = $(this).val();
		console.log(radioval);
		$('#js_select').val(radioval);
		$('.form_plans').removeClass('show');
	});

	// Open window
	$('.js_priv').on('click', function () {
		var URL = $(this).data('href');
		window.open(URL, '_blank', 'width=' + 801 + ',height=' + 800 + ',target="_blank",location=no,menubar=no,scrollbars=yes,status=no,toolbar=no');
	});

});