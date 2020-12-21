$(function() {
	var img_flag = true;
	$('.menu').on('click',function(){
		if(img_flag){
			$('.nav').animate({top: '0'},'10');
			$(".header .menu .span1").css({"display": "none"});
			$(".header .menu .span2").css({"display": "block"});
			img_flag = false;
		}else{
			$('.nav').animate({top: "-100%"},'10');
			$(".header .menu .span1").css({"display": "block"});
			$(".header .menu .span2").css({"display": "none"});
			img_flag = true;
		}
		
		$(".header .nav ul li").on('click',function(){
			$('.nav').animate({top: "-100%"},'10');
			$(".header .menu .span1").css({"display": "block"});
			$(".header .menu .span2").css({"display": "none"});
			img_flag = true;
		})
	})
})