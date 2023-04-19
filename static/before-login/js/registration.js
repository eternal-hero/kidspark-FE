$(function () {

    document_txt = [
        '運転免許証の住所が手書きの場合、名前が旧姓のままの場合は補助書類をご提出ください。',
        '健康保険証の住所の記載がない場合（手書き不可）は補助書類をご提出ください。',
        'マイナンバーの住所に相違がある場合は補助書類をご提出ください。',
        '住民基本台帳の住所に相違がある場合は補助書類をご提出ください。',
        '在留カードの住所に相違がある場合は補助書類をご提出ください。',
    ];

    $("input.datepicker").datepicker({
        dateFormat: 'yy/mm/dd',
    });

    $('select[name="identity_verification"]').on("change", function() {
        var val = $( "option:selected", this).val();
        $('.upload_block').removeClass('active');
        if(val != 0) {
            $('.upload_block').eq(val - 1).addClass('active');
        }
        $('#document_txt').text(document_txt[val  - 1]);
        if(val == 0 || val == 6) {
            $('#document').removeClass('active');
        } else {
            $('#document').addClass('active');
        }
    });
  
  

});