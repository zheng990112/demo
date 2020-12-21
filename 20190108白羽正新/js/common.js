$(function(){
	var bannerSwiper = new Swiper('.banner-swiper',{
		pagination: '.swiper-pagination',
		autoplay: 3000,
		loop: true
	})
	$('.menu .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = true;
	$('.menu-img').on('click',function(){
		if(img_flag){
			$(this).find('.img3').removeClass('none');
			$(this).find('.img2').addClass('none');
			$('.menu').animate({left: "0"},'100');
			$('.bg').show();
			img_flag = false;
		}else{
			$(this).find('.img3').addClass('none');
			$(this).find('.img2').removeClass('none');
			$('.menu').animate({left: '-54%'},'100');
			$('.bg').hide();
			img_flag = true;
		}
	})
	$('.bg').on('click',function(){
		$('.img3').addClass('none');
		$('.img2').removeClass('none');
		$('.menu').animate({left: '-54%'},'100');
		$('.bg').hide();
		img_flag = true;
	})
	$('.menu .title').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	})
	//返回顶部
	$("#backTop").click(function(){
		var scrollTop = $(window).scrollTop();
		$("html,body").animate({ scrollTop: 0 }, 300);
	})
	
//	$(".play").click(function() {
//		var player = $(this).next()[0];
//		if(player.pause) {
//			player.play();
//			$(this).prev().remove();
//			$(this).css({
//				"display": "none"
//			});
//			$(this).next().attr("controls", "controls");
//		} else {
//			player.pause();
//			$(this).css({
//				"display": "block"
//			});
//		}
//	});

	
//	$('img').load(function(){
//		
//	})
	



	$(".menu .item a").on("click",function(){
		let index = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
	})
	
})


