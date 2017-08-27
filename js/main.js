$(function(){

	var sections = $('.section');
	var display = $('.maincontent');
	var inScroll = false;

	var scrollToSection = function (sectionEq) {
		var position = 0;

		if (!inScroll){

			inScroll = true;

			position = (sections.eq(sectionEq).index() * -100) + '%';

			sections.eq(sectionEq).addClass('active').siblings().removeClass('active');

			display.css({
				'transform' : 'translate3d(0, ' + position + ' , 0)'
			});

			setTimeout(function () {
				inScroll = false;

				$('.fixed-menu__item').eq(sectionEq).addClass('active')
				.siblings().removeClass('active');
			}, 1200)
		}
		
	}

    $('.wrapper').on('wheel', function(e) {

    	var deltaY = e.originalEvent.deltaY;
    		activeSection = sections.filter('.active');
    		prevSection = activeSection.prev();
    		nextSection = activeSection.next();

    	if (deltaY > 0) {  // cскроллим вниз

    		if (nextSection.length) {
    			
    			scrollToSection(nextSection.index());
    		}

    	} 

    	if (deltaY < 0) {  //скроллим вверх

    		if (prevSection.length) {

    			scrollToSection(prevSection.index());
    		}
    	}  
    });

	$('.down-arrow').click(function (e) { 
		e.preventDefault();

		scrollToSection(1);
		
	});

	$('.fixed-menu__link, .nav__link, .order-link').click(function (e) { 
		e.preventDefault();

		var href = parseInt($(this).attr('href'));

		scrollToSection(href);
		
	});

	$(document).keydown(function (e) { 

		var deltaY = e.originalEvent.deltaY;
    		activeSection = sections.filter('.active');
    		prevSection = activeSection.prev();
    		nextSection = activeSection.next();

		switch (e.keyCode){
			case 40 : //листаем вниз
				if (nextSection.length) {
								
								scrollToSection(nextSection.index());
							}
			break;
			case 38 : //листаем вверх
				if (prevSection.length) {

					scrollToSection(prevSection.index());
				}
			break;
		}
		
	});
});

// $(function () {

//     $('.burger-slider').owlCarousel({
//         items : 1,
//         loop : true,
        
//     });


// });
