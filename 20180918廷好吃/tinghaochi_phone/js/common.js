$(function(){
	
	$('.menu .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = true;
	$('.menu-img').on('click',function(){
		if(img_flag){
			$('.menu').animate({right: '12px'},'100');
			$('.bg').show();
			img_flag = false;
		}else{
			$('.menu').animate({right: '-50%'},'100');
			$('.bg').hide();
			img_flag = true;
		}
	})
	
	$('.bg').click(function(){
		$('.menu').animate({right: '-50%'},'100');
		$('.bg').hide();
		img_flag = true;
	})
	
	$('.menu .title').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	})
	
	$('.header li .box').attr('data-flag','one');
	$('.header li').click(function(){
		var box = $(this).find('.box');
		if(box.attr('data-flag') == 'one'){
			box.show();
			box.attr('data-flag','two');
		}else{
			box.hide();
			box.attr('data-flag','one');
		}
		
	})
	
	//返回顶部
	$("#backTop").click(function(){
		var scrollTop = $(window).scrollTop();
		$("html,body").animate({ scrollTop: 0 }, 300);
	})
	
	setTimeout(function(){
		scrollNav()
	},1000)
})

function scrollNav(){
	var length = $('.content .part').length;
//	console.log(length)
	var h = 0;
	var heightArr = [];
	for(var i=1;i<=length;i++){
		h += $('.content .part'+i+'').height()
		heightArr.push(h)
	}
//	console.log(heightArr)
	var $nav = $('.er-nav a');
	$(window).scroll(function(e){
		var y = $(this).scrollTop();
//		console.log(y)
		for(let i=0;i<heightArr.length;i++){
			if(y>=0 && y<heightArr[0]){
				$nav.eq(0).addClass('active').siblings().removeClass('active')
			}else if(y>heightArr[i-1] && y<=heightArr[i]){
				$nav.eq(i).addClass('active').siblings().removeClass('active')
			}
		}
		
　　		var scrollHeight = $(document).height();
	　　var windowHeight = $(this).height();
	　　if(y + windowHeight == scrollHeight){
//	　　　　 console.log("已经到最底部了！");
		    $('.er-nav a:last-child').addClass('active').siblings().removeClass('active')
	　　}
	})
}
