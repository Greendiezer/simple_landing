$(function () {

    $('#order-form').submit(function (e) { 
        e.preventDefault();
        
        var form = $(this);
            formData = form.serialize();


        $.ajax({
            url : '../mail.php',
            type : 'POST',
            data : formData,
            success: function (data) {
                if (data.status) {
                    $.fancybox.open([
                        {href : '#success'}
                    ],{
                        type : 'inline',
                        maxWidth: 250,
                        fitToView: false,
                        padding: 0,
                        closeBtn : false
                    })
                } else {
                    $.fancybox.open([
                        {href : '#error'}
                    ],{
                        type : 'inline',
                        maxWidth: 250,
                        fitToView: false,
                        padding: 0,
                        closeBtn : false
                    })
                }
            }
        })
    });

    $('.status-popup__close').click(function (e) { 
        e.preventDefault();
        
        $.fancybox.close();
    });
});