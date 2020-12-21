$(function(){
	setTimeout(function(){
		scrollNav()
	},1000);
	
	$('.er-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
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
	var $nav = $('.er-nav li');
	$(window).scroll(function(e){
		var y = $(this).scrollTop();
//		console.log(y)
		for(var i=0;i<heightArr.length;i++){
			if(y>0 && y<heightArr[0]){
				$nav.eq(0).addClass('active').siblings().removeClass('active')
			}else if(y>heightArr[i-1] && y<=heightArr[i]){
				$nav.eq(i).addClass('active').siblings().removeClass('active')
			}
		}
		
　　		var scrollHeight = $(document).height();
	　　var windowHeight = $(this).height();
	　　if(y + windowHeight == scrollHeight){
//	　　　　 console.log("已经到最底部了！");
		    $('.er-nav li:last-child').addClass('active').siblings().removeClass('active')
	　　}
	})
}