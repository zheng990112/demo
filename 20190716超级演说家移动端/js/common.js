$(function() {
	var firstSwiper = new Swiper('.swiper-container', {
		autoplay: 3000,
		speed: 300,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
//	console.log(window.location.search.substring(1));

	var search = window.location.search.substring(1);

	var mySwiper = new Swiper('.wrap-container', {
		initialSlide: search != "" ? search : 0,
		direction: 'vertical',
		on: {
			init: function() {
				//Swiper初始化了
				//		      	swiperAnimateCache(this); //隐藏动画元素
				//				swiperAnimate(this); //初始化完成开始动画
				if(this.activeIndex == 0 || this.activeIndex == 1) {
					$("nav").addClass("none");
				} else {
					$("nav").removeClass("none")
				}
			},

			slideChangeTransitionStart: function() {
				if(this.activeIndex != 0) {
					$(".index-header").addClass("none");
				} else {
					$(".index-header").removeClass("none");
				}
				if(this.activeIndex == 0 || this.activeIndex == 1) {
					$("header").addClass("none");
					$("nav").addClass("none");
					$("footer").addClass("none");
				} else {
					$("header").removeClass("none")
					$("nav").removeClass("none")
					$("footer").removeClass("none")
				};

				$("nav .nav-item").eq(this.activeIndex - 2).addClass("active").siblings().removeClass("active");

				if(this.activeIndex == 2) {
					//					$(this).addClass("active").siblings().removeClass("active");
					//					$(".toxy").addClass("active");
				}
				if(this.activeIndex == 3) {}

			},
			slideChangeTransitionEnd: function() {
				$("nav .nav-item").removeClass("avtive");
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

	$('.toindex').on('click', function() {
		mySwiper.slideTo(0, 0, true);
	})

	$('.toxy').on('click', function() {
		mySwiper.slideTo(2, 0, true);
		$(this).addClass("active").siblings().removeClass("active");
	})
	$('.tokc').on('click', function() {
		mySwiper.slideTo(3, 0, true);
		$(this).addClass("active").siblings().removeClass("active");
	})
	$('.tohz').on('click', function() {
		mySwiper.slideTo(4, 0, true);
		$(this).addClass("active").siblings().removeClass("active");
	})
	$('.topp').on('click', function() {
		mySwiper.slideTo(5, 0, true);
		$(this).addClass("active").siblings().removeClass("active");
	})
	$('.tolx').on('click', function() {
		mySwiper.slideTo(6, 0, true);
		$(this).addClass("active").siblings().removeClass("active");
	})

	$(".menu-list ul li").click(function() {
		var index = $(this).index();
		$("nav .nav-item").eq(index).addClass("active").siblings().removeClass("active");
	})

	$(".menus .menu").click(function() {
		var index = $(this).index();
		$("nav .nav-item").eq(index).addClass("active").siblings().removeClass("active");
	})

	//			背景音乐

	function autoPlayAudio() {
		wx.config({
			// 配置信息, 即使不正确也能使用 wx.ready
			debug: false,
			appId: '',
			timestamp: 1,
			nonceStr: '',
			signature: '',
			jsApiList: []
		});
		wx.ready(function() {
			var globalAudio = document.getElementById("media");
			globalAudio.play();
		});
	};
	// 解决ios音乐不自动播放的问题
	autoPlayAudio();

	var btnaudio = document.getElementById('media');
	btnaudio.play();

	var bul = 1;
	$('.icon-play').on('click', function() {
		if(bul) {
			btnaudio.pause();
			$('.icon-play').removeClass('active');
			bul = 0;
		} else {
			btnaudio.play();
			$('.icon-play').addClass('active');
			bul = 1;
		}
	})

})