$(function(){
	//			背景音乐

    function autoPlayAudio() {
        wx.config({
            // 配置信息, 即使不正确也能使用 wx.ready
            debug: false,
            appId: '',
            timestamp: 1,
            nonceStr: '',
            signature: '',
            jsApiList: []
        });
        wx.ready(function() {
            var globalAudio=document.getElementById("media");
            globalAudio.play();
        });
    };
	// 解决ios音乐不自动播放的问题
	autoPlayAudio();


	var btnaudio = document.getElementById('media');
//	btnaudio.play();

	var bul = 1;
	$('.icon-play').on('click', function() {
		if(bul) {
			btnaudio.pause();
			$('.icon-play').removeClass('active');
			bul = 0;
		} else {
			btnaudio.play();
			$('.icon-play').addClass('active');
			bul = 1;
		}
	})
	
	
	
	$(".play").click(function(){
		var player = $(this).next()[0];
		if(player.pause) {
            player.play();
            $(this).prev().remove();
            $(this).css({"display":"none"});
            $(this).next().attr("controls","controls");
        }else {
            player.pause();
            $(this).css({"display":"block"});
        }
	});
	
	
	
})
