$(function() {
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
//		on: {
//		    init: function(){
//		      //Swiper初始化了
//		      	swiperAnimateCache(this); //隐藏动画元素
//				swiperAnimate(this); //初始化完成开始动画
//		    }, 
//		    slideChangeTransitionStart: function(){
//				if(this.activeIndex == 1){
//					$(".nav").addClass("nav_none")
//				}else{
//					$(".nav").removeClass("nav_none")
//				}
////				alert(this.activeIndex);
//		  	},
//		    slideChangeTransitionEnd: function(){
//				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
//		    },
//		},
//		
	});
	
//	var startScroll, touchStart, touchCurrent;
//	mySwiper.slides.on('touchstart', function(e) {
//		startScroll = this.scrollTop;
//		touchStart = e.targetTouches[0].pageY;
//	}, true);
//	mySwiper.slides.on('touchmove', function(e) {
//		touchCurrent = e.targetTouches[0].pageY;
//		var touchesDiff = touchCurrent - touchStart;
//		var slide = this;
//		var onlyScrolling =
//			(slide.scrollHeight > slide.offsetHeight) &&
//			(
//				(touchesDiff < 0 && startScroll === 0) ||
//				(touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight)) ||
//				(startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight))
//			);
//		if(onlyScrolling) {
//			e.stopPropagation();
//		}
//	}, true);
	

//	$('.nav').on('click', function() {
//		mySwiper.slideTo(1, 0, true);
//	})
//	
//	$('.nav1').on('click', function() {
//		mySwiper.slideTo(2, 0, true);
//	})
//	$('.nav2').on('click', function() {
//		mySwiper.slideTo(3, 0, true);
//	})
//	$('.nav3').on('click', function() {
//		mySwiper.slideTo(4, 0, true);
//	})
//	$('.nav4').on('click', function() {
//		mySwiper.slideTo(5, 0, true);
//	})
//	$('.nav5').on('click', function() {
//		mySwiper.slideTo(6, 0, true);
//	})
//	$('.nav6').on('click', function() {
//		mySwiper.slideTo(7, 0, true);
//	})
//	$('.nav7').on('click', function() {
//		mySwiper.slideTo(8, 0, true);
//	})
//
//
//
//
//	$('.prev1').on('click', function() {
//		mySwiper.slideTo(1, 0, true);
//	})
//	$('.next1').on('click', function() {
//		mySwiper.slideTo(3, 0, true);
//	})
//
//
//	$('.prev2').on('click', function() {
//		mySwiper.slideTo(2, 0, true);
//	})
//	$('.next2').on('click', function() {
//		mySwiper.slideTo(4, 0, true);
//	})
//
//
//	$('.prev3').on('click', function() {
//		mySwiper.slideTo(3, 0, true);
//	})
//	$('.next3').on('click', function() {
//		mySwiper.slideTo(5, 0, true);
//	})
//
//
//	$('.prev4').on('click', function() {
//		mySwiper.slideTo(4, 0, true);
//	})
//	$('.next4').on('click', function() {
//		mySwiper.slideTo(6, 0, true);
//	})
//	
//	
//	
//	$('.prev5').on('click', function() {
//		mySwiper.slideTo(5, 0, true);
//	})
//	$('.next5').on('click', function() {
//		mySwiper.slideTo(7, 0, true);
//	})
//
//
//	$('.prev6').on('click', function() {
//		mySwiper.slideTo(6, 0, true);
//	})
//	$('.next6').on('click', function() {
//		mySwiper.slideTo(8, 0, true);
//	})
//	
//	
//	$('.prev7').on('click', function() {
//		mySwiper.slideTo(7, 0, true);
//	})
//	$('.next7').on('click', function() {
//		mySwiper.slideTo(0, 0, true);
//	})





	//			背景音乐

//  function autoPlayAudio() {
//      wx.config({
//          // 配置信息, 即使不正确也能使用 wx.ready
//          debug: false,
//          appId: '',
//          timestamp: 1,
//          nonceStr: '',
//          signature: '',
//          jsApiList: []
//      });
//      wx.ready(function() {
//          var globalAudio=document.getElementById("media");
//          globalAudio.play();
//      });
//  };
//	// 解决ios音乐不自动播放的问题
//	autoPlayAudio();


//	var btnaudio = document.getElementById('media');
//	btnaudio.play();
//
//	var bul = 1;
//	$('.icon-play').on('click', function() {
//		if(bul) {
//			btnaudio.pause();
//			$('.icon-play').removeClass('active');
//			bul = 0;
//		} else {
//			btnaudio.play();
//			$('.icon-play').addClass('active');
//			bul = 1;
//		}
//	})










})  //加载结束