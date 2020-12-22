$(function(){
	var swiper = new Swiper('.swiper-container', {
				direction : 'vertical',
				mousewheel: {
				    releaseOnEdges: true,
				 },
				keyboard : true,
		        pagination: {
		        	el: '.swiper-pagination',
		        	clickable: true,
		      	},
		      	on:{
				    init: function(){
				        swiperAnimateCache(this); //隐藏动画元素 
				        swiperAnimate(this); //初始化完成开始动画
				    }, 
				    slideChangeTransitionStart: function(){
	//			    	alert(this.activeIndex)
				  	},
				    slideChangeTransitionEnd: function(){ 
				        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
				        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
				    } 
				}
		    });
})
