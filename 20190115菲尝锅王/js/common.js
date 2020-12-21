$(function(){
	
	
	
	
	$('.menu .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = true;
	$('.menu-img').on('click',function(){
		if(img_flag){
			$('.menu').animate({right: "1.2%"},'100');
			$('.bg').show();
			img_flag = false;
		}else{
			$('.menu').animate({right: '-50%'},'100');
			$('.bg').hide();
			img_flag = true;
		}
	})
	$('.bg').on('click',function(){
		$('.menu').animate({right: '-50%'},'100');
		$('.bg').hide();
		img_flag = true;
	})

	
	
	$('.menu .title').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	})
	
	
	
//	$(".play").click(function() {
//		var player = $(this).next()[0];
//		if(player.pause) {
//			player.play();
//			$(this).prev().remove();
//			$(this).css({
//				"display": "none"
//			});
//			$(this).next().attr("controls", "controls");
//		} else {
//			player.pause();
//			$(this).css({
//				"display": "block"
//			});
//		}
//	});

	
//	$('img').load(function(){
//		
//	})
	


	setTimeout(function(){
		scrollNav()
	},1000)
	
	$(".er-nav a").on("click",function(){
		let index = $(this).index()
		$(this).addClass("on").siblings().removeClass("on")
	})
})


function scrollNav() {
	var length = $('.main .part').length;
//	console.log(length)
	var h = 0;
	var heightArr = [];
	for(var i = 1; i <= length; i++) {
		h += $('.main .part' + i + '').height()
		heightArr.push(h)
	}
//	console.log(heightArr)
	var $nav = $('.er-nav a');

	$(window).scroll(function(e) {
		var y = $(this).scrollTop();
		//		console.log(y)
		for(var i = 0; i < heightArr.length; i++) {
			if(y > 0 && y < heightArr[0]) {
				$nav.eq(0).addClass('on').siblings().removeClass('on')
			} else if(y > heightArr[i - 1] && y <= heightArr[i]) {
				$nav.eq(i).addClass('on').siblings().removeClass('on')
			}
		}

		　　
		var scrollHeight = $(document).height();　　
		var windowHeight = $(this).height();　　
		if(y + windowHeight == scrollHeight) {　　　　
//			console.log("已经到最底部了！");
			$('.er-nav a:last-child').addClass('on').siblings().removeClass('on')　　
		}
	})
	
}
