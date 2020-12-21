$(function(){
	setTimeout(function(){
		scrollNav()
	},1000)
	$(".header_nav .item div").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on")
	})
})
function scrollNav() {
	var length = $('.content_right .part').length;
//	console.log(length)
	var h = 0;
	var heightArr = [];
	for(var i = 1; i <= length; i++) {
		h += $('.content_right .part' + i + '').height()
		heightArr.push(h)
	}
//	console.log(heightArr)
	var $nav = $('.active .item div');
	
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
//		console.log("已经到最底部了！");
			$('.active .item div:last-child').addClass('on').siblings().removeClass('on')　　
		}
	})
	
}