$(function() {
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		on: {
		    init: function(){
		      //Swiper初始化了
		      	swiperAnimateCache(this); //隐藏动画元素
				swiperAnimate(this); //初始化完成开始动画
		    }, 
		    slideChangeTransitionStart: function(){
				if(this.activeIndex > 1){
					$(".tonav").removeClass("nav_none")
				}else{
					$(".tonav").addClass("nav_none")
				}
		  	},
		    slideChangeTransitionEnd: function(){
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
		    },
		},
		
	});
	
	
	$('.tonav').on('click', function() {
		mySwiper.slideTo(1, 0, true);
	})
	$('.toindex').on('click', function() {
		mySwiper.slideTo(0, 0, true);
	})
	$('.topp').on('click', function() {
		mySwiper.slideTo(2, 0, true);
	})
	$('.tocp').on('click', function() {
		mySwiper.slideTo(5, 0, true);
	})
	$('.tomd').on('click', function() {
		mySwiper.slideTo(10, 0, true);
	})
	$('.tosl').on('click', function() {
		mySwiper.slideTo(12, 0, true);
	})
	$('.tohz').on('click', function() {
		mySwiper.slideTo(13, 0, true);
	})
	$('.tofc').on('click', function() {
		mySwiper.slideTo(15, 0, true);
	})
	$('.toly').on('click', function() {
		mySwiper.slideTo(16, 0, true);
	})
})