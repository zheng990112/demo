$(function() {


    $('.play-icon').click(function() {
        var $video = $(this).parent().parent().children('.video');
        $video.css('display', 'block');
        $video[0].play();
    })
    
    
    
    
    
    $('.menu-list .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = false;
	$('.menu-icon').on('click',function(){
		if(img_flag){
			$('.menu-list').animate({ right: '-425%' }, '100');
			img_flag = false;
			$('.bg').hide();
		}else{
			$('.menu-list').animate({ right: '50%' }, '100');
			img_flag = true;
			$('.bg').show();
		}
	})
	$('.bg').on('click',function(){
		$('.menu-list').animate({ right: '-425%' }, '100');
		$('.bg').hide();
		img_flag = false;
	})
	
	$('.menu-list .title').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	})
    
    
    
    
    
    
})