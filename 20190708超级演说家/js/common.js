$(function(){
	$(".foot-nav li").on("click",function(){
		let index = $(this).index();
		$(".foot-nav li .item").eq(index).slideToggle().parent().siblings().children(".item").slideUp();
		$(".bg").css({"display":"block"});
	})
	$(".bg").on("click",function(){
		$(".foot-nav li .item").slideUp()
		$(".bg").css({"display":"none"})
	})
})


