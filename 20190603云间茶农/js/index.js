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
				if(this.activeIndex == 1){
					$(".nav").css({"display":"none"})
				}else{
					$(".nav").css({"display":"block"})
				}
		  	},
		    slideChangeTransitionEnd: function(){
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
		    },
		},
		
	});
	
	var startScroll, touchStart, touchCurrent;
	mySwiper.slides.on('touchstart', function(e) {
		startScroll = this.scrollTop;
		touchStart = e.targetTouches[0].pageY;
	}, true);
	mySwiper.slides.on('touchmove', function(e) {
		touchCurrent = e.targetTouches[0].pageY;
		var touchesDiff = touchCurrent - touchStart;
		var slide = this;
		var onlyScrolling =
			(slide.scrollHeight > slide.offsetHeight) &&
			(
				(touchesDiff < 0 && startScroll === 0) ||
				(touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight)) ||
				(startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight))
			);
		if(onlyScrolling) {
			e.stopPropagation();
		}
	}, true);
	

	$('.toindex').on('click', function() {mySwiper.slideTo(0,0, true);})
	$('.tonav').on('click', function() {mySwiper.slideTo(1,0, true);})
	$('.toys').on('click', function() {mySwiper.slideTo(2,0, true);})
	$('.topp').on('click', function() {mySwiper.slideTo(3,0, true);})
	$('.tosj').on('click', function() {mySwiper.slideTo(4,0, true);})
	$('.tocp').on('click', function() {mySwiper.slideTo(5,0, true);})
	$('.tosl').on('click', function() {mySwiper.slideTo(6,0, true);})
	$('.tohz').on('click', function() {mySwiper.slideTo(7,0, true);})
	$('.tofc').on('click', function() {mySwiper.slideTo(8,0, true);})
	$('.tonews').on('click', function() {mySwiper.slideTo(9,0, true);})
	$('.toly').on('click', function() {mySwiper.slideTo(10,0, true);})
})