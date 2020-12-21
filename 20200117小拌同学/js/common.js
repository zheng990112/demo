$(function() {
	var mySwiper = new Swiper('.container', {
		direction: 'vertical',
		on: {
			init: function() {
				//Swiper初始化了
				//		      	swiperAnimateCache(this); //隐藏动画元素
				//				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionStart: function() {
				//				if(this.activeIndex == 1){
				//					$(".nav").addClass("nav_none")
				//				}else{
				//					$(".nav").removeClass("nav_none")
				//				}
				//				alert(this.activeIndex);
			},
			slideChangeTransitionEnd: function() {
				//				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
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
	
	
	$('.menu .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = true;
	$('.nav').on('click',function(){
		if(img_flag){
			$('.menu').animate({top: '0'},'10');
			$(".header .nav .img1").css({"display": "none"})
			$(".header .nav .img2").css({"display": "block"})
			img_flag = false;
		}else{
			$('.menu').animate({top: "-100%"},'10');
			$(".header .nav .img1").css({"display": "block"})
			$(".header .nav .img2").css({"display": "none"})
			$('.bg').hide();
			img_flag = true;
		}
	})
	$(".menu ul li .item a").on('click',function(){
		location.reload();
	})
	

	$('.menu-item>a').click(function() {
        let $er_nav = $(this).siblings('.item');
        if ($er_nav.length) {
            if ($er_nav.css('display') === 'none') {
                $('.item').slideUp();
                $er_nav.slideDown();
            } else {
                $er_nav.slideUp();
                // $er_nav.css('display', 'none')
            }
            // return false;
        }
    })
    

})