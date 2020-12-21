$(function(){
	setTimeout(function(){
		scrollNav()
	},1000)
	$(".menu .item a").on("click",function(){
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
	var $nav = $('.active .item a');
	
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
			$('.active .item a:last-child').addClass('on').siblings().removeClass('on')　　
		}
	})
	
}