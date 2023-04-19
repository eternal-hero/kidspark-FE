export const loadMoreMixin = {
  methods: {
    initLoadMore() {
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
    }
  }
};
