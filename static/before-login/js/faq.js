$(function () {

        $(".question").on("click", function() {
            $(this).next().slideToggle();
        });

});