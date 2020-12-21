$(function() {
//	var bannerSwiper = new Swiper('.banner-swiper',{
//		pagination: {
//		   el: '.swiper-pagination',
//		},
//		autoplay: 3000,
//		loop: true,
//		autoplayDisableOnInteraction: false
//	});
	

    $(".play").click(function() {
        var player = $(this).next()[0];
        if (player.pause) {
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

    $('.menu .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = true;
	$('.btn-menu').on('click',function(){
		if(img_flag){
			$('.menu').animate({top: '0.96rem'},'10');
			$(".logo").addClass("open");
			$(".tel-img").addClass("open");
			$(".header").css({"background-color":"#bf9170"});
			$(".header .btn-menu span").css({"background":"#fff"});
			img_flag = false;
		}else{
			$('.menu').animate({top: "-100%"},'10');
			$(".logo").removeClass("open");
			$(".tel-img").removeClass("open");
			$(".header").css({"background-color":"#192368"});
			$(".header .btn-menu span").css({"background":"#C89771"});
			$('.bg').hide();
			img_flag = true;
		}
	})
    
    
    $('.menu .title').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	})


 	$('.backTop').click(function() {
        var scrollTop = $(window).scrollTop();
        $("html,body").animate({ scrollTop: 0 }, 600);
    });

	
	
	
	$(".menu .active .item a").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
	
	
	$(".btn-menu").click(function(){
		$(".header").toggleClass("menu-open")
	})

})
