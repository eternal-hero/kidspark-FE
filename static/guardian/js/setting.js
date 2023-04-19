"use strict";

/*----------------------------------------
	Header
----------------------------------------*/
$('.main-header__mobile-icon').on('click', function () {
  $(this).toggleClass("mobile-close");
  $(".user-menu").toggleClass("is-show");
});
$(".acc-cont").hide();
$('.btn-acc').on('click', function () {
  $(this).toggleClass("btn-acc-close");
  $(this).next(".acc-cont").fadeToggle(300).toggleClass("is-show");
});
$('.support-ct__table-ttl').on('click', function () {
  $(this).toggleClass('support-ct__table-ttl--off');
  $(this).next().children('.support-ct__table-accordion').slideToggle();
});
$(".js-acc-show .form-edit__checkbox").change(function () {
  var id = $(this).text();
  var idTrim = $.trim(id);
  $("#" + idTrim + " .list-checkbox input").attr('checked', function (_, attr) {
    return attr == null ? true : false;
  }); // $(this).children('input').attr('checked', (_, attr) => attr == null ? true : false);
}); //check vale radio P047
// $('.js-check-name').change(function () {
// 	var id = $(this).val();
// 	$('.file-option .item').removeClass('show');
// 	$('#' + id).addClass('show');
// });

$('.js-select-change select').change(function () {
  if ($(this).val() == "その他") {
    $(this).parent().next().addClass('show');
  } else {
    $(this).parent().next().removeClass('show');
  }
});
/*----------------------------------------
	Common Utility
----------------------------------------*/
// Top page ページ読み込み後のクラス付与

$(window).on('load', function () {
  setTimeout(function () {
    $('.top-mainvisual').addClass('is-active');
  }, 1000);
}); // Scroll animation

$(function () {
  $(window).scroll(function () {
    $('.js-scrollin').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('is-visible');
      }
    });
  });
}); // Smooth Scroll

var headerHeight = $('#main-header').outerHeight();
var urlHash = location.hash;

if (urlHash) {
  $('body,html').stop().scrollTop(0);
  setTimeout(function () {
    var target = $(urlHash);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({
      scrollTop: position
    }, 500);
  }, 100);
}

$(function () {
  $('a[href*="#"], area[href*="#"]').not(".noScroll").click(function () {
    var speed = 400,
        href = $(this).prop("href"),
        hrefPageUrl = href.split("#")[0],
        currentUrl = location.href,
        currentUrl = currentUrl.split("#")[0];

    if (hrefPageUrl == currentUrl) {
      href = href.split("#");
      href = href.pop();
      href = "#" + href;
      var target = $(href == "#" || href == "" ? 'html' : href),
          position = target.offset().top - headerHeight;
      $('body,html').stop().animate({
        scrollTop: position
      }, 500);
      return false;
    }
  });
}); //Footer fixed button

$(function () {
  var btn = $('.js-contact');
  $(window).on('load scroll', function () {
    if ($(this).scrollTop() > 200) {
      btn.addClass('is-show');
    } else {
      btn.removeClass('is-show');
    }
  });
  var form_msg = $('.js-message-form');
  form_msg.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      form_msg.fadeIn();
    } else {
      form_msg.fadeOut();
    }
  });
  $(window).scroll(function () {
    var height = $(document).outerHeight();
    var position = $(window).outerHeight() + $(window).scrollTop();
    var footer = $('#main-footer').outerHeight();

    if ($(window).width() <= 768) {
      if (height - position < footer) {
        form_msg.css({
          position: "absolute",
          bottom: "0"
        });
      } else {
        form_msg.css({
          position: "fixed",
          top: "auto"
        });
      }
    }
  });
  $(window).on('load scroll', function () {
    var height = $(document).height(),
        position = window.innerHeight + $(window).scrollTop(),
        footer = $(".main-footer").height();

    if (height - position < footer) {
      btn.addClass('absolute');
    } else {
      btn.removeClass('absolute');
    }
  });
});
/*----------------------------------------
	Tab
----------------------------------------*/

var tabsElems = document.querySelectorAll("[data-tabs]");

if (tabsElems.length > 0) {
  var _loop = function _loop(i) {
    var tab = tabsElems[i];
    var tabBtnElems = tab.querySelectorAll("[data-tab]");
    var tabContentElems = tab.querySelectorAll("[data-tab-content]");

    var _loop2 = function _loop2(_i) {
      var tabBtn = tabBtnElems[_i];
      var tabContent = tabContentElems[_i];
      tabBtn.addEventListener("click", function (e) {
        e.preventDefault();

        for (var _i2 = 0; _i2 < tabBtnElems.length; _i2++) {
          tabBtnElems[_i2].classList.remove('is-active');

          tabContentElems[_i2].classList.remove('is-active');
        }

        tabBtn.classList.add('is-active');
        tabContent.classList.add('is-active');
      });
    };

    for (var _i = 0; _i < tabBtnElems.length; _i++) {
      _loop2(_i);
    }
  };

  for (var i = 0; i < tabsElems.length; i++) {
    _loop(i);
  }
} //Tab connected.


$(function () {
  $('.js-tab-button').click(function () {
    var id = $(this).data('id');
    $('.js-tab-button:not([data-id="' + id + '"])').removeClass('is-active');
    $('.js-tab-button[data-id="' + id + '"]').addClass('is-active');
    $('.js-tab:not([data-id="' + id + '"])').attr('hidden', 'hidden');
    $('.js-tab[data-id="' + id + '"]').removeAttr('hidden');
  });
});
/*----------------------------------------
  Pages
----------------------------------------*/
//accordion

$(".js-acc-cont").hide();
$('.js-btn-acc').on('click', function () {
  $(this).toggleClass("is-close");
  $(this).next(".js-acc-cont").fadeToggle(300).toggleClass("is-show");
});
$('.js-acc-close').on('click', function () {
  $(this).parent(".js-acc-cont").fadeToggle(300).removeClass("is-show");
});

if ($(window).width() <= 800) {
  $(".js-ft-cont").hide();
  $('.js-ft-acc').on('click', function () {
    $(this).toggleClass("is-close");
    $(this).next(".js-ft-cont").fadeToggle(300).toggleClass("is-show");
  });
  $('.js-ft-close').on('click', function () {
    $(this).parent(".js-ft-cont").fadeToggle(300).removeClass("is-show");
  });
} //Add review


$(function () {
  var $width = $(this).width();
  var listItems = $(".js-accordion li").length;

  if ($(window).width() > 800) {
    var num = 6;
  } else {
    var num = 3;
  }

  $(".js-accordion").each(function () {
    $(this).find("li:not(:lt(" + num + "))").hide();
    $(".js-btn-more").click(function (e) {
      e.preventDefault();
      num += 1;
      $(".js-accordion li:lt(" + num + ")").slideDown();

      if (listItems <= num) {
        $(".js-btn-more").hide();
      }
    });
  });
}); //Add work

$(function () {
  var listItems = $(".js-accordion02 li").length;
  $(".js-accordion02").each(function () {
    var num = 7;
    $(this).find("li:not(:lt(" + num + "))").hide();
    $(".js-btn-more02").click(function (e) {
      e.preventDefault();
      num += 1;
      $(".js-accordion02 li:lt(" + num + ")").slideDown();

      if (listItems <= num) {
        $(".js-btn-more02").hide();
      }
    });
  });
});
$(function () {
  var el_loadmore = $(".content-load-more li");
  var total_item = $(".content-load-more li").length;
  var h_loadmore = el_loadmore.outerHeight() * 2;

  if ($(window).width() <= 800) {
    el_loadmore.slice(0, 5).css('display', 'block');
    var num = 6;
  } else {
    el_loadmore.slice(0, 9).css('display', 'block');
    var num = 10;
  }

  $(".js-load-more").on('click', function (e) {
    e.preventDefault();
    num += 1;
    $(".content-load-more li:hidden").slice(0, 1).slideDown();
    $('html,body').animate({
      scrollTop: $(this).offset().top - h_loadmore
    }, 1500);

    if (total_item < num) {
      $(".js-load-more").hide();
    }
  });
  var total_ten = $(".content-load-ten li").length,
      num_ten = 3;
  $(".content-load-ten li").each(function (index) {
    if (index < num_ten) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
  $(".js-load-ten").on('click', function (e) {
    e.preventDefault();
    num_ten += 7;
    $(".content-load-ten li").each(function (index) {
      if (index < num_ten) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    if (num_ten >= 10) {
      $(this).css('pointer-events', 'none');
    }
  });
});
$('.work-seach__list .work-seach__list-item').on('click', function () {
  $(this).addClass('close');
}); //js for modal

$(function () {
  $('.js-modal').on('click', function (e) {
    e.preventDefault();
    var modal_attr = $(this).attr('data-modal');
    $('#' + modal_attr).addClass('open');
    $(this).addClass('td-choose');
  });
  $('.modal-main .modal-block__close').on('click', function () {
    $('.modal-main').removeClass('open');

    if ($('.js-modal').hasClass('td-choose')) {
      $('.js-modal').removeClass('td-choose');
    }
  });
  $('.m-schedule__table--js td').on('click', function (e) {
    e.preventDefault();
    $('#M002_2').addClass('open');
    $(this).addClass('td-choose');
  });
  $('.m-schedule__table-appointment td').on('click', function (e) {
    e.preventDefault();
    $('#M001').addClass('open');
    $(this).addClass('td-choose');
  });
  $('.m-schedule__table--modal td').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('event');
  });
  $('.js-modal-02').on('click', function (e) {
    e.stopPropagation();
    $('#M002').addClass('open');
    $(this).addClass('td-choose');
  });
});
tippy('.js-tooltip'); // js-viewmore

/* ここには、表示するリストの数を指定します。 */

var moreNum = 10;
/* 表示するリストの数以降のリストを隠しておきます。 */
//$('.js-viewmore-list__item:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');

$('.js-viewmore-list__item').addClass('is-hidden');
/* 全てのリストを表示したら「もっとみる」ボタンをフェードアウトします。 */

$('.js-viewmore-btn').on('click', function () {
  $('.js-viewmore-list__item.is-hidden').slice(0, moreNum).removeClass('is-hidden');

  if ($('.js-viewmore-list__item.is-hidden').length == 0) {
    $('.js-viewmore-btn').fadeOut();
  }
});
/* リストの数が、表示するリストの数以下だった場合、「もっとみる」ボタンを非表示にします。 */

$(function () {
  var list = $(".js-viewmore-list__item").length;

  if (list < moreNum) {
    $('.js-viewmore-btn').addClass('is-btn-hidden');
  }
}); //Month slider

$(function () {
  $(".js-month-content").slick({
    autoplay: false,
    arrows: false,
    speed: 500,
    fade: true,
    asNavFor: ".js-month-slider"
  });
  $(".js-month-slider").slick({
    slidesToShow: 1,
    asNavFor: ".js-month-content",
    focusOnSelect: true
  });
}); //Calendar slider

$(function () {
  $('.js-calendarmonth-slider').slick({
    autoplay: false,
    arrows: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    asNavFor: '.js-calendar-slider'
  });
  $('.js-calendar-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-calendarmonth-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: false
  });
});
var $window = $(window);

if ($window.width() <= 1024) {
  $('.js-height').each(function () {
    var h_ct = $(this).attr('data-height');
    $(this).css({
      "height": h_ct,
      "overflow": "hidden"
    });
  });
  $('.js-showadd span').on('click', function () {
    $(this).closest('.js-showadd').prev('.js-height').css({
      "height": "auto",
      "overflow": "visible"
    });
    $(this).closest('.js-showadd').css({
      "display": "none"
    });
  });
} else {
  $('.js-height').each(function () {
    $(this).css({
      "height": 'auto',
      "overflow": "visible"
    });
  });
  $('.js-showadd').css({
    "display": "block"
  });
}

$(window).resize(function () {
  if ($window.width() <= 1024) {
    $('.js-height').each(function () {
      var h_ct = $(this).attr('data-height');
      $(this).css({
        "height": h_ct,
        "overflow": "hidden"
      });
    });
    $('.js-showadd span').on('click', function () {
      $(this).closest('.js-showadd').prev('.js-height').css({
        "height": "auto",
        "overflow": "visible"
      });
      $(this).closest('.js-showadd').css({
        "display": "none"
      });
    });
  } else {
    $('.js-height').each(function () {
      $(this).css({
        "height": 'auto',
        "overflow": "visible"
      });
    });
    $('.js-showadd').css({
      "display": "block"
    });
  }
});
$(function () {
  var i = 1;
  $('.js-add-wrap .js-add-input-item').each(function () {
    $(this).children(".job-infor__listfile-ttl").append('<span class="js-number">' + i + '</span>');
    i++;
  });
}); // 追加ボタン押下時
//$(".js-add-file").addClass("off");

$('.js-add-file').click(function () {
  var number = $('.js-add-wrap .js-add-input-item').length + 1;
  var numberItem = $('.js-add-wrap .js-add-input-item').length;

  if (numberItem < 5) {
    $('.js-add-wrap').append("\n\t\t\t<div class=\"job-infor__listfile-item job-infor__listfile-item--add js-add-input-item\">\n\t\t\t\t<div class=\"job-infor__listfile-ttl\">\u30B7\u30C3\u30C6\u30A3\u30F3\u30B0\u98A8\u666F\u5199\u771F<span class=\"js-number\">".concat(number, "</span></div>\n\t\t\t\t<div class=\"job-infor__listfile-thumbnail form-fileimg\">\n\t\t\t\t\t<label  class=\"lb-file\">PC\u304B\u3089\u306E<span>\u30D5\u30A1\u30A4\u30EB\u9078\u629E</span>\u3001\u307E\u305F\u306F\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u3067\u6DFB\u4ED8\u3067\u304D\u307E\u3059\u3002\n\t\t\t\t\t\t<div class=\"job-infor__listfile-imguse\"><span class=\"pc\"><img src=\"./assets/img/U006-5/img-01.png\" alt=\"img\" class=\"js-imgfile\"></span></div>\n\t\t\t\t\t\t<input type=\"file\" name=\"photo\" class=\"js_uploadfile\" required>\n\t\t\t\t\t</label>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-remove js-remove\">\u524A\u9664</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t"));
  }

  $('.lb-file').delegate('.js_uploadfile', 'change', function (event) {
    $(this).closest('.lb-file').find('.js-imgfile').attr("src", URL.createObjectURL(event.target.files[0]));
    $(this).closest('.lb-file').addClass('setsize');
  });

  if (numberItem > 3) {
    $(".js-add-file").removeClass("on");
  }
});
$(function () {
  var i = 1;
  $('.js-add-wrap02 .js-add-input-item02').each(function () {
    // $(this).children(".job-infor__listfile-ttl").append('<span class="js-number02">' + i + '</span>');
    i++;
  });
}); // 追加ボタン押下時
//$(".js-add-file").addClass("off");

$('.js-add-file02').click(function () {
  var number02 = $('.js-add-wrap02 .js-add-input-item02').length + 1;
  var numberItem = $('.js-add-wrap02 .js-add-input-item02').length;

  if (numberItem < 5) {
    $('.js-add-wrap02').append("\n\t\t\t<div class=\"job-infor__listfile-item js-add-input-item02\">\n\t\t\t<div class=\"job-infor__listfile-ttl\">\u5BB6\u4E8B\u4EE3\u884C\u98A8\u666F\u5199\u771F<span class=\"js-number02\">".concat(number02, "</span></div>\n\t\t\t\t<div class=\"job-infor__listfile-thumbnail form-fileimg\">\n\t\t\t\t\t<label for=\"upload-photo03\"  class=\"lb-file\">\n\t\t\t\t\t\tPC\u304B\u3089\u306E<span>\u30D5\u30A1\u30A4\u30EB\u9078\u629E</span>\u3001\u307E\u305F\u306F\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u3067\u6DFB\u4ED8\u3067\u304D\u307E\u3059\u3002\n\t\t\t\t\t\t<span class=\"job-infor__listfile-imguse\">\n\t\t\t\t\t\t\t<span class=\"pc\"><img src=\"./assets/img/U006-5/img-03.png\" alt=\"img\"></span>\n\t\t\t\t\t\t\t<span class=\"sp\"><img width=\"203\" src=\"./assets/img/U006-5/img-03.png\" alt=\"img\"  class=\"js-imgfile\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<input type=\"file\" name=\"photo\" id=\"upload-photo03\" class=\"js_uploadfile\" required>\n\t\t\t\t\t</label>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-remove js-remove-video\">\u524A\u9664</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t"));
  }

  $('.lb-file').delegate('.js_uploadfile', 'change', function (event) {
    $(this).closest('.lb-file').find('.js-imgfile').attr("src", URL.createObjectURL(event.target.files[0]));
    $(this).closest('.lb-file').addClass('setsize');
  });

  if (numberItem > 3) {
    $(".js-add-file02").removeClass("on");
  }
});
$('.js-add-file03').click(function () {
  $('.js-add-wrap').append("\n\t\t<div class=\"job-infor__listfile-item js-add-input-item\">\n\t\t\t<div class=\"job-infor__listfile-thumbnail form-fileimg\">\n\t\t\t\t<label  class=\"lb-file\">\n\t\t\t\t\tPC\u304B\u3089\u306E<span>\u30D5\u30A1\u30A4\u30EB\u9078\u629E</span>\u3001\u307E\u305F\u306F\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7\u3067\u6DFB\u4ED8\u3067\u304D\u307E\u3059\u3002\n\t\t\t\t\t<span class=\"job-infor__listfile-imguse\">\n\t\t\t\t\t\t<span class=\"job-infor__listfile-imguse--thumb\">\n\t\t\t\t\t\t\t<span class=\"pc\"><img src=\"./assets/img/U006-5/img-03.png\" alt=\"img\" id=\"blah\" class=\"js-imgfile\"></span>\n\t\t\t\t\t\t\t<span class=\"sp\"><img width=\"93\" src=\"./assets/img/U006-5/img-03.png\" alt=\"img\" class=\"js-imgfile\"></span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<input type=\"file\" name=\"photo\" id=\"upload-photo03\"  class=\"js_uploadfile\" required>\n\t\t\t\t</label>\n\t\t\t\t<div class=\"form-remove js-remove\">\u524A\u9664</div>\n\t\t\t</div>\n\t\t</div>\n\t\t");
  $('.lb-file').delegate('.js_uploadfile', 'change', function (event) {
    $(this).closest('.lb-file').find('.js-imgfile').attr("src", URL.createObjectURL(event.target.files[0]));
    $(this).closest('.lb-file').addClass('setsize');
  });
});
$('.js-add-child').click(function () {
  $('.js-add-wrap').append("\n\t\t<div class=\"js-add-input-item\">\n\t\t\t<div class=\"child_ttl_block\">\n\t\t\t<h3 class=\"child_ttl\">お子様情報<span>（2人目）</span></h3>\n\t\t\t<div class=\"js-remove\">このお子様を削除する</div>\n\t\t\t</div>\n\t\t\t<ul class=\"job-infor__list job-infor__list--w178 mbpc-32 mbsp-32\">\n\t\t\t<li class=\"job-infor__list-item job-infor__list-item--wrap\">\n\t\t\t<div class=\"job-infor__list-ttl\">\n\t\t\t名前<small class=\"required\">\n\t\t\t※</small></div><div class=\"job-infor__list-desc job-infor__list-desc-flex\">\n\t\t\t<input type=\"text\" placeholder=\"（姓）佐藤\" class=\"form-edit__input\">\n\t\t\t<input type=\"text\" placeholder=\"（名）花子\" class=\"form-edit__input\">\n\t\t\t</div></li><li class=\"job-infor__list-item job-infor__list-item--wrap\">\n\t\t\t<div class=\"job-infor__list-ttl\">\n\t\t\tふりがな<small class=\"required\">\n\t\t\t※</small></div>\n\t\t\t<div class=\"job-infor__list-desc job-infor__list-desc-flex\">\n\t\t\t<input type=\"text\" placeholder=\"（せい）さとう\" class=\"form-edit__input\">\n\t\t\t<input type=\"text\" placeholder=\"（めい）はなこ\" class=\"form-edit__input\">\n\t\t\t</div></li>\n\t\t\t<li class=\"job-infor__list-item job-infor__list-item--wrap\">\n\t\t\t<div class=\"job-infor__list-ttl\">性別</div>\n\t\t\t<div class=\"job-infor__list-desc\">\n\t\t\t<div class=\"c-control__02\">\n\t\t\t<label class=\"form-edit__radio\">\n\t\t\t<input type=\"radio\" name=\"gender2\"><span>女性</span></label>\n\t\t\t<label class=\"form-edit__radio\">\n\t\t\t<input type=\"radio\" name=\"gender2\"><span>男性</span></label>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"job-infor__list-item job-infor__list-item--wrap\">\n\t\t\t<div class=\"job-infor__list-ttl\">愛称<small class=\"required\">※</small></div>\n\t\t\t<div class=\"job-infor__list-desc\">\n\t\t\t<input type=\"text\" placeholder=\"ひなちゃん\" class=\"form-edit__input\" value=\"ひなちゃん\">\n\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"job-infor__list-item job-infor__list-item--wrap\">\n\t\t\t<div class=\"job-infor__list-ttl\">生年月日<small class=\"required\">\n\t\t\t※</small></div>\n\t\t\t<div class=\"job-infor__list-desc\">\n\t\t\t<label class=\"form_part_date\">\n\t\t\t<input type=\"date\" placeholder=\"日付を選択してください\" class=\"form_part_date_input\" value=\"2018-09-02\">\n\t\t\t</label>\n\t\t\t<p class=\"c-txt__04 mtpc-8 mtsp-8\">出産前のお子さまの情報は出産予定日を入力ください。出産後変更することができます。</p></div>\n\t\t\t</li>\n\t\t\t<li class=\"job-infor__list-item job-infor__list-item--wrap\">\n\t\t\t<div class=\"job-infor__list-ttl\">アレルギー</div>\n\t\t\t<div class=\"job-infor__list-desc\">\n\t\t\t<textarea name=\"\" cols=\"30\" rows=\"4\" class=\"form-edit__textarea\" placeholder=\"例）小麦、牛乳など\">\n\t\t\t</textarea>\n\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"job-infor__list-item job-infor__list-item--wrap\">\n\t\t\t<div class=\"job-infor__list-ttl\">持病</div>\n\t\t\t<div class=\"job-infor__list-desc\">\n\t\t\t<div class=\"c-control__02\">\n\t\t\t<label class=\"form-edit__radio\">\n\t\t\t<input type=\"radio\" name=\"allergie2\"><span>あり</span></label>\n\t\t\t<label class=\"form-edit__radio\">\n\t\t\t<input type=\"radio\" name=\"allergie2\"><span>なし</span></label>\n\t\t\t</div>\n\t\t\t<textarea name=\"\" cols=\"30\" rows=\"5\" class=\"form-edit__textarea\" placeholder=\"（例）喘息がある。普段の生活では特にケアは必要ないが、発作が出た場合は医師から処方されている発作時の治療薬を内服して安静にしていると落ち着きます。\">\n\t\t\t</textarea>\n\t\t\t<p class=\"c-txt__04 mtpc-8 mtsp-8\">必要なケアや持病などを具体的にご記入ください。<br>持病（アナフィラキシーショック経験、てんかん、喘息など）や障害（発育遅延、発達障害など）</p>\n\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"job-infor__list-item job-infor__list-item--wrap\">\n\t\t\t<div class=\"job-infor__list-ttl\">その他/配慮事項</div>\n\t\t\t<div class=\"job-infor__list-desc\">\n\t\t\t<textarea name=\"\" cols=\"30\" rows=\"5\" class=\"form-edit__textarea\" placeholder=\"お子様の性格や好きな遊びなどご記入ください。\">\n\t\t\t</textarea>\n\t\t\t</div>\n\t\t\t</li>\n\t\t\t</ul>\n\t\t");
  $('.lb-file').delegate('.js_uploadfile', 'change', function (event) {
    $(this).closest('.lb-file').find('.js-imgfile').attr("src", URL.createObjectURL(event.target.files[0]));
    $(this).closest('.lb-file').addClass('setsize');
  });
});
$(document).on('click', '.js-remove-video', function () {
  $(this).closest('.js-add-input-item02').remove();
  $(".js-add-file02").addClass("on"); // ★ラベルの番号を振り直し

  $('.js-number02').each(function (i) {
    $(this).text(i + 1);
  });
});
$('.js-add-file02sub').on('click', function () {
  $(this).siblings('.js-addbox').find('.js-add-wrapwpsub:last-child').clone().val('').insertAfter('.js-add-wrapwpsub:last-child');
  $('.lb-file').delegate('.js_uploadfile', 'change', function (event) {
    $(this).closest('.lb-file').find('.js-imgfile').attr("src", URL.createObjectURL(event.target.files[0]));
    $(this).closest('.lb-file').addClass('setsize');
  });
}); // 削除ボタン押下時

$(document).on('click', '.js-remove', function () {
  $(this).closest('.js-add-input-item').remove();
  $(".js-add-file").addClass("on"); // ★ラベルの番号を振り直し

  $('.js-number').each(function (i) {
    $(this).text(i + 1);
  });
}); // console.log(new Date().getFullYear());

for (var i_date = new Date().getFullYear() + 1; i_date > 1969; i_date--) {
  $(".yearpicker").val($(".yearpicker option:first").val('').html('年を選択'));
  $('.yearpicker').append($('<option />').val(i_date).html(i_date + '年'));
}

for (var i_date = new Date().getFullYear() + 1; i_date > 1969; i_date--) {
  $(".yearpicker01").val($(".yearpicker01 option:first").val('').html('年を選択'));
  $('.yearpicker01').append($('<option />').val(i_date).html(i_date + '年'));
}

for (var i_date = new Date().getFullYear() + 1; i_date > 1989; i_date--) {
  $(".yearpicker90").val($(".yearpicker90 option:first").val('').html('年を選択'));
  $('.yearpicker90').append($('<option />').val(i_date).html(i_date + '年'));
}

$('.js-countcharecter').on('keyup', function () {
  var length_charecter = $(this).attr('maxlength');
  console.log(length_charecter);
  $(this).closest('.quote-list__item').find('.charecter-count__no').text(length_charecter - $(this).val().length);
}); // $('.js-tabcheckbox .form-edit__checkbox').hide();

$('.js-ctcheck').hide(); // $('.js-tabcheckbox .form-edit__checkbox:first-child').show();

$('.js-ctcheck:first-child').show();
$('.js-tabcheckbox .js-check input').on('click', function () {
  if ($(this).prop('checked')) {
    var val_data = $(this).closest('.js-check').attr('data-id');
    $('.js-ctcheck').hide().removeClass("is-open");
    $('#' + val_data).show().addClass("is-open");
  }
}); //Add file

$(function () {
  // const btn_clone02 = $('.js-add-video');  // 追加ボタン
  // // clone
  // btn_clone02.click(function (e) {
  // 	e.preventDefault();
  // 	var add_form02 = $('.job-infor__listfile-item--video').last();  // 最後尾にあるinput;
  // 	add_form02.clone().val('').insertAfter(add_form02);
  // 	$('.job-infor__listfile-item--video').last().addClass('add');
  // 	// $('.add .reset-form').last()[0].reset();
  // 	var length = $('.job-infor__listfile-item--video').length;
  // 	if (length >= 5) {
  // 		$('.js-add-video').hide();
  // 	}
  // 	var n = $(".job-infor__listfile-item--video").length;
  // 	$('.job-infor__listfile-item--video .job-infor__listfile-ttl .number').last().text(n);
  // });
  //js add option page P060
  $('.modal-main').each(function () {
    var btn_add_option = $(this).find('.js-add-option'); // 追加ボタン

    var modal = $(this); // var target = modal.find('.option-list .option-item');

    var target = modal.find('.option-add');
    btn_add_option.click(function (e) {
      e.preventDefault();
      var option_last = modal.find('.option-list .option-item').last();
      var qty_item = $(this).parent().prev().find('.option-item').length;

      if (qty_item === 0) {
        modal.find('.option-list').append(target);
      }

      option_last.clone().val('').insertAfter(option_last);
      target.each(function () {
        $(this).find('.js-delete-option').click(function () {
          $(this).closest('.option-item').remove();
        });
      });
      $('.option-list .option-item').each(function () {
        $(this).find('.js-delete-option').click(function () {
          $(this).closest('.option-item').remove();
        });
      });
    });
    modal.find('.option-list .option-item').each(function () {
      $(this).find('.js-delete-option').click(function () {
        $(this).closest('.option-item').remove();
      });
    });
  }); //js show option add by day

  $('.auto-registration__option-item').each(function () {
    $(this).find('.js-show-option').click(function () {
      $(this).next().find('.form-edit__checkbox').css("pointer-events", 'none');
      $(this).next().find('input').prop('checked', false);
      var day = $(this).attr('data-label');
      var el_closet = $(this).closest('.auto-registration__option-item');

      if (el_closet.next().hasClass('auto-registration__wrapper')) {
        var el_lst_option = el_closet.next();
        el_lst_option.find('.option-item').last().after("\n\t\t\t\t<div class=\"auto-registration__list-item option-item\">\t\t\t\n\t\t\t\t\t<div class=\"modal-ct__select\">\n\t\t\t\t\t\t<ul class=\"modal-ct__select-group\">\n\t\t\t\t\t\t\t<li class=\"modal-ct__select-item\">\n\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">00</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">01</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">02</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">03</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">04</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">05</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">06</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">07</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">08</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">09</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">10</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">11</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"selected\">12</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">13</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">14</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">15</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">16</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">17</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">18</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">19</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">20</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">21</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">22</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">23</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"modal-ct__select-item\">\n\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"selected\">00</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">15</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">30</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">45</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<span>\u301C</span>\n\t\t\t\t\t\t<ul class=\"modal-ct__select-group\">\n\t\t\t\t\t\t\t<li class=\"modal-ct__select-item\">\n\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">00</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">01</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">02</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">03</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">04</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">05</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">06</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">07</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">08</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">09</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">10</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">11</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">12</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">13</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">14</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">15</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">16</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">17</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">18</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"selected\">19</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">20</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">21</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">22</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">23</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"modal-ct__select-item\">\n\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"selected\">00</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">15</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">30</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">45</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"auto-registration__list-btn\">\n\t\t\t\t\t\t<button class=\"c-btn__delete js-delete-option02\">\u524A\u9664</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t");
      } else {
        el_closet.after("\n\t\t\t\t\t<div class=\"auto-registration__wrapper\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"auto-registration__list option-list\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"auto-registration__list-item option-item\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"modal-ct__select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"modal-ct__select-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"modal-ct__select-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">00</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">01</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">02</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">03</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">04</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">05</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">06</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">07</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">08</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">09</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">10</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">11</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"selected\">12</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">13</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">14</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">15</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">16</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">17</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">18</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">19</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">20</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">21</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">22</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">23</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"modal-ct__select-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"selected\">00</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">15</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">30</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">45</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>\u301C</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"modal-ct__select-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"modal-ct__select-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">00</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">01</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">02</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">03</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">04</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">05</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">06</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">07</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">08</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">09</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">10</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">11</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">12</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">13</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">14</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">15</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">16</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">17</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">18</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"selected\">19</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">20</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">21</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">22</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">23</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"modal-ct__select-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" selected=\"selected\">00</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">15</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">30</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">45</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"auto-registration__list-btn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"c-btn__delete js-delete-option02\">\u524A\u9664</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t");
      }

      el_closet.next().slideDown(); //js add item for auto-registration

      var btn_add_option_02 = $('.js-add-option-02'); // 追加ボタン

      btn_add_option_02.click(function (e) {
        e.preventDefault(); // var target = $(this).closest('.auto-registration__wrapper').find('.option-list .option-item');

        var target = $(this).closest('.auto-registration').find('.option-add');
        var qty_item = $(this).parent().prev().find('.option-item').length;
        var day = $(this).closest('.auto-registration__wrapper').attr('data-label');

        if (qty_item === 0) {// $(this).closest('.auto-registration__wrapper').find('.option-list').append(
          // 	`
          // 	<div class="auto-registration__list-item option-item option-add">
          // 					<span class="auto-registration__list-day">` + day + `</span>
          // 					<div class="modal-ct__select">
          // 						<ul class="modal-ct__select-group">
          // 							<li class="modal-ct__select-item">
          // 								<div class="form_part_select">
          // 									<select>
          // 										<option value="">00</option>
          // 										<option value="">01</option>
          // 										<option value="">02</option>
          // 										<option value="">03</option>
          // 										<option value="">04</option>
          // 										<option value="">05</option>
          // 										<option value="">06</option>
          // 										<option value="">07</option>
          // 										<option value="">08</option>
          // 										<option value="">09</option>
          // 										<option value="">10</option>
          // 										<option value="">11</option>
          // 										<option value="" selected="selected">12</option>
          // 										<option value="">13</option>
          // 										<option value="">14</option>
          // 										<option value="">15</option>
          // 										<option value="">16</option>
          // 										<option value="">17</option>
          // 										<option value="">18</option>
          // 										<option value="">19</option>
          // 										<option value="">20</option>
          // 										<option value="">21</option>
          // 										<option value="">22</option>
          // 										<option value="">23</option>
          // 									</select>
          // 								</div>
          // 							</li>
          // 							<li class="modal-ct__select-item">
          // 								<div class="form_part_select">
          // 									<select>
          // 										<option value="" selected="selected">00</option>
          // 										<option value="">15</option>
          // 										<option value="">30</option>
          // 										<option value="">45</option>
          // 									</select>
          // 								</div>
          // 							</li>
          // 						</ul>
          // 						<span>〜</span>
          // 						<ul class="modal-ct__select-group">
          // 							<li class="modal-ct__select-item">
          // 								<div class="form_part_select">
          // 									<select>
          // 										<option value="">00</option>
          // 										<option value="">01</option>
          // 										<option value="">02</option>
          // 										<option value="">03</option>
          // 										<option value="">04</option>
          // 										<option value="">05</option>
          // 										<option value="">06</option>
          // 										<option value="">07</option>
          // 										<option value="">08</option>
          // 										<option value="">09</option>
          // 										<option value="">10</option>
          // 										<option value="">11</option>
          // 										<option value="">12</option>
          // 										<option value="">13</option>
          // 										<option value="">14</option>
          // 										<option value="">15</option>
          // 										<option value="">16</option>
          // 										<option value="">17</option>
          // 										<option value="">18</option>
          // 										<option value="" selected="selected">19</option>
          // 										<option value="">20</option>
          // 										<option value="">21</option>
          // 										<option value="">22</option>
          // 										<option value="">23</option>
          // 									</select>
          // 								</div>
          // 							</li>
          // 							<li class="modal-ct__select-item">
          // 								<div class="form_part_select">
          // 									<select>
          // 										<option value="" selected="selected">00</option>
          // 										<option value="">15</option>
          // 										<option value="">30</option>
          // 										<option value="">45</option>
          // 									</select>
          // 								</div>
          // 							</li>
          // 						</ul>
          // 					</div>
          // 					<div class="auto-registration__list-btn">
          // 						<button class="c-btn__delete js-delete-option">削除</button>
          // 					</div>
          // 				</div>
          // 	`
          // );
        } else {
          var option_last = $(this).closest('.auto-registration__wrapper').find('.option-list .option-item').last();
          option_last.clone().val('').insertAfter(option_last);
        }

        $('.auto-registration__wrapper').each(function () {
          $(this).find('.js-delete-option02').click(function () {
            // $(this).closest('.option-item').remove();
            var qty_item = $(this).closest('.auto-registration__list').find('.auto-registration__list-item').length;
            console.log('test00000');

            if (qty_item === 1) {
              $(this).closest('.auto-registration__option').find('.auto-registration__wrapper').slideUp();
              $(this).closest('.option-item').remove();
            }

            $(this).closest('.option-item').remove();
          });
        });
      });
      $('.js-delete-option02').click(function () {
        // $(this).closest('.option-item').remove();
        console.log();

        if ($(this).closest('.option-list').find('.option-item').length > 1) {
          $(this).closest('.option-item').remove();
        } else {
          $(this).closest('.auto-registration__wrapper').prev().find('.form-edit__checkbox').css('pointer-events', 'auto');
          $(this).closest('.auto-registration__wrapper').remove();
        }
      });
    });
  });
}); //accordion page P032
// check input 01

{
  var deleteResult = function deleteResult(el) {
    el.find('.js-remove-result01').click(function (e) {
      e.preventDefault();
      $(this).closest('.quote-list__fee-remove01').css('display', 'none');
      $(this).closest('.quote-list__fee-remove01').prev().find('input').val('');
      $(this).parent().parent().parent().prev().removeClass('on');
      $(this).parent().parent().parent().parent().remove();
    });
  };

  var editResult = function editResult(el) {
    el.find('.js-edit-result01').click(function (e) {
      e.preventDefault();
      $(this).parent().parent().prev().css('display', 'none');
      $(this).parent().parent().prev().css('display', 'none');
      $(this).parent().parent().parent().prev().removeClass('on');
      $(this).parent().parent().parent().prev().addClass('edit');
    });
  };

  $(".quote-list__fee-form01").hide();
  $(".quote-list__fee-remove01").hide();
  $('.js-add-form01').click(function (e) {
    e.preventDefault(); // $(this).next().show();

    var add_item = $(this).parent().next();
    add_item.clone().val('').insertAfter($(this));
    $(this).next().find('.quote-list__fee-form01').css('display', 'flex');
    $(this).next().find('.quote-list__fee-form01').removeClass('on');
    $(this).next().find('.quote-list__fee-remove01').hide();
    $('.quote-list__fee-ct01').each(function () {
      //Add data child
      $(this).find('.js-send-result01').click(function (e) {
        e.preventDefault();
        var option = $(this).parent().find('.option').val();
        var price = $(this).parent().find('.price').val();
        $(this).parent().next().find('#price').html(price);
        $(this).parent().next().find('#option').html(option);

        if (price.length != 0 && option.length != 0) {
          $(this).parent().next().css('display', 'flex');
          $(this).parent().next().find('.result-txt').css('display', 'block');
          $(this).parent().addClass('on');
        }
      }); //Edit data child

      editResult($(this)); //Delelte date child

      deleteResult($(this));
    });
  });
} // js add boxgray

$('.js-add-boxgray').on('click', function () {
  var element_boxgray = $(this).siblings('.js-ctboxgray'); // var ct_boxgray = $(this).next('.js-block__needadd');
  // $(this).closest('.js-ctboxgray').last().append(ct_boxgray);

  element_boxgray.append("\n\t\t\t<div class=\"js-ctboxgraysub\">\n\t\t\t\t\t\t\t\t\t<div class=\"request-form__gray\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"request-form__gray-ttl\">\n\t\t\t\t\t\t\t\t\t\t\t\u8077\u52D9\u671F\u9593\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<div class=\"quote-list__date-list quote-list__date-list--02\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"quote-list__date-list__wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"quote-list__date-item w107\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select name=\"yearpicker02\" class=\"yearpicker02\"></select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"quote-list__date-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\u6708\">\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\u6708\">1\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\u6708\">2\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\u6708\">3\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\u6708\">4\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"5\u6708\">5\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"6\u6708\">6\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"7\u6708\">7\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"8\u6708\">8\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"9\u6708\">9\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"10\u6708\">10\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"11\u6708\">11\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"12\u6708\">12\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"quote-list__date-between\">\u301C</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"quote-list__date-list__wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"quote-list__date-item w107\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select name=\"yearpicker03\" class='yearpicker03'></select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"quote-list__date-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form_part_select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\u6708\">\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\u6708\">1\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"2\u6708\">2\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"3\u6708\">3\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"4\u6708\">4\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"5\u6708\">5\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"6\u6708\">6\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"7\u6708\">7\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"8\u6708\">8\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"9\u6708\">9\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"10\u6708\">10\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"11\u6708\">11\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"12\u6708\">12\u6708</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"request-form__gray-ttl\">\n\t\t\t\t\t\t\t\t\t\t\t\u5B9F\u52D9\u56DE\u6570\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"statuschips js-tooltip\" data-tippy-content=\"<span class='inner-cap'><span>\u30B9\u30C6\u30FC\u30BF\u30B9\u8AAC\u660E\u304C\u5165\u308A\u307E\u3059\u3002</p><p>\u30C4\u30FC\u30EB\u30C1\u30C3\u30D7\u306B\u306FHTML\u3082\u4F7F\u3048\u307E\u3059\u3002</span></span>\"></span>\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<div class=\"quote-list--026 mbpc-10 mbsp-10\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"quote-list__fee-input w133\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-edit__input\" placeholder=\"\uFF08\u4F8B\uFF0920\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\u56DE</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"request-form__gray-ttl\">\n\t\t\t\t\t\t\t\t\t\t\t\u5B9F\u52D9\u5185\u5BB9\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t<textarea name=\"\" cols=\"30\" rows=\"10\" class=\"form-edit__textarea\"\n\t\t\t\t\t\t\t\t\t\t          placeholder=\"\u8077\u52D9\u5185\u5BB9\u3092\u8A18\u5165\u3057\u3066\u304F\u3060\u3055\u3044\u3002\"></textarea>\n\t\t\t\t\t\t\t\t\t\t<div class=\"request-form__ct-right\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"c-example__button js-btn-acc\"><span>\u5165\u529B\u4F8B</span></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"c-example__cont js-acc-cont\" style=\"display: none;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"c-example__close js-acc-close\">\xD7</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"c-txt__01\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p> \u30FB\u602A\u6211\u306E\u5834\u5408\u306F\u602A\u6211\u3092\u3057\u305F\u90E8\u4F4D\u3001\u602A\u6211\u3092\u3057\u305F\u7D4C\u7DEF\u3092\u8A73\u3057\u304F\u8A18\u5165\u3057\u3066\u304F\u3060\u3055\u3044\u3002<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\u30FB\u3054\u81EA\u5B85\u306E\u5668\u7269\u3092\u7834\u640D\u3057\u3066\u3057\u307E\u3063\u305F\u5834\u5408\u306F\u3001\u72B6\u6CC1\u3068\u7834\u640D\u3057\u305F\u7269\u3092\u8A73\u3057\u304F\u8A18\u5165\u3057\u3066\u304F\u3060\u3055\u3044\u3002 </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>\u300A\u30D9\u30D3\u30FC\u30B7\u30C3\u30BF\u30FC\u300B</strong><br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\u3007\u3007\u516C\u5712\u306E\u904A\u5177\u3067\u904A\u3093\u3067\u3044\u305F\u3068\u3053\u308D\u30012\u30E1\u30FC\u30C8\u30EB\u307B\u3069\u306E\u9AD8\u3055\u304C\u3042\u308B\u96F2\u68AF\u306B\u3076\u3089\u4E0B\u304C\u3063\u3066\u3044\u308B\u969B\u306B\u843D\u4E0B\u3057\u3066\u3057\u307E\u3044\u3001\u305D\u306E\u969B\u53D7\u3051\u6B62\u3081\u3089\u308C\u305A\u306B\u8DB3\u9996\u3092\u637B\u632B\u3057\u3066\u3057\u307E\u3044\u307E\u3057\u305F\u3002<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\u5FDC\u6025\u51E6\u7F6E\u3068\u3057\u3066\u516C\u5712\u306E\u6C34\u9053\u3067\u60A3\u90E8\u3092\u51B7\u3084\u3057\u307E\u3057\u305F\u304C\u8DB3\u3092\u3064\u304F\u3068\u75DB\u3044\u69D8\u5B50\u3067\u3057\u305F\u3002 </p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>\u300A\u5BB6\u4E8B\u4EE3\u884C\u300B</strong><br> \u30AD\u30C3\u30C1\u30F3\u3092\u6383\u9664\u3057\u3066\u3044\u308B\u969B\u3001\u4E0D\u6CE8\u610F\u3067\u304A\u76BF\u30921\u679A\u843D\u3068\u3057\u3066\u3057\u307E\u3044\u7E01\u304C\u5C11\u3057\u6B20\u3051\u3066\u3057\u307E\u3044\u307E\u3057\u305F\u3002\n\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-remove js-removeboxgray\">\u524A\u9664</div>\n\t\t\t");

  for (var i_date = new Date().getFullYear(); i_date > 1969; i_date--) {
    $(".yearpicker02").val($(".yearpicker02 option:first").val('年を選択').html('年を選択'));
    $('.yearpicker02').append($('<option />').val(i_date).html(i_date + '年'));
  }

  for (var i_date = new Date().getFullYear(); i_date > 1969; i_date--) {
    $(".yearpicker03").val($(".yearpicker03 option:first").val('年を選択').html('年を選択'));
    $('.yearpicker03').append($('<option />').val(i_date).html(i_date + '年'));
  }

  $('.js-removeboxgray').on('click', function () {
    $(this).prev('.js-ctboxgraysub').remove();
    $(this).remove();
  });
});
$('.js-removeboxgray').on('click', function () {
  $(this).prev('.js-ctboxgraysub').remove();
  $(this).remove();
}); // check input 02

{
  var deleteResult02 = function deleteResult02(el) {
    el.find('.js-remove-result02').click(function (e) {
      e.preventDefault();
      $(this).closest('.quote-list__fee-remove02').css('display', 'none');
      $(this).closest('.quote-list__fee-remove02').prev().find('input').val('');
      $(this).closest('.quote-list__fee-remove02').prev().find('select').val('');
      $(this).parent().parent().parent().prev().removeClass('on');
      $(this).parent().parent().parent().parent().remove();
    });
  };

  var editResult02 = function editResult02(el) {
    el.find('.js-edit-result02').click(function (e) {
      e.preventDefault();
      $(this).parent().parent().prev().css('display', 'none');
      $(this).parent().parent().parent().prev().removeClass('on');
      $(this).parent().parent().parent().prev().addClass('edit');
    });
  };

  $(".quote-list__fee-form02").hide();
  $(".quote-list__fee-remove02").hide();
  $('.js-add-form02').click(function (e) {
    e.preventDefault();
    $(this).next().show();
    var add_item = $(this).parent().next();
    add_item.clone().val('').insertAfter($(this));
    $(this).next().find('.quote-list__fee-form02').css('display', 'flex');
    $(this).next().find('.quote-list__fee-form02').removeClass('on');
    $(this).next().find('.quote-list__fee-remove02').hide();
    $('.quote-list__fee-ct02').each(function () {
      //Add data child
      $(this).find('.js-send-result02').click(function (e) {
        e.preventDefault();
        var timeFirst = $(this).parent().find('.time-first').val();
        var timeLast = $(this).parent().find('.time-last').val();
        var timeDay = $(this).parent().find('.time-day').val();
        $(this).parent().next().find('#time-first').html(timeFirst);
        $(this).parent().next().find('#time-last').html(timeLast);
        $(this).parent().next().find('#time-day').html(timeDay);

        if (timeDay.length != 0) {
          $(this).parent().next().css('display', 'flex');
          $(this).parent().next().find('.result-txt').css('display', 'block');
          $(this).parent().addClass('on');
        }
      }); //Edit data child

      editResult02($(this)); //Delelte date child

      deleteResult02($(this));
    });
  });
}
$('.js-wishlist__icon input').prop('checked', 'false');
$('.js-wishlist__icon input').on('click', function (e) {
  e.stopPropagation();
});
$('.js-wishlist__icon').on('click', function () {
  var number__01 = parseInt($(this).closest('.js-wishlist').find('.js-wishlist_number').text());

  if ($(this).find('input').prop('checked')) {
    console.log($(this).find('input').prop('checked'));
    number__01 = number__01 + 1;
    console.log('test 000');
    $(this).closest('.js-wishlist').addClass('wishlist');
    $(this).closest('.js-wishlist').find('.js-wishlist_ttl').text('フォロー中');
    $(this).closest('.js-wishlist').find('.js-wishlist_number').text(number__01);
  } else {
    number__01 = number__01 - 1;
    $(this).closest('.js-wishlist').removeClass('wishlist');
    $(this).closest('.js-wishlist').find('.js-wishlist_ttl').text('フォローする');
    $(this).closest('.js-wishlist').find('.js-wishlist_number').text(number__01);
  }
});
$('.js-cancheck').on('click', function () {
  $(this).closest('table').find('td').removeClass('td-choose');
  $(this).addClass('td-choose');
}); // check input 02

{
  var _deleteResult = function _deleteResult(el) {
    el.find('.js-remove-result03').click(function (e) {
      e.preventDefault();
      $(this).closest('.quote-list__fee-remove03').css('display', 'none');
      $(this).closest('.quote-list__fee-remove03').prev().find('input').val('');
      $(this).closest('.quote-list__fee-remove03').prev().find('select').val('');
      $(this).parent().parent().parent().prev().removeClass('on');
      $(this).parent().parent().parent().parent().remove();
    });
  };

  var _editResult = function _editResult(el) {
    el.find('.js-edit-result03').click(function (e) {
      e.preventDefault();
      $(this).parent().parent().prev().css('display', 'none');
      $(this).parent().parent().parent().prev().removeClass('on');
      $(this).parent().parent().parent().prev().addClass('edit');
    });
  };

  $(".quote-list__fee-form03").hide();
  $(".quote-list__fee-remove03").hide();
  $('.js-add-form03').click(function (e) {
    e.preventDefault();
    $(this).next().show();
    var add_item = $(this).parent().next();
    add_item.clone().val('').insertAfter($(this));
    $(this).next().find('.quote-list__fee-form03').css('display', 'flex');
    $(this).next().find('.quote-list__fee-form03').removeClass('on');
    $(this).next().find('.quote-list__fee-remove03').hide();
    $('.quote-list__fee-ct03').each(function () {
      //Add data child
      $(this).find('.js-send-result03').click(function (e) {
        e.preventDefault();
        var descFrom = $(this).parent().find('.desc-form').val();
        var dayFrom = $(this).parent().find('.day-form').val();
        var hourFrom = $(this).parent().find('.hour-form').val();
        $(this).parent().next().find('#desc-form').html(descFrom);
        $(this).parent().next().find('#day-form').html(dayFrom);
        $(this).parent().next().find('#hour-form').html(hourFrom);

        if (descFrom.length != 0 && dayFrom.length != 0) {
          $(this).parent().next().css('display', 'flex');
          $(this).parent().next().find('.result-txt').css('display', 'block');
          $(this).parent().addClass('on');
        }
      }); //Edit data child

      _editResult($(this)); //Delelte date child


      _deleteResult($(this));
    });
  });
} //accordion page P030

$('.js-show-acc').click(function () {
  $(this).toggleClass('on');
  $(".js-ct-acc").slideToggle();
}); //check btn page P046

$('.js-ctinput').blur(function () {
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

  if (testEmail.test(this.value)) {
    $('.js-btn__able').removeClass('btn_entry--disabled');
  } else {
    $('.js-btn__able').addClass('btn_entry--disabled');
  }
});
$('.js-ctinput01').blur(function () {
  var pswd = $(this).val();

  if (pswd.length == 6 && pswd.match(/^\d+$/)) {
    $('.js-btn__able01').removeClass('btn_entry--disabled');
  } else {
    $('.js-btn__able01').addClass('btn_entry--disabled');
  }
});
$('.js-ctinput').keypress(function (e) {
  if (e.which == 13) {
    var testEmail01 = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if (testEmail01.test(this.value)) {
      return true;
    } else {
      return false;
    }
  }
});
$('.js-ctinput01').keypress(function (e) {
  if (e.which == 13) {
    var pswd = $(this).val();

    if (pswd.length == 6 && pswd.match(/^\d+$/)) {
      return true;
    } else {
      return false;
    }
  }
}); //check vale radio P030
//js check value checkbox show select

$('.js-check-value input[type=radio][name=transportation]').change(function () {
  if (this.value == 'シッター必須資格') {
    $('.js-check-form').removeClass('show');
    $('#シッター必須資格').addClass('show');
  } else if (this.value == '病児・産前産後必須資格') {
    $('.js-check-form').removeClass('show');
    $('#病児・産前産後必須資格').addClass('show');
  } else if (this.value == 'その他の保育関連資格') {
    $('.js-check-form').removeClass('show');
    $('#その他の保育関連資格').addClass('show');
  } else if (this.value == '家事代行関連資格') {
    $('.js-check-form').removeClass('show');
    $('#家事代行関連資格').addClass('show');
  }
}); //check vale radio P047

$(function () {
  if ($('.quote-list__item02').hasClass('is-open')) {
    $('.js-check-name').change(function () {
      var id = $(this).val();
      $('.quote-list__item02.is-open').find('.file-option .item').removeClass('show'); //$('.file-option .item').removeClass('show');

      $('.quote-list__item02.is-open').find('#' + id).addClass('show');
    });
  }
}); //Sub nav current location

var element = document.querySelector(".m-subnav__item.is-active"); // element.scrollIntoView({
// 	inline: "center",
// });
//Reset Form

$('#configreset').click(function () {
  $('#configform')[0].reset();
}); // {
// 	// var imgInp = '#imgInp';
// 	imgInp.onchange = evt => {
// 		const [file] = imgInp.files
// 		if (file) {
// 			blah.src = URL.createObjectURL(file)
// 		}
// 	}
// }

$('.js-close-notyfication').click(function () {
  $(this).parent().fadeOut();
});
$('.question-block').each(function () {
  var js_length = $(this).find('.js-showct li').length;

  if (js_length >= 4) {
    $(this).find('.js-showct li').each(function (index) {
      if (index >= 4) {
        $(this).hide();
      }
    });
  }
});
$('.js-showmore').on('click', function (e) {
  e.preventDefault();
  $(this).closest('.question-block').find('.js-showct li').show();
  $(this).closest('.c-al--c').remove();
}); // var imgInp = '.js_uploadfile';

$('.lb-file').delegate('.js_uploadfile', 'change', function (event) {
  $(this).closest('.lb-file').find('.js-imgfile').attr("src", URL.createObjectURL(event.target.files[0]));
  $(this).closest('.lb-file').addClass('setsize');
}); // var formmain = $('.request-form');
// var form = $('.checkbt');
// var button = $('.js-able');
// console.log( form.length);
// var n_check = 0;
// form.each(function(){
// 	$(this).on('change', function(){
// 		var isRequired = $(this)[0].checkValidity();
// 		if(isRequired){
// 			n_check = n_check + 1;
// 		}
// 		console.log(n_check);
// 		if (n_check >= form.length) {
// 			button.removeAttr('disabled');
// 		}
// 	});
//
// });

if ($('#id-form').length > 0) {
  var update = function update() {
    var isRequired = id_form.checkValidity();
    console.log(isRequired);

    if (isRequired) {
      button.disabled = false;
      button.style.opacity = 1;
      button.style.cursor = "pointer";
      button.style.pointerEvents = "auto";
      return;
    } else {
      button.disabled = true;
      button.style.opacity = 0.3;
      button.style.cursor = "none";
      button.style.pointerEvents = "none";
      return;
    }
  };

  var id_form = document.getElementById("id-form");
  var button = document.getElementById("button"); // id_form.addEventListener("input", update);
  // id_form.addEventListener("select", update);

  id_form.addEventListener("textarea", update);
  id_form.addEventListener("change", update);
} // 都道府県フォーム生成


$(function () {
  $.getJSON('/assets/json/pref_city.json', function (data) {
    for (var i = 1; i < 48; i++) {
      var code = ('00' + i).slice(-2);
      $('#select-pref').append('<option value="' + code + '">' + data[i - 1][code].pref + '</option>');
    }
  });
});
$('#select-pref').on('change', function () {
  $('#select-city option:nth-child(n+2)').remove();
  var select_pref = ('00' + $('#select-pref option:selected').val()).slice(-2);
  var key = Number(select_pref) - 1;
  $.getJSON('/assets/json/pref_city.json', function (data) {
    for (var i = 0; i < data[key][select_pref].city.length; i++) {
      $('#select-city').append('<option value="' + data[key][select_pref].city[i].id + '">' + data[key][select_pref].city[i].name + '</option>');
    }
  });
});
