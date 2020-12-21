$(function(){
	
	var bannerSwiper = new Swiper('.banner-swiper',{
		pagination: '.swiper-pagination',
		autoplay: 3000,
		loop: true
	})
	
	
	var img_flag = true;
	$('.header_nav').on('click',function(){
		if(img_flag){
			$('.menu').animate({left: "0%"},'100');
			$('.bg').show();
			img_flag = false;
		}else{
			$('.menu').animate({left: '100%'},'100');
			$('.bg').hide();
			img_flag = true;
		}
	})
	$('.bg').on('click',function(){
		$('.menu').animate({left: '100%'},'100');
		$('.bg').hide();
		img_flag = true;
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
	

	
	
//	jQuery(".al-nav .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",vis:1});

	
	
})


