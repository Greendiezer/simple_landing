$(function () {
    $('.menu-acco__trigger').click(function (e) { 
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.menu-acco'),
            item = $this.closest('.menu-acco__item'),
            items = container.find('.menu-acco__item'),
            activeItem = items.filter('.menu-acco__item_active'),
            content = item.find('.menu-acco__content'),
            activeContent = activeItem.find('.menu-acco__content');
            
        if (!item.hasClass('menu-acco__item_active')) {

            items.removeClass('menu-acco__item_active');
            item.addClass('menu-acco__item_active');

            activeContent.animate({
                'width' : '0px'
            });

                content.animate({
                    'width' : '550px'
                })

        } else {

            item.removeClass('menu-acco__item_active');
            content.animate({
                'width' : '0px'
            });
        }
    });

    $(document).click(function (e){

        var $this = $(e.target);

        if (!$this.closest('.menu-acco').length) {
            $('.menu-acco__content').animate({
                'width' : '0px'
            });

            $('.menu-acco__item').removeClass('.menu-acco__item_active');    
        }
    });
});