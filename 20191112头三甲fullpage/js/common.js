$(function(){
//	var mySwiper = new Swiper('.swiper-container', {
////		direction: 'vertical',
////		keyboard : true,
////	    mousewheel: true,
////		pagination: {
////	        el: '.swiper-pagination',
////	        clickable: true,
////	      },
//	      
////		on: {
////		    init: function(){
////		      //Swiper初始化了
////		      	swiperAnimateCache(this); //隐藏动画元素
////				swiperAnimate(this); //初始化完成开始动画
////		    }, 
////		    slideChangeTransitionStart: function(){
////		    	var index = this.activeIndex;
////		    	$(".public_nav .nav-main li").eq(index - 1).addClass("active").siblings().removeClass("active");
////				if(index == 0 || index == 1){
////		    		$(".public_nav .nav-main li").eq(0).addClass("active").siblings().removeClass("active");
////				}
////				
////				if(index != 0){
////					$(".public_nav").addClass("block")
////					$(".header").addClass("block")
////				}else{
////					$(".public_nav").removeClass("block")
////					$(".header").removeClass("block")
////				}
////
//////				alert(this.activeIndex);
////		  	},
////		    slideChangeTransitionEnd: function(){
////				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
////		    },
////		},
//		
//	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//banner图的索引按钮
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
	
	//part1中的banner图切换效果
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
})
