$(function() {
    var mySwiper = new Swiper('.container', {
		direction: 'vertical',
		on: {
		    init: function(){
		      //Swiper初始化了
		      	swiperAnimateCache(this); //隐藏动画元素
				swiperAnimate(this); //初始化完成开始动画
		    }, 
		    slideChangeTransitionStart: function(){
//				if(this.activeIndex == 1){
//					$(".nav").addClass("nav_none")
//				}else{
//					$(".nav").removeClass("nav_none")
//				}
//				alert(this.activeIndex);

				var index = this.activeIndex;
		    	$(".header .nav ul li").eq(index - 1).addClass("active").siblings().removeClass("active");
				if(index == 0){
		    		$(".header .nav ul li").removeClass("active");
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
	
	
	$('.toindex').on('click', function() {
		mySwiper.slideTo(0, 0, true);
	})
	$('.topp').on('click', function() {
		mySwiper.slideTo(1, 0, true);
	})
	$('.tocp').on('click', function() {
		mySwiper.slideTo(2, 0, true);
	})
	$('.tomd').on('click', function() {
		mySwiper.slideTo(3, 0, true);
	})
	$('.toqy').on('click', function() {
		mySwiper.slideTo(4, 0, true);
	})
	$('.tohz').on('click', function() {
		mySwiper.slideTo(5, 0, true);
	})
	$('.tofc').on('click', function() {
		mySwiper.slideTo(6, 0, true);
	})
	$('.tonews').on('click', function() {
		mySwiper.slideTo(7, 0, true);
	})
	$('.toly').on('click', function() {
		mySwiper.slideTo(8, 0, true);
	})
    
    
    
    var swiper = new Swiper('.banner',{
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    
	
		
		


    
})