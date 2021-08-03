$(document).ready(function(){	

	$('.mainTit p').addClass('on');

	$('.news').slick({
		slide: 'div',	
		infinite : true,
		slidesToShow : 1,	
		slidesToScroll : 1,	
		speed : 500,	
		autoplay : true,
		autoplaySpeed : 3000, 	
		arrows : false, 		
		vertical : true,
		draggable : false,	
	});

	
});