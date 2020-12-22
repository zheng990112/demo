$(function(){	
	// var banner_h = $(window).width() * 0.4635;
	// $('.banner').height(banner_h);
	
	// $(window).resize(function(){
	// 	var banner_h = $(window).width() * 0.4635;
	// 	$('.banner').height(banner_h);
	// })
	
	var banner_h = Math.floor($('.banner .banner-list li img').height());
	$('.banner').height(banner_h);

	//banner图的索引按钮
//	$(".banner-list li").eq(0).fadeIn(0).addClass("aaa").siblings().fadeOut(0).removeClass("aaa");
	$(".banner-list li").eq(0).fadeIn(0).siblings().fadeOut(0);
	$(".banner-btn-list li").eq(0).addClass('light').siblings().removeClass('light');
	
	var b_len = $(".banner-list li").length;
	var li = "";
	for(var i=0;i<b_len;i++){
		li += '<li></li>';
	}
	var b_create = document.createElement('ul');
	b_create.className = "banner-btn-list";
	$(".banner-list").after(b_create);
	$(".banner-btn-list").html(li);
	$(".banner-btn-list li").eq(0).addClass('light');
	
	//banner图切换效果
	var b = 0;
	var timer,timeout;
	$(".banner-btn-list li").mouseover(function(){
		clearInterval(timer);
		$(this).addClass('light').siblings().removeClass('light');
		var index = $(this).index();
		b=index;
		$(".banner-list li").eq(index).fadeIn(800).siblings().fadeOut(600);
	})
	$(".banner-btn-list li").mouseout(function(){
		timer = setInterval(timeout,3000);
	})
	timeout = function(){
		b++;
		if(b>=b_len){
			b = 0;
		}
//		$(".banner-list li").eq(b).fadeIn(1200).addClass("aaa").siblings().fadeOut(1000).removeClass("aaa");
		$(".banner-list li").eq(b).fadeIn(800).siblings().fadeOut(600);
		$(".banner-btn-list li").eq(b).addClass('light').siblings().removeClass('light');
		
	}
	timer = setInterval(timeout,3000);
	
	
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
		
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var w_h = $(window).height();
		var foot1_h = $(".foot1").height();
		var foot2Top = $(".footer")[0].offsetTop - scrollTop + foot1_h + 101;
//		console.log(scrollTop);
//		console.log(w_h);  //浏览器窗口高度
//		console.log(footerTop);  //浏览器窗口高度
		if(w_h < foot2Top) {
			$(".foot2").addClass("foot2fixed")
			$(".lxb-container").removeClass(".lxb-container-fixed")
			$(".foot3").css({"margin-top": "100px"})
		}else {
			$(".foot2").removeClass("foot2fixed")
			$(".lxb-container").addClass(".lxb-container-fixed")
			$(".foot3").css({"margin-top": "0"})
		};
		
		
	  	
	  	
	  	
	  	
	  	if(scrollTop > 0){
	  		$(".header-box").addClass("header-box-fixed");
	  		$("body").addClass("body-pt");
	  	}else{
	  		$(".header-box").removeClass("header-box-fixed");
	  		$("body").removeClass("body-pt");
	  		
	  	}
	});
	
	
	
	
	
	
	
	
	$('.backTop').click(function(){
		var scrollTop = $(window).scrollTop();
		$("html,body").animate({ scrollTop: 0 }, 600);
	});
	
	
	
	
	
	
	var img_flag = true;
	$('.search-btn').on('click',function(){
		if(img_flag){
			$(this).find('.img2').removeClass('none');
			$(this).find('.img1').addClass('none');
			$('.inp').fadeIn();
			$(".nav ul").addClass("none");
			$(".bg").removeClass("none");
			$(".nav-box").addClass("red");
			$('.inp').animate({opacity: '1'},'100');
			$(".inp input").focus();
			$(".inp div").animate({paddingLeft:"10px"},'300');
			img_flag = false;
		}else{
			$(this).find('.img1').removeClass('none');
			$(this).find('.img2').addClass('none');
			$('.inp').fadeOut();
			$(".nav ul").removeClass("none");
			$(".bg").addClass("none");
			$(".nav-box").removeClass("red");
			$(".inp div").animate({paddingLeft:"100px"},'200');
			img_flag = true;
		}
	})
	$(".bg").click(function(){
		$('.search-btn .img1').removeClass('none');
		$('.search-btn .img2').addClass('none');
		$('.inp').animate({opacity: '0'},'100');
		$(".inp div").animate({paddingLeft:"100px"},'300');
		$(".nav ul").removeClass("none");
		$(".nav-box").removeClass("red");;
		$(".bg").addClass("none");
		img_flag = true;
	})
	
	
	
	
	
	
})
