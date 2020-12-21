$(function(){
	var img_flag = true;
	$('.menu-img').on('click',function(){
		if(img_flag){
			$(this).find('.img3').removeClass('none');
			$(this).find('.img2').addClass('none');
			$('.menu').animate({right: 0},'100');
			img_flag = false;
		}else{
			$(this).find('.img2').removeClass('none');
			$(this).find('.img3').addClass('none');
			$('.menu').animate({right: '-50%'},'100');
			img_flag = true;
		}
	})
	
	$('.menu .title').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	})
	
	//返回顶部
	$("#backTop").click(function(){
		var scrollTop = $(window).scrollTop();
		$("html,body").animate({ scrollTop: 0 }, 300);
	})
})
