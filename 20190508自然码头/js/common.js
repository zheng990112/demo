$(function(){
	
	var bannerSwiper = new Swiper('.banner-swiper',{
		pagination: '.swiper-pagination',
		autoplay: 3000,
		loop: true
	})
	
	
	$('.menu .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = true;
	$('.btn-menu').on('click',function(){
		if(img_flag){
			$('.menu').animate({top: '1.1rem'},'10');
			img_flag = false;
		}else{
			$('.menu').animate({top: "-100%"},'10');
			$('.bg').hide();
			img_flag = true;
		}
	})
	$(".menu ul li .item a").on('click',function(){
		location.reload();
	})

	
	
	
	$('.bg').on('click',function(){
		$('.menu').animate({right: '-50%'},'100');
		$('.bg').hide();
		img_flag = true;
	})

	
	
	$('.menu .title').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
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
	
	
//	var w_h = $(window).height();
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
//		console.log(scrollTop)
		if(scrollTop > 480){
			$(".header").addClass("header-bg")
		}else{
			$(".header").removeClass("header-bg")
		}
    });

	
	
	
	$(".btn-menu").click(function(){
		$(".header").toggleClass("menu-open")
	})
	$(".menu li").click(function(){
		var index = $(this).index();
		$(".menu li .item").eq(index).slideToggle("100")
	})
})


