$(function() {
       var banner_h = $(window).width() * 0.4323;
       $('.banner').height(banner_h);

       $(window).resize(function(){
       	var banner_h = $(window).width() * 0.4323;
       	$('.banner').height(banner_h);
       })



//  var banner_h = Math.floor($('.banner .banner-list li img').height());
//  $('.banner').height(banner_h);



	//banner图的索引按钮
	$(".banner-list li").eq(0).fadeIn(0).siblings().fadeOut(0);
	$(".banner-btn-list li").eq(0).addClass('light').siblings().removeClass('light');


    var b_len = $(".banner-list li").length;
    var li = "";
    for (var i = 0; i < b_len; i++) {
        li += '<li></li>';
    }
    var b_create = document.createElement('ul');
    b_create.className = "banner-btn-list";
    $(".banner-list").after(b_create);
    $(".banner-btn-list").html(li);
    $(".banner-btn-list li").eq(0).addClass('light');

    //part1中的banner图切换效果
    var b = 0;
    var timer, timeout;
    $(".banner-btn-list li").mouseover(function() {
        clearInterval(timer);
        $(this).addClass('light').siblings().removeClass('light');
        var index = $(this).index();
        b = index;
        $(".banner-list li").eq(index).fadeIn(800).siblings().fadeOut(600);
    })
    $(".banner-btn-list li").mouseout(function() {
        timer = setInterval(timeout, 3000);
    })
    timeout = function() {
            b++;
            if (b >= b_len) {
                b = 0;
            }
            $(".banner-list li").eq(b).fadeIn(800).siblings().fadeOut(600);
            $(".banner-btn-list li").eq(b).addClass('light').siblings().removeClass('light');
        }
          	timer = setInterval(timeout,3000);


    $(".play").click(function() {
        var player = $(this).next()[0];
        if (player.pause) {
            player.play();
            $(this).prev().remove();
            $(this).css({ "display": "none" });
            $(this).next().attr("controls", "controls");
        } else {
            player.pause();
            $(this).css({ "display": "block" });
        }
    });

$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var top_header = $(".banner").height() + 138;
		var aaa = $(".content")[0].offsetTop
		var ernavTop = scrollTop - top_header;
		
//		console.log(ernavTop)
		if(ernavTop > 0 ){
			$('.er-nav').addClass("er-nav-fixed");
		}else{
			$('.er-nav').removeClass("er-nav-fixed");
	  	};
		
	})

    $('.back-Top').click(function() {
        var scrollTop = $(window).scrollTop();
        $("html,body").animate({ scrollTop: 0 }, 600);
    });



	
    $(".er-nav_btn").click(function() {
		$('.er-nav').removeClass("hide").addClass("show")

		$('.er-nav_btn').animate({
			opacity: "0"
		}, '500');
		$(".close_btn").show();
	});

	$(".close_btn").click(function() {
		$('.er-nav').removeClass("show").addClass("hide")
		$('.er-nav_btn').animate({
			opacity: "1"
		}, '5000');
		$(".close_btn").hide();
	})

})