export const showScheduleMixin = {
  methods: {
    showSchedule() {
      // P061
      $('.js-m-schedule td input[type="radio"]').on("click", function(e) {
        $('.m-schedule__time').slideDown();
        const year = $('.js-data').data('year');
        const month = $('.js-data').data('month');
        const day = $(this).val();
        const weekindex = $(this).parents('td').index();
        const dayOfWeekStrJP = [ "日", "月", "火", "水", "木", "金", "土" ] ;
        $('.m-schedule__ttltime').text(`${month}月${day}日(${dayOfWeekStrJP[weekindex]})`);
        $('.m-schedule__end_ttl').text(`${year}年${month}月${day}日(${dayOfWeekStrJP[weekindex]})`);
        $('.form_part_date_input').val(`${year}-${("0"+(month)).slice(-2)}-${("0"+day).slice(-2)}`);
        $('.btn_style_01').prop( 'disabled', true )
      });
      $('.js-m-schedule__time td input[type="radio"]').on("click", function(e) {
        const time = $(this).val();
        const hour = time.slice(0, 2);
        const min = time.slice(-2);
        $('select[name="m-schedule__start-hour"]').val(hour);
        $('select[name="m-schedule__start-min"]').val(min);
        $('select[name="m-schedule__end-hour"]').val(hour);
        $('select[name="m-schedule__end-min"]').val(min);
        $('.m-schedule__end_total span').text("合計　　0時間");

      });
      $('select[name="m-schedule__end-hour"],select[name="m-schedule__end-min"],input[name="m-schedule__end-day"]').on("change", function(e) {
        $('input[name="m-schedule__end-day"]').val();
        $('input[name="m-schedule__end-hour"]').val();

        let date1 = new Date(`${$('input[name="m-schedule__start-day"]').val()} ${$('select[name="m-schedule__start-hour"]').val()}:${$('select[name="m-schedule__start-min"]').val()}:00`);
        let date2= new Date(`${$('input[name="m-schedule__end-day"]').val()} ${$('select[name="m-schedule__end-hour"]').val()}:${$('select[name="m-schedule__end-min"]').val()}:00`);

        let diff = date2.getTime() - date1.getTime();
        if(diff > 1) {
          $('.m-schedule__end_total span').text(`合計　　${diff / (60*60*1000)}時間`);
        } else {
          $('.m-schedule__end_total span').text("正しい終了時間を設定してください")
        }

      });
    }
  }
};
