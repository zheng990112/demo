$(function(){	
	let index_banner = new Swiper('.banner', {
        autoplay: true,
        loop: true,
        effect: 'fade',
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
            $('.backTop').css({ 'bottom': '200px' })
        } else {
            $('.backTop').fadeOut();
        };
    });

    $('.backTop').click(function() {
        var scrollTop = $(window).scrollTop();
        $("html,body").animate({ scrollTop: 0 }, 600);
    });
    
    
    
    //二级导航固定
    $(window).scroll(function() {
        let content_top = $('.content')[0].getBoundingClientRect().top;
        let footer_top = $('.footer')[0].getBoundingClientRect().top;
    	var ernav_h = $('.er-nav').height();
		var x = w_h - footer_top;
        if (content_top <= 0) {
            $('.er-nav').css('position', 'fixed');
        }else {
            $('.er-nav').css('position', 'absolute');
        }
        if(x > 240){
            $('.er-nav').css('position', 'absolute');
        }
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
	
	
//	$(".head3 ul li").on("mouseenter",function(){
//		let index = $(this).index();
//		$(".head3 ul li").eq(index).children(".item").css({
//			"display": "block",
//			"height": "auto",
//		    "padding": "0.1rem 0",
//		    "top":"0.48rem",
//		    "z-index": "-1",
//		    "transition": "all 0.4s"
//		});
//		$(".head3 ul li").eq(index).children(".item").children("a").css({
//		    "font-size": "0.2rem",
//			"line-height": "0.36rem",
//		})
//	})
//	$(".head3 ul li").on("mouseleave",function(){
//		let index = $(this).index();
//		$(".head3 ul li").eq(index).children(".item").css({
//			"display": "block",
//		    "height": "0",
//		    "padding": "0",
//		    "top":"0.1rem",
//		    "color":"#2490d0",
//		    "z-index": "-1",
//		    "transition": "all 1s"
//		});
//		$(".head3 ul li").eq(index).children(".item").children("a").css({
//		    "font-size": "0",
//			"line-height": "0",
//		})
//	})
	
	
	
//	$(".head3 ul li").on("click",function(){
//		let index = $(this).index();
//		$(".head3 ul li").eq(index).children(".item").slideToggle("slow");
//	})
	
	
	
	$(".head3 ul li").on("mouseenter",function(){
		let index = $(this).index();
		$(".head3 ul li").eq(index).children(".item").slideDown();
	})
	$(".head3 ul li").on("mouseleave",function(){
		let index = $(this).index();
		$(".head3 ul li").eq(index).children(".item").slideUp();
	})
	




})
