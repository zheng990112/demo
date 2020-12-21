$(function() {
	jQuery(".al-nav_swiper .swiper-wrapper p").each(function(i){ jQuery(".al-nav_swiper .swiper-wrapper p").slice(i*6,i*6+6).wrapAll("<div class='swiper-slide'></div>");});
	
	var mySwiper = new Swiper('.al-nav_swiper', {
		initialSlide:$('.on').parent().parent().index(),
		pagination : '.swiper-pagination',
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		loop : true,
	});
})