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
					$(".nav").addClass("nav_none")
				}else{
					$(".nav").removeClass("nav_none")
				}
//				alert(this.activeIndex);
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
	
	
	
	$('.nav').on('click', function() {
		mySwiper.slideTo(1, 0, true);
	})
	$('#index').on('click', function() {
		mySwiper.slideTo(0, 0, true);
		console.log("index")
	})
	$('#jx').on('click', function() {
		mySwiper.slideTo(2, 0, true);
	})
	$('#cp').on('click', function() {
		mySwiper.slideTo(7, 0, true);
	})
































	
	$(".play").click(function() {
		var player = $(this).next()[0];
		if(player.pause) {
			player.play();
			$(this).prev().remove();
			$(this).css({
				"display": "none"
			});
			$(this).next().attr("controls", "controls");
		} else {
			player.pause();
			$(this).css({
				"display": "block"
			});
		}
	});
	
})