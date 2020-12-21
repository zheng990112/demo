$(function() {
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical', // 垂直切换选项
		loop: false, // 循环模式选项
//		effect : 'flip',
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
				//this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
			}
		}
	})
	
	
    num = 1
    $('.page2').on('touchmove', function (event) {
        if (num == 1) {
            var one = $('input:radio[name="one"]:checked').val();
            if (one == null) {
                num = 2
				layer.open({
					content:'请选择选项！！!'
				    ,skin:'msg'
					,time:2
					,style:'bottom:0;'
			    });
            }
        }
    })
    $('.page2').on('touchstart', function (event) {
        num = 1
    })




	$('.page3').on('touchmove', function() {        
		if(num == 1) {            
			var two = $('input:radio[name="two"]:checked').val();            
			if(two == null) {                
				num = 2                 
				layer.open({
					content:'请选择选项！！!'
				    ,skin:'msg'
					,time:2
					,style:'bottom:0;'
			    });      
			}        
		}    
	})
	$('.page3').on('touchstart', function(event) {        
		num = 1    
	})
	


	$('.page4').on('touchmove', function() {        
		if(num == 1) {            
			var three = $('input:radio[name="three"]:checked').val();            
			if(three == null) {                
				num = 2                 
				layer.open({
					content:'请选择选项！！!'
				    ,skin:'msg'
					,time:2
					,style:'bottom:0;'
			    });         
			}        
		}    
	})
	$('.page4').on('touchstart', function(event) {        
		num = 1    
	})



	$('.page5').on('touchmove', function() {        
		if(num == 1) {            
			var four = $('input:radio[name="four"]:checked').val();            
			if(four == null) {                
				num = 2                 
				layer.open({
					content:'请选择选项！！!'
				    ,skin:'msg'
					,time:2
					,style:'bottom:0;'
			    });               
			}        
		}    
	})
	$('.page5').on('touchstart', function(event) {        
		num = 1    
	})
	
	
	
	$('.page6').on('touchmove', function() {        
		if(num == 1) {            
			var five = $('input:radio[name="five"]:checked').val();            
			if(five == null) {                
				num = 2                 
				layer.open({
					content:'请选择选项！！!'
				    ,skin:'msg'
					,time:2
					,style:'bottom:0;'
			    });               
			}        
		}    
	})
	$('.page6').on('touchstart', function(event) {        
		num = 1    
	})
	
	
	
	$('.page7').on('touchmove', function() {        
		if(num == 1) {            
			var six = $('input:radio[name="six"]:checked').val();            
			if(six == null) {                
				num = 2                 
				layer.open({
					content:'请选择选项！！!'
				    ,skin:'msg'
					,time:2
					,style:'bottom:0;'
			    });                
			}        
		}    
	})
	$('.page7').on('touchstart', function(event) {        
		num = 1    
	})
	
	
	
	$('.page8').on('touchmove', function() {        
		if(num == 1) {            
			var seven = $('input:radio[name="seven"]:checked').val();            
			if(seven == null) {                
				num = 2                 
				layer.open({
					content:'请选择选项！！!'
				    ,skin:'msg'
					,time:2
					,style:'bottom:0;'
			    });                
			}        
		}    
	})
	$('.page8').on('touchstart', function(event) {        
		num = 1    
	})
	
	
	$('.page9').on('touchmove', function() {        
		if(num == 1) {            
			var eight = $('input:radio[name="eight"]:checked').val();            
			if(eight == null) {                
				num = 2                 
				layer.open({
					content:'请选择选项！！！'
				    ,skin:'msg'
					,time:2
					,style:'bottom:0;'
			    });               
			}        
		}    
	})
	$('.page9').on('touchstart', function(event) {        
		num = 1    
	})
	

	$('.page10').on('touchmove', function() {        
		if(num == 1) {            
			var nine = $('input:radio[name="nine"]:checked').val();            
			if(nine == null) {                
				num = 2                 
				layer.open({
					content:'请选择选项！！！'
				    ,skin:'msg'
					,time:2
					,style:'bottom:0;'
			    });              
			}        
		}    
	})
	$('.page10').on('touchstart', function(event) {        
		num = 1    
	})









//	$('.one').on('click', function() {
//		$('.page2').removeClass('swiper-no-swiping')
//		 mySwiper.slideTo(2, 600, true);
//	})
//	$('.two').on('click', function() {
//		$('.page3').removeClass('swiper-no-swiping')
//		 mySwiper.slideTo(3, 600, true);
//	})
//	
//	$('.three').on('click', function() {
//		$('.page4').removeClass('swiper-no-swiping')
//		 mySwiper.slideTo(4, 600, true);
//	})
//	$('.four').on('click', function() {
//		$('.page5').removeClass('swiper-no-swiping')
//		 mySwiper.slideTo(5, 600, true);
//	})
//	$('.five').on('click', function() {
//		$('.page6').removeClass('swiper-no-swiping')
//		 mySwiper.slideTo(6,600, true);
//	})
//	$('.six').on('click', function() {
//		$('.page7').removeClass('swiper-no-swiping')
//		 mySwiper.slideTo(7, 600, true);
//	})
//	$('.seven').on('click', function() {
//		$('.page8').removeClass('swiper-no-swiping')
//		 mySwiper.slideTo(8, 600, true);
//	})
//	$('.eight').on('click', function() {
//		$('.page9').removeClass('swiper-no-swiping')
//		 mySwiper.slideTo(9, 600, true);
//	})
//	$('.nine').on('click', function() {
//		$('.page10').removeClass('swiper-no-swiping')
//		 mySwiper.slideTo(10, 600, true);
//	})
	













//	$("#btn").click(function() {
//		var one = $('input:radio[name="one"]:checked').val();
//		var ten = $('input:radio[name="ten"]:checked').val();
//		if(ten == null) {
//			 layer.open({
//				 content:'请选择选项！！！'
//				 ,skin:'msg'
//				 ,time:3
//				 ,style:'bottom:0;'
//			 });
//			return true
//		}
//		$('.page11').removeClass('swiper-no-swiping')
//
//
//		mySwiper.slideTo(11, 0, true);
//		
//		
//		$('.jz').removeClass('none')
//		
//		setTimeout(function() {
//			$('.jz').addClass('none')
//			if(one == 1){
//				$(".result1").addClass("block").siblings().removeClass("block")
//			}
//			if(one == 2){
//				$(".result2").addClass("block").siblings().removeClass("block")
//			}
//			if(one == 3){
//				$(".result3").addClass("block").siblings().removeClass("block")
//			}
//		}, 1500)
//		
//		$(".result1").removeClass("block")
//		$(".result2").removeClass("block")
//		$(".result3").removeClass("block")
//		
//	});
	
	

	
	
})   //加载函数结束