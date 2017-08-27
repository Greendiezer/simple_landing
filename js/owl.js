$(function () {

    var burgerOwl = $('.burger-slider').owlCarousel({
        items : 1,
        loop : true,

    });

    $('.burger-slider__btn_next').click(function(e){
        e.preventDefault();

        burgerOwl.trigger('next.owl.carousel', [1100]);
    });

    $('.burger-slider__btn_prev').click(function(e){
        e.preventDefault();

        burgerOwl.trigger('.prev.owl.carousel', [1100]);
    })

});