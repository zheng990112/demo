$(function() {
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		lazy: true,
		on: {
		    init: function(){
		      //Swiper初始化了
		      	swiperAnimateCache(this); //隐藏动画元素
				swiperAnimate(this); //初始化完成开始动画
		    }, 
		    slideChangeTransitionStart: function(){
//		    	alert(this.activeIndex);
				if(this.activeIndex == 0){
					$(".top-nav").addClass("none")
				}else{
					$(".top-nav").removeClass("none")
				}
				
		  	},
		    slideChangeTransitionEnd: function(){
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
		    },
		},
		
	});
	
	mySwiper.lazy.load();
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
	

	$('.to-nav').on('click', function() {
		mySwiper.slideTo(0, 0, true);
	})
	$('.to-pp').on('click', function() {
		mySwiper.slideTo(1, 0, true);
	})
	$('.to-cp').on('click', function() {
		mySwiper.slideTo(2, 0, true);
	})
	
	$('.to-dp').on('click', function() {
		mySwiper.slideTo(3, 0, true);
	})
	$('.to-xw').on('click', function() {
		mySwiper.slideTo(4, 0, true);
	})
	$('.to-hz').on('click', function() {
		mySwiper.slideTo(5, 0, true);
	})
	$('.to-lx').on('click', function() {
		mySwiper.slideTo(6, 0, true);
	})
	$('.to-index').on('click', function() {
		mySwiper.slideTo(0, 0, true);
	})




	
})