$(function () {

    $('.review__open').fancybox({
        type : 'inline',
        mzxWidth : 460,
        fitToVieW : false,
        padding : 0,
        closeBtn : false
    });

    $('.full-review__close').click(function(e){
        e.preventDefault();

        $.fancybox.close();
    });
});