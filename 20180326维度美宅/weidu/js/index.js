$(function(){
    //banner图的索引按钮
    var b_len = $(".banner-list li").length;
    var li = "";
    for(var i=0;i<b_len;i++){
        li += '<li></li>';
    }
    var b_create = document.createElement('ul');
    b_create.className = "banner-btn-list";
    $(".banner-list").after(b_create);
    $(".banner-btn-list").html(li);
    $(".banner-btn-list li").eq(0).addClass('light');

    //part1中的banner图切换效果
    var b = 0;
    var timer,timeout;
    $(".banner-btn-list li").mouseover(function(){
        clearInterval(timer);

        $(this).addClass('light').siblings().removeClass('light');
        var index = $(this).index();
        b=index;
        $(".banner-list li").eq(index).fadeIn(800).siblings().fadeOut(600);
    })
    $(".banner-btn-list li").mouseout(function(){
        timer = setInterval(timeout,3000);
    })
    timeout = function(){
        b++;
        if(b>=b_len){
            b = 0;
        }
        $(".banner-list li").eq(b).fadeIn(800).siblings().fadeOut(600);
        $(".banner-btn-list li").eq(b).addClass('light').siblings().removeClass('light');
    }

    //放下面
    //  timer = setInterval(timeout,3000);



    // 第四屏


    function swiper(){
          var swiper = new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 30,
          // autoplay:true,
          autoplay: {
            delay: 1000,
            stopOnLastSlide: true,
            disableOnInteraction: true,
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: false,
        },
    });  
    }
    swiper();


    // // 1~9
    // var page = $(this).index();
    // $("#btn1").click(function(){
    //     // $("#show").css("display","none");
    //     $("#show").eq(page).css("display","block");
    //     // $("#btn1").css("width","50px";"border-radius"," 0 15px 15px 0";"background","#917d6f");
    //     alert(111)
    // })

    $('.d2-btn li').on('click',function(){
        let index = $(this).index()
        $(this).addClass('style').siblings().removeClass('style')
        $('.block').eq(index).removeClass('hide').siblings('.block').addClass('hide');
        swiper();
    })

    // swiper

})
