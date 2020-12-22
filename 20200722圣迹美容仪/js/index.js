$(document).ready(function() {

	$('#fullpage').fullpage({
		//              anchors: [ 'p1', 'p1', 'p2', 'p3', 'p4', 'p5'],
		//              menu: '#menu',
		sectionSelector: '.swiper-slide',
		css3: true, //是否使用CSS3 transforms来实现滚动效果，默认为true
		fixedElements: '.header, .footer',
		scrollingSpeed: 500,
		onLeave: function(index, nextIndex, direction) {
			var loadedSection = $(this);
			console.log(nextIndex);
			if(nextIndex.index != 0) {
				$(".header").addClass("block")
				$(".footer").addClass("block")

			} else {
				$(".header").removeClass("block")
				$(".footer").removeClass("block")
			}

//			if(nextIndex.index === 2) {
//				$(".footer").addClass("footer_lastpage")
//			} else {
//				$(".footer").removeClass("footer_lastpage")
//
//			}

			//                  var num = index.anchors;
			//					$(".public_nav .nav-main li").eq(num - 1).addClass("active").siblings().removeClass("active");
			//					if(num == "p1" || num == "p2") {
			//						$(".public_nav .nav-main li").eq(0).addClass("active").siblings().removeClass("active");
			//					}

			if(index.index === 0) {
				$('.page0 .ul2 li').removeClass('bounceIn');
				$(".page0 .center-img").removeClass("zoomIn");
				$(".page0 .ul1").removeClass("fadeInLeft");
			} else if(index.index === 2) {
				$('.page2 .box-right').removeClass('fadeInRight');
				$('.fonts').removeClass('zoomIn');
			} else if(index.index === 3) {
				$('.page3 .box ul li').removeClass('fadeInLeft');
				$('.page3 .fonts').removeClass('fadeInDown');
			} else if(index.index === 4) {
				$('.page4 .box').removeClass('slideInDown');
				$('.page4 .box ul li').removeClass('fadeInLeft');
			} else if(index.index === 5) {
				$('.page5 .page5-title').removeClass('zoomIn');
				$('.page5 .vedio-box').removeClass('fadeInLeft');
				$('.page5 .news-list').removeClass('fadeInRight');
			}
		},

		afterLoad: function(anchorLink, index) {
			if(index.index === 0) {
				$('.page0 .ul2 li').addClass('bounceIn');
				$(".page0 .center-img").addClass("zoomIn");
				$(".page0 .ul1").addClass("fadeInLeft");
			} else if(index.index === 2) {
				$('.page2 .box-right').addClass('fadeInRight');
				$('.page2 .fonts').addClass('zoomIn');
			} else if(index.index === 3) {
				$('.page3 .box ul li').addClass('fadeInLeft');
				$('.page3 .fonts').addClass('fadeInDown');
			} else if(index.index === 4) {
				$('.page4 .box').addClass('slideInDown');
				$('.page4 .box ul li').addClass('fadeInLeft');
			} else if(index.index === 5) {
				$('.page5 .page5-title').addClass('zoomIn');
				$('.page5 .vedio-box').addClass('fadeInLeft');
				$('.page5 .news-list').addClass('fadeInRight');
			}
		}

	});

})