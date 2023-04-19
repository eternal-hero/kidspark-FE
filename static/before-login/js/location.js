$(function () {
    let no = 0;
    let height = 0;
    let text = "";
    $("#gallary_list li").on("click", function() {
        //setTimeout(function(){$('#gallary').children('img').attr('src', '/familyPhoto/assets/img/gallary/gallary0' + no + '.jpg')}, 10);
        height = $('#gallary').children('img').height();
        $('#gallary').height(height);
        $('#gallary').children('img').css("opacity",'0');
        $('#gallary').children('img').css("display",'none');

        no = $(this).index() + 1;
        text = $(this).find('figcaption').text();

        $('#gallary').children('img').attr('src', '/assets/img/gallary/gallary' + no + '.jpg');
        setTimeout(function(){$('#gallary').children('img').css("opacity",'1');}, 350);
        setTimeout(function(){$('#gallary').children('img').css("display",'block');}, 100);
        setTimeout(function(){$('#gallary').height("auto");}, 350);
        $('#gallary figcaption').text(text);

    });
});