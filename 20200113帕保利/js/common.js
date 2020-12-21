$(function() {

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
    // 一级导航展开

    $('.menu-box').click(function() {
        menu_flag = !menu_flag;
        if (menu_flag) {
            $('.menu').fadeIn(function() {
                $('.menu-list').animate({
                    right: '0rem'
                })
            });
            // two_nav()
        } else {
            $('.menu-list').animate({
                right: '-10rem'
            }, function() {
                $('.menu').fadeOut();
            })

            // $('.er-nav-box').slideUp();
        }
    })

    $('.nav>a').click(function() {
        let $er_nav = $(this).siblings('.er-nav-box');
        if ($er_nav.length) {
            if ($er_nav.css('display') === 'none') {
                $('.er-nav-box').slideUp();
                $er_nav.slideDown();
            } else {
                $er_nav.slideUp();
                // $er_nav.css('display', 'none')
            }
            // return false;
        }
    })

})