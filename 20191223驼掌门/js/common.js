$(function() {
    let index_banner = new Swiper('.banner', {
        autoplay: true,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.index-pagination',
            clickable: true
        },
    })

    $(".play").click(function() {
        var player = $(this).next()[0];
        if (player.pause) {
            player.play();
            $(this).prev().remove();
            $(this).css({
                "display": "none"
            });
            $(this).next().attr("controls", "controls");
        } else {
            player.pause();
            $(this).css({
                "display": "block"
            });
        }
    });

    let menu_flag = false;

    // 目录弹出
    $('.menu-btn').click(function() {
        menu_flag = !menu_flag;
        if (menu_flag) {
            $('.menu-box').css('display', 'block');
            $('.menu-list').animate({
                right: '0'
            })
        } else {
            $('.menu-list').animate({
                right: '-2.16rem'
            }, function() {
                $('.menu-box').css('display', 'none');
            })
        }
    })

})