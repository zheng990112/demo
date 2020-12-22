$(function(){	
	let index_banner = new Swiper('.banner', {
        autoplay: true,
        loop: true,
       // effect: 'flip',
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.index-pagination',
            clickable: true
        },
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
		
	//返回顶部
    var w_h = $(window).height();
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > w_h * 0.8) {
            $('.backTop').fadeIn();
            $('.r-nav').fadeIn();
            // $('.r-nav').css({ 'top': '50%' })
            // $('.backTop').css({ 'bottom': '200px' })
        } else {
            $('.backTop').fadeOut();
            $('.r-nav').fadeOut();
        };
    });

    $('.backTop').click(function() {
        var scrollTop = $(window).scrollTop();
        $("html,body").animate({ scrollTop: 0 }, 600);
    });
    
    //右边导航的显示与影藏
    $(window).scroll(function() {
        $(window).scroll(function() {
            let scroll_top = $(window).scrollTop();
            if (scroll_top > w_h * 0.8) {
               $(".r-nav").addClass("block");
               $('.backTop').addClass("block");
            } else {
                $(".r-nav").removeClass("block");
                $('.backTop').removeClass("block");
            };
        });
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
	
	
	
	$(".menu ul li").on("mouseenter",function(){
		let index = $(this).index();
		$(".menu ul li").eq(index).children(".item").slideDown();
	})
	$(".menu ul li").on("mouseleave",function(){
		let index = $(this).index();
		$(".menu ul li").eq(index).children(".item").slideUp();
	})
	
		
	
	
	$(".header_nav ul li").on("mouseenter",function(){
		let index = $(this).index();
		$(".header_nav ul li").eq(index).children(".item").slideDown();
	})
	$(".header_nav ul li").on("mouseleave",function(){
		let index = $(this).index();
		$(".header_nav ul li").eq(index).children(".item").slideUp();
	})

})
