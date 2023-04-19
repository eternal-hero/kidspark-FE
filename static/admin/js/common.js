$(window).load(function () {

	var windowWidth = $(window).width(),
		targetWidth = 801,
		showWidth = 1261,
		$menu = $('#menu');

	if (windowWidth >= showWidth) {
		/* pc */
		//navの表示・非表示
		var menuStatus = true;

		$('#js-menu-open-pc,#js-menu-close-pc').on('click', function () {
			if (menuStatus === false) {
				menuStatus = true;
				calc = -260 + windowWidth + "px";
				$('#js-menu-open-pc,#js-menu-close-pc').addClass('open');
				$('#js-menu-open-pc,#js-menu-close-pc').find('img').attr('src', '/assets/img/common/menu-off-pc.png');
				$("html,body").css('overflow-x', 'hidden');
				$menu.show(300);
				$("#wrap").animate({
					'paddingLeft': '260px',
					'width': calc
				});
			} else {
				menuStatus = false;
				$('#js-menu-open-pc,#js-menu-close-pc').removeClass('open');
				$('#js-menu-open-pc,#js-menu-close-pc').find('img').attr('src', '/assets/img/common/menu-on-pc.png');
				$menu.hide(300);
				$("#wrap").animate({
					'paddingLeft': '0',
					'width': windowWidth
				});
			}
			return false;
		});
	} else if (windowWidth >= targetWidth) {
		/* pc */
		//navの表示・非表示
		var menuStatus = false;

		$('#js-menu-open-pc,#js-menu-close-pc').on('click', function () {
			if (menuStatus === false) {
				menuStatus = true;
				calc = -260 + windowWidth + "px";
				$('#js-menu-open-pc,#js-menu-close-pc').addClass('open');
				$('#js-menu-open-pc,#js-menu-close-pc').find('img').attr('src', '/assets/img/common/menu-off-pc.png');
				$("html,body").css('overflow-x', 'hidden');
				$menu.show(300);
				//$("#wrap").animate({'paddingLeft': '260px','width': calc});
			} else {
				menuStatus = false;
				$('#js-menu-open-pc,#js-menu-close-pc').removeClass('open');
				$('#js-menu-open-pc,#js-menu-close-pc').find('img').attr('src', '/assets/img/common/menu-on-pc.png');
				$("html,body").css('overflow-x', 'visible');
				$menu.hide(300);
				//$("#wrap").animate({'paddingLeft': '0','width': windowWidth});
			}
			return false;
		});
	} else {
		/* smt */
		//navの表示・非表示
		var menuStatus = false;
		$('#js-menu-open').on('click', function () {
			if (menuStatus === false) {
				menuStatus = true;
				$('#js-menu-open').addClass('open');
				$('#js-menu-open').find('img').attr('src', '/assets/img/common/menu-off.png');
				$menu.fadeTo(100, 1, 'easeInQuart');
				$("html,body").css('overflow', 'hidden');
				$("html,body").css('height', '100%');
			} else {
				menuStatus = false;
				$('#js-menu-open').removeClass('open');
				$('#js-menu-open').find('img').attr('src', '/assets/img/common/menu-on.png');
				$menu.fadeTo(100, 0, 'easeOutQuart', function () {
					$menu.css('display', 'none');
					$("html,body").css('overflow', 'visible');
					$("html,body").css('height', 'auto');
				});
			}
			return false;
		});
	}

	//selectBox
	$('#current-selectBox').on('click', function () {
		$(this).toggleClass('on');
		$('#selectBox').slideToggle(200);
	});

	function resetSelectBox() {
		$('#current-selectBox').removeAttr('style').removeClass('on');
		$('#selectBox').removeAttr('style');
	}

	//selectBox-year
	$('#current-selectBox-year').on('click', function () {
		$(this).toggleClass('on');
		$('#selectBox-year').slideToggle(200);
	});

	function resetSelectBoxYear() {
		$('#current-selectBox-year').removeAttr('style').removeClass('on');
		$('#selectBox-year').removeAttr('style');
	}

	//画像PC⇔スマホ
	var $setElem = $('.switch'),
		pcName = '-pc',
		spName = '-smt',
		replaceWidth = 801;

	$setElem.each(function () {
		var $this = $(this);

		function imgSize() {
			var windowWidth = parseInt($(window).width());
			if (windowWidth >= replaceWidth) {
				$this.attr('src', $this.attr('src').replace(spName, pcName)).css({
					visibility: 'visible'
				});
			} else if (windowWidth < replaceWidth) {
				$this.attr('src', $this.attr('src').replace(pcName, spName)).css({
					visibility: 'visible'
				});
			}
		}
		$(window).resize(function () {
			imgSize();
		});
		imgSize();
	});

	//ページトップ
	const header = $('.site_header');

	$('a[href^="#"]').on('click', function () {
		const gap = header.outerHeight();
		const speed = 100;
		const href = $(this).attr("href");
		const target = $(href == "#" || href == "" ? "html" : href);
		const position = target.offset().top;

		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});
});

// Open Window
function w_open(URL, winX, winY) {
	window.open(URL, '_blank', 'width=' + winX + ',height=' + winY + ',location=no,menubar=no,scrollbars=yes,status=no,toolbar=no');
}

// Menu
$(function () {
	$('#menu ul li ul').hide();
	GlobalMenu();
});

$(window).resize(function () {
	$('#menu ul li ul').hide();
	GlobalMenu();
	if ($('#current-selectBox').length) {
		resetSelectBox();
	}
	if ($('#current-selectBox-year').length) {
		resetSelectBoxYear();
	}
});

function GlobalMenu() {

	var windowWidth = $(window).width(),
		targetWidth = 801;

	if (windowWidth >= targetWidth) {
		/* pc */
		var areaWidth = 260;
	} else {
		/* smt */
		var areaWidth = parseInt($(window).width());
	}

	$('#menu').css({
		width: (areaWidth) + 'px'
	});
	$('#menu ul li,#menu ul li a').css({
		width: (areaWidth) + 'px'
	});

	if (windowWidth >= targetWidth) {

		var url = location.href;
		if (document.URL.match("/info/")) {
			$('#category-info').css({
				width: '+=' + (areaWidth) + 'px'
			}, 0);
			$('ul#parent').css({
				marginLeft: '-=' + (areaWidth) + 'px'
			}, 300);
			$('#category-info').children('ul').fadeIn(0);
			if (windowWidth >= targetWidth) {
				/* pc */
				$('#parent').css({
					backgroundColor: '#1535B1'
				});
			} else {
				/* smt */
				$('#menu').css({
					backgroundColor: '#1535B1'
				});
			}
			$('#category-info').prevAll().css({
				display: 'none'
			});
			$('#category-info').nextAll().css({
				display: 'none'
			});
		} else if (document.URL.match("/company/")) {
			$('#category-company').css({
				width: '+=' + (areaWidth) + 'px'
			}, 0);
			$('ul#parent').css({
				marginLeft: '-=' + (areaWidth) + 'px'
			}, 300);
			$('#category-company').children('ul').fadeIn(0);
			if (windowWidth >= targetWidth) {
				/* pc */
				$('#parent').css({
					backgroundColor: '#1535B1'
				});
			} else {
				/* smt */
				$('#menu').css({
					backgroundColor: '#1535B1'
				});
			}
			$('#category-company').prevAll().css({
				display: 'none'
			});
			$('#category-company').nextAll().css({
				display: 'none'
			});
		} else if (document.URL.match("/vision/")) {
			$('#category-vision').css({
				width: '+=' + (areaWidth) + 'px'
			}, 0);
			$('ul#parent').css({
				marginLeft: '-=' + (areaWidth) + 'px'
			}, 300);
			$('#category-vision').children('ul').fadeIn(0);
			if (windowWidth >= targetWidth) {
				/* pc */
				$('#parent').css({
					backgroundColor: '#1535B1'
				});
			} else {
				/* smt */
				$('#menu').css({
					backgroundColor: '#1535B1'
				});
			}
			$('#category-vision').prevAll().css({
				display: 'none'
			});
			$('#category-vision').nextAll().css({
				display: 'none'
			});
		} else if (document.URL.match("/csr/")) {
			$('#category-csr').css({
				width: '+=' + (areaWidth) + 'px'
			}, 0);
			$('ul#parent').css({
				marginLeft: '-=' + (areaWidth) + 'px'
			}, 300);
			$('#category-csr').children('ul').fadeIn(0);
			if (windowWidth >= targetWidth) {
				/* pc */
				$('#parent').css({
					backgroundColor: '#1535B1'
				});
			} else {
				/* smt */
				$('#menu').css({
					backgroundColor: '#1535B1'
				});
			}
			$('#category-csr').prevAll().css({
				display: 'none'
			});
			$('#category-csr').nextAll().css({
				display: 'none'
			});
		}

		$('li:has(ul) > a').click(function () {
			$(this).parents('li').animate({
				width: '+=' + (areaWidth) + 'px'
			}, 0);
			$('ul#parent').animate({
				marginLeft: '-=' + (areaWidth) + 'px'
			}, 300);
			$(this).parent('li').children('ul').fadeIn('normal');
			if (windowWidth >= targetWidth) {
				/* pc */
				$('#parent').css({
					backgroundColor: '#1535B1'
				});
			} else {
				/* smt */
				$('#menu').css({
					backgroundColor: '#1535B1'
				});
			}
			$(this).parent('li').prevAll().css({
				display: 'none'
			});
			$(this).parent('li').nextAll().css({
				display: 'none'
			});
		});

		$('a.back').click(function () {
			$(this).parents('li').animate({
				width: '-=' + (areaWidth) + 'px'
			}, 0);
			$('ul#parent').animate({
				marginLeft: '+=' + (areaWidth) + 'px'
			}, 300);
			$(this).parent('li').parent('ul').css({
				display: 'none'
			});
			if (windowWidth >= targetWidth) {
				/* pc */
				$('#parent').css({
					backgroundColor: '#0064cd'
				});
			} else {
				/* smt */
				$('#menu').css({
					backgroundColor: '#0064cd'
				});
			}
			$(this).parent('li').parent('ul').parent('li').prevAll('li').fadeIn('normal');
			$(this).parent('li').parent('ul').parent('li').nextAll('li').fadeIn('normal');
			$('#menu ul .smt').css({
				display: 'none'
			});
		});

	}

};

$(function () {
	var state = false;
	var scrollpos;

	$('.site_header_toggle,.site_header_toggle').on('click', function () {
		if (state == false) {
			scrollpos = $(window).scrollTop();
			$('body').addClass('fixed').css({
				'top': -scrollpos
			});
			$('.site_header_menu').addClass('open');
			state = true;
		} else {
			$('body').removeClass('fixed').css({
				'top': 0
			});
			window.scrollTo(0, scrollpos);
			$('.site_header_menu').removeClass('open');
			state = false;
		}
	});

});

$(function () {
	$('.js-modal-open').each(function () {
		$(this).on('click', function () {
			var target = $(this).data('target');
			var modal = document.getElementById(target);
			$(modal).fadeIn();
			return false;
		});
	});
	$('.js-modal-close').on('click', function () {
		$('.js-modal').fadeOut();
		return false;
	});

	//■■■■ トップへ戻るボタン ■■■■
	var topBtn = $('#page-top-btn');
	topBtn.hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	$(".__ac_box .__ac_box_btn").on("click", function () {
		$(this).next().slideToggle(), $(this).toggleClass("active")
	});

});

$(window).on('load resize', function () {
	if (window.innerWidth < 800) {

		const title = document.querySelectorAll('.__ac_box_btn-smt');

		function toggle() {
			const content = this.nextElementSibling;
			this.classList.toggle('is-active');
			content.classList.toggle('is-open');
		}

		for (let i = 0; i < title.length; i++) {
			title[i].addEventListener('click', toggle)
		}
	} else {
		//pc
	}
});
$(function () {
	$('.__more_btn').prevAll().hide();
	$('.__more_btn').click(function () {
		if ($(this).prevAll().is(':hidden')) {
			$(this).prevAll().slideDown();
			$(this).text('閉じる').addClass('close');
		} else {
			$(this).prevAll().slideUp();
			$(this).text('続きを読む').removeClass('close');
		}
	});
});
