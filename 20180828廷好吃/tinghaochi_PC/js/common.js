$(function() {
	// 轮播图
	$('.slider').bscSlider({
		autoplay: true,
		navigation: true,
		duration: 5000,
		effect: 15,
		effect_speed: 750,
		easing: 'swing',
		height: 535
	});
	// 二级导航
	$('.nav .one-leval-nav>li').mouseover(function(event) {
		var index = $(this).index() - 1;
		if (index < 0 ) {
			return false;
		}
		var width = $(this).find('.two-leval-nav li').length * 110;
		$(this).find('.two-leval-nav').css({
			zIndex: 1000,
			width: width
		}).show();
		$('.two-leval-nav .bg .bg-center').css('width', width - 80);
		$('.two-leval-nav ul').hide().eq(index).css({
			position: 'relative',
			zIndex: '1001'
		}).show();
	}).mouseout(function(event) {
		$('.two-leval-nav').hide();
		$('.two-leval-nav>ul').hide();
	});
	
	// add
	$('.two-leval-nav li.active').parents('li').addClass('active')
	
			
//	返回顶部
	var w_h = $(window).height();
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
    	if(scrollTop > w_h*1){
    		$('.backTop').fadeIn();
    		$('.backTop').css({'bottom':'200px'})
    	}else{
    		$('.backTop').fadeOut()
    	}
    });
	
	$('.backTop').click(function(){
		var scrollTop = $(window).scrollTop();
		$("html,body").animate({ scrollTop: 0 }, 600);
	})
	
});