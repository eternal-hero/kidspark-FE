$(function () {
    let no = 0;
    $("#gallary_list .gallary_suBox_item").on("click", function() {
        //setTimeout(function(){$('#gallary').children('img').attr('src', '/familyPhoto/assets/img/gallary/gallary0' + no + '.jpg')}, 10);
        $('#gallary').children('img').css("opacity",'0');
        $('#gallary').children('img').css("display",'none');
        no = $(this).index() + 2;
        $('#gallary').children('img').attr('src', '/assets/img/gallary/gallary' + no + '.jpg');
        setTimeout(function(){$('#gallary').children('img').css("opacity",'1');}, 350);
        setTimeout(function(){$('#gallary').children('img').css("display",'block');}, 100);
    });
});