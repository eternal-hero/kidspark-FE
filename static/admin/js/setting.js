"use strict";

//Js for type input
var input_date = $('input[type="date"]');
input_date.change(function () {
  if ($(this).val() !== '') {
    $(this).addClass('focus');
  } else {
    $(this).removeClass('focus');
  }
});
var select = $('select');
select.change(function () {
  if ($(this).val() !== '') {
    $(this).addClass('focus');
  } else {
    $(this).removeClass('focus');
  }
}); //update today datepicker

$(document).ready(function () {
  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear() + "-" + month + "-" + day;
  $('#setDate').val(today);
}); //js click show check search page 77

$('.js-show-search .form-narrow__search').click(function () {
  $('.js-box-search').slideToggle();
}); //js check value checkbox show select

$('.js-check-value input[type=radio][name=transportation]').change(function () {
  if (this.value == '本人確認書類') {
    $('.add-info__select').removeClass('show');
    $('#本人確認書類').addClass('show');
  } else if (this.value == 'シッター必須資格') {
    $('.add-info__select').removeClass('show');
    $('#シッター必須資格').addClass('show');
  } else if (this.value == '病児・産前産後必須資格') {
    $('.add-info__select').removeClass('show');
    $('#病児・産前産後必須資格').addClass('show');
  } else if (this.value == 'その他の保育関連資格') {
    $('.add-info__select').removeClass('show');
    $('#その他の保育関連資格').addClass('show');
  } else if (this.value == '家事代行関連資格') {
    $('.add-info__select').removeClass('show');
    $('#家事代行関連資格').addClass('show');
  }
});
$('.js-select-change select').change(function () {
  if ($(this).val() == "その他") {
    $(this).parent().next().addClass('show');
  } else {
    $(this).parent().next().removeClass('show');
  }
}); //page 22-1 -> 22-4

$('#select-value').on('change', function (e) {
  var optionSelected = $("option:selected", this);
  var valueSelected = this.value;

  if (valueSelected == 'ベビーシッター') {
    $('.item-form').removeClass('show');
    $('#ベビーシッター').addClass('show');
  } else if (valueSelected == '家事代行') {
    $('.item-form').removeClass('show');
    $('#家事代行').addClass('show');
  } else if (valueSelected == '更新時') {
    $('.item-form').removeClass('show');
    $('#更新時').addClass('show');
  } else if (valueSelected == 'その他') {
    $('.item-form').removeClass('show');
    $('#その他').addClass('show');
  }
}); //js for page 39-1->> 37-7

$('.js-check-name').change(function () {
  var id = $(this).val();
  $('.file-option .item').removeClass('show');
  $('#' + id).addClass('show');
}); //end js for page 39-1->> 37-7

$('.report-block__gallery-control .btn_style_03').click(function () {
  $(this).closest('li').remove();
}); //js for active sister setting

$(function () {
  $(".form_part_close").click(function () {
    $(this).parent().addClass('is-active');
    $(this).closest('.table-add-option').find('tr').addClass('show');
    $(".table-hide").addClass('on');
  });
  $(".form_part_works").click(function () {
    $(this).parent().removeClass('is-active');
    $(this).closest('.table-add-option').find('tr').removeClass('show');
    $(".table-hide").removeClass('on');
  });

  function deleteResult(el) {
    el.find('.js-remove-result').click(function (e) {
      e.preventDefault();
      $(this).closest('.add-option__result').css('display', 'none');
      $(this).closest('.add-option__result').prev().find('input').val('');
      $(this).closest('.add-option__result').prev().find('select').val('');
    });
  }

  function editResult(el) {
    el.find('.js-edit-result').click(function (e) {
      e.preventDefault();
      $(this).parent().prev().css('display', 'none');
      $(this).closest('.add-option__result').prev().addClass('is-active');
    });
  }

  $(".add-option__wrapper").hide();
  $(".add-option__result").hide();
  $(".js-add-option").click(function (e) {
    e.preventDefault();
    var add_item = $(this).parent().next();
    add_item.clone().val('').insertAfter($(this));
    $(this).next().find('.add-option__wrapper').css('display', 'flex');
    $('.add-option__item').each(function () {
      var id_item = $(this).closest('.form-edit__status').attr('id');
      console.log(id_item); //Add data child

      $(this).find('.js-send-result').click(function (e) {
        e.preventDefault();
        var qty = $(this).parent().find('.qty').val();
        var price = $(this).parent().find('.price').val();
        $(this).parent().next().find('#qty').html(qty);
        $(this).parent().next().find('#price').html(price);
        var hour_from = $(this).parent().find('.hour-from').val();
        var hour_to = $(this).parent().find('.hour-to').val();
        $(this).parent().next().find('#hour-from').html(hour_from);
        $(this).parent().next().find('#hour-to').html(hour_to);
        var option = $(this).parent().find('.option').val();
        var hour = $(this).parent().find('.hour').val();
        $(this).parent().next().find('#option').html(option);
        $(this).parent().next().find('#hour-other').html(hour);

        if (id_item === 'child') {
          if (qty.length != 0 && price.length != 0) {
            $(this).parent().next().css('display', 'flex');
            $(this).parent().next().find('.add-option__result-txt').css('display', 'block');
          }
        } else if (id_item == 'hour_day') {
          if (hour_from.length != 0 && price.length != 0 && hour_to.length != 0) {
            $(this).parent().next().css('display', 'flex');
            $(this).parent().next().find('.add-option__result-txt').css('display', 'block');
          }
        } else if (id_item === 'other') {
          if (price.length != 0 && option.length != 0 && hour.length != 0) {
            $(this).parent().next().css('display', 'flex');
            $(this).parent().next().find('.add-option__result-txt').css('display', 'block');
          }
        } else if (id_item === 'prenatal') {}
      }); //Edit data child

      editResult($(this)); // $(this).find('.js-edit-result').click(function (e) {
      // 	e.preventDefault();
      // 	$(this).parent().prev().css('display', 'none');
      // 	$(this).closest('.add-option__result').prev().addClass('is-active');
      // })
      //Delelte date child

      deleteResult($(this)); // $(this).find('.js-remove-result').click(function (e) {
      // 	e.preventDefault();
      // 	$(this).closest('.add-option__result').css('display', 'none');
      // 	$(this).closest('.add-option__result').prev().find('input').val('');
      // 	$(this).closest('.add-option__result').prev().find('select').val('');
      // })
    });
  }); //js for Page T074

  $('#category').change(function () {
    var cat_name = $(this).val();
    var lst_option = $('.list-option');

    if (cat_name == "ユーザーへのお知らせ") {
      lst_option.find('.list-option__item').hide();
      lst_option.find('.box-option-user').show();
    } else if (cat_name == "個人へのお知らせ") {
      lst_option.find('.list-option__item').hide();
      lst_option.find('.box-option-personal').show();
    } else if (cat_name == "全員へのお知らせ") {
      lst_option.find('.list-option__item').hide();
      lst_option.find('.box-option-all').show();
    } else {
      lst_option.find('.list-option__item').hide();
      lst_option.find('.box-option-other').show();
    }
  });
  $("#option-name").focus(function () {
    $(this).parent().next().slideDown();
  });
  $('.close').click(function () {
    $(this).parent().hide();
  }); // $(document).mouseup(function (e) {
  // 	if ($(e.target).closest(".box-option-personal__wrapper").length === 0) {
  // 		$(".box-option-personal__ct").hide();
  // 	}
  // });
  //End js for Page T074
  //js for tooltips 入力例
  // $('.form-edit__card').slideUp();

  $('.js-tooltip-02').click(function () {
    $(this).closest('.has-card').next().find('.form-edit__card').slideDown();
  });
  $('.js-close-tooltip').click(function (e) {
    e.preventDefault();
    $(this).parent().slideUp();
  });
  $('.js-tooltip-03').click(function () {
    $('.form-edit__card').slideDown();
  });
  $('input:radio[name="condition"]').change(function () {
    if ($(this).val() == 'あり') {
      $(this).closest('.box-condition').addClass('show');
    } else {
      $(this).closest('.box-condition').removeClass('show');
    }
  });
});
$(function () {
  // button
  var btn_clone = $('.js-add-report'); // 追加ボタン

  var btn_remove_file = $('.js-move-files');
  var btn_remove_all = $('.js-move-all'); // clone

  btn_clone.click(function (e) {
    e.preventDefault();
    var add_form = $('.add-form__item').last(); // 最後尾にあるinput;

    add_form.clone().val('').insertAfter(add_form);
    $('.add-form__item').last().addClass('add');

    if ($('.add-form__item').length >= 2) {
      $(".add-form__ct--remove").css('display', 'flex'); // inputが2つ以上あるときに削除ボタンを表示
    } // remove all


    var btn_remove_all = $('.js-move-all'); // 削除ボタン

    btn_remove_all.click(function (e) {
      e.preventDefault();
      $(this).closest('.add-form__item').remove();

      if ($('.add-form__item').length < 2) {
        $(".add-form__ct--remove").hide(); // inputが2つ未満のときに削除ボタンを非表示
      }
    }); // remove files upload

    var btn_remove_file = $('.js-move-files'); // 削除ボタン

    btn_remove_file.click(function (e) {
      e.preventDefault();
      $(this).closest('.add-form__item').find('.file').val('');
    });
  });
  btn_remove_all.click(function (e) {
    e.preventDefault();
    $(this).closest('.add-form__item').remove();

    if ($('.add-form__item').length < 2) {
      $(".add-form__ct--remove").hide(); // inputが2つ未満のときに削除ボタンを非表示
    }
  }); // remove files upload

  btn_remove_file.click(function (e) {
    e.preventDefault();
    $(this).closest('.add-form__item').find('.file').val('');
  });
});
$(function () {
  // button
  var btn_add_child = $('.js-add-child'); // 追加ボタン

  var btn_remove_child = $('.js-move-child'); // clone

  btn_add_child.click(function (e) {
    e.preventDefault();
    var add_form = $('.form-edit__table').last(); // 最後尾にあるinput;

    add_form.clone().val('').insertAfter(add_form);

    if ($('.form-edit__table').length >= 2) {
      $(".move-child").show(); // inputが2つ以上あるときに削除ボタンを表示
    } // remove


    var btn_remove_child = $('.js-move-child'); // 削除ボタン

    btn_remove_child.click(function (e) {
      e.preventDefault();
      $(this).closest('.form-edit__table').remove();

      if ($('.form-edit__table').length < 2) {
        $(".move-child").hide(); // inputが2つ未満のときに削除ボタンを非表示
      }
    });
    $('input:radio[name="condition"]').change(function () {
      if ($(this).val() == 'あり') {
        $(this).closest('.box-condition').addClass('show');
      } else {
        $(this).closest('.box-condition').removeClass('show');
      }
    });
  });
  btn_remove_child.click(function (e) {
    e.preventDefault();
    $(this).closest('.form-edit__table').remove();

    if ($('.form-edit__table').length < 2) {
      $(".move-child").hide(); // inputが2つ未満のときに削除ボタンを非表示
    }
  }); //js add form for page T062

  var btn_add_todo = $('.js-add-todo'); // 追加ボタン

  btn_add_todo.click(function (e) {
    e.preventDefault();
    var add_form_todo = $('.todolist__form').last(); // 最後尾にあるinput;

    add_form_todo.clone().val('').insertAfter(add_form_todo);
  });
});
tippy('.js-tooltip'); //accordion

$('.support-ct__table-ttl').on('click', function () {
  $(this).toggleClass('support-ct__table-ttl--off');
  $(this).next().children('.support-ct__table-accordion').slideToggle();
}); // Smooth Scroll

$(window).on('load', function () {
  var headerHeight = $("#main-header").outerHeight();
  var urlHash = location.hash;

  if (urlHash) {
    var position = $(urlHash).offset().top - headerHeight;
    $('html, body').animate({
      scrollTop: position
    }, 0);
  }

  $('.js-scroll').click(function () {
    var href = $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({
      scrollTop: position
    }, 500);
  });
}); //popup M003

$(function () {
  $('.js-popup').on('click', function () {
    $('.popup-main').addClass('open');
  });
  $('.popup-main .popup-block__close').on('click', function () {
    $(this).closest('.popup-main').toggleClass('open');
    $(this).closest('.popup-main02').toggleClass('open');
  });
}); //popup M004

$(function ($) {
  $('.link-popup a[href^="#"]').click(function (e) {
    e.preventDefault();
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.fadeIn();
    $(".popup-main02").fadeIn();
    return false;
  });
  $(".popup-main02 .popup-block__close").click(function () {
    $(".popup-main02").fadeOut();
    $(".popup-item").fadeOut();
  });
  $("html").click(function () {
    $(".popup-main02").fadeOut();
    $(".popup-item").fadeOut();
  });
  $(".popup-item").click(function (e) {
    e.stopPropagation();
  });
}); //Add recruiment

$(function () {
  // button
  var btn_clone = $('.js-add-recruitment'); // 追加ボタン
  // clone

  btn_clone.click(function (e) {
    e.preventDefault();
    var add_form = $('.recruitment-form__add').last(); // 最後尾にあるinput;

    add_form.clone().val('').insertAfter(add_form);
    $('.recruitment-form__add').last().addClass('add');
    $('.add .reset-form').last()[0].reset();
  });
}); //Remove recruitment

$(document).on('click', '.js-remove-recruitment', function () {
  $(this).parent().parent().parent().parent().slideToggle();
  $(this).parent().parent().parent().parent().removeClass('add');
}); //Add profile

$(function () {
  // button
  var btn_clone = $('.js-add-profile'); // 追加ボタン
  // clone

  btn_clone.click(function (e) {
    e.preventDefault();
    var add_form = $('.profile-form__add').last(); // 最後尾にあるinput;

    add_form.clone().val('').insertAfter(add_form);
    $('.profile-form__add').last().addClass('add');
  });
}); //Remove profile

$(document).on('click', '.js-remove-profile', function () {
  $(this).parent().parent().parent().slideToggle();
  $(this).parent().parent().parent().removeClass('add');
}); //Textarea add remove

$('.js-reminder .btn_style_02').on('click', function () {
  $('.js-reminder').addClass('add');
});
$('.js-reminder .btn_style_01').on('click', function () {
  $('.js-reminder').removeClass('add');
});
$('.js-sales .btn_style_02').on('click', function () {
  $('.js-sales').addClass('add');
});
$('.js-sales .btn_style_01').on('click', function () {
  $('.js-sales').removeClass('add');
});
$(function () {
  //「全て選択」のチェックボックス
  var checkAll = document.getElementById("checkAll"); //「全て選択」以外のチェックボックス

  var el = document.getElementsByClassName("checks"); //全てにチェックを付ける・外す

  var funcCheckAll = function funcCheckAll(bool) {
    for (var i = 0; i < el.length; i++) {
      el[i].checked = bool;
    }
  }; //「checks」のclassを持つ要素のチェック状態で「全て選択」のチェックをON/OFFする


  var funcCheck = function funcCheck() {
    var count = 0;

    for (var i = 0; i < el.length; i++) {
      if (el[i].checked) {
        count += 1;
      }
    }

    if (el.length === count) {
      checkAll.checked = true;
    } else {
      checkAll.checked = false;
    }
  }; //「全て選択」のチェックボックスをクリックした時


  checkAll.addEventListener("click", function () {
    funcCheckAll(checkAll.checked);
  }, false); //「全て選択」以外のチェックボックスをクリックした時

  for (var i = 0; i < el.length; i++) {
    el[i].addEventListener("click", funcCheck, false);
  }
}); //tab menu

$(".js-tab .menu-tab__list-item").click(function () {
  var var_data = $(this).attr("data-tab");
  $(".js-tab .menu-tab__list-item").removeClass('active');
  $(this).addClass('active');
  $(".menu-tab__content .menu-tab__content-tab").removeClass('active');
  $("." + var_data + "").addClass('active');
}); //check value select option page T010

$('#dropDownId').on('change', function (e) {
  var optionSelected = $("option:selected", this);
  var valueSelected = this.value;

  if (valueSelected == 'シッティング風景動画') {
    $('.support-ct__form-desc').addClass('on');
  } else if (valueSelected == '家事代行風景写真') {
    $('.support-ct__form-img').addClass('on');
  } else if (valueSelected == '家事代行風景動画') {
    $('.support-ct__form-desc').addClass('on');
    $('.support-ct__form-img').addClass('on');
  } else {
    $('.support-ct__form-desc').removeClass('on');
    $('.support-ct__form-img').removeClass('on');
  }
});
$('input[type=radio][name=venue]').change(function () {
  if (this.value == '会場') {
    $('.js-check-radio').addClass('on');
    $('.js-lable').addClass('on');
  } else {
    $('.js-check-radio').removeClass('on');
    $('.js-lable').removeClass('on');
  }
});
$('#form-cate').on('change', function (e) {
  var optionSelected = $("option:selected", this);
  var valueSelected = this.value;

  if (valueSelected == '資料') {
    $('.looksort_table_mp4').addClass('on');
    $('.looksort_table_pdf').addClass('on');
  } else {
    $('.looksort_table_mp4').removeClass('on');
    $('.looksort_table_pdf').removeClass('on');
  }
});
$('#setDate').datepicker({
  defaultDate: yourDate
});
$("#datepicker").datepicker({
  dateFormat: "yy/mm/dd"
}); //Remove application

$('.application-list .application-list__item').on('click', function () {
  $(this).addClass('close');
});
$('.application-list .remove').on('click', function () {
  $('.application-list').addClass('remove');
}); //Reset Form

$('#configreset').click(function () {
  $('#configform')[0].reset();
});