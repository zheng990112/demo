$(function(){
	var bannerSwiper = new Swiper('.banner-swiper',{
		pagination: '.swiper-pagination',
		autoplay: 3000,
		loop: true,
		autoplayDisableOnInteraction: false
	})
	
	$('.menu .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = true;
	$('.menu-img').on('click',function(){
		if(img_flag){
			$(this).find('.img2').removeClass('none');
			$(this).find('.img1').addClass('none');
			$('.menu').animate({left: 0},'100');
			img_flag = false;
		}else{
			$(this).find('.img1').removeClass('none');
			$(this).find('.img2').addClass('none');
			$('.menu').animate({left: '-50%'},'100');
			img_flag = true;
		}
	})
	
	$('.menu .title').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	})
	
	
	$(".play").click(function(){
		var player = $(this).next()[0];
		if(player.pause) {
            player.play();
            $(this).prev().remove();
            $(this).css({"display":"none"});
            $(this).next().attr("controls","controls");
        }else {
            player.pause();
            $(this).css({"display":"block"});
        }
	});
})
