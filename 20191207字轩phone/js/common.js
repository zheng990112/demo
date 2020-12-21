// let prev = 0;


$(function() {
    let index_banner = new Swiper('.index-banner', {
        autoplay: true,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    let count = 0;

    function menu_fun(arg) {
        count++;
        if (count % 2) {
            $('.menu-btn').find('.menu').css('display', 'none');
            $('.menu-btn').find('.back').css('display', 'block');

            $('.menu-box').animate({
                height: '100%'
            })
        } else {
            $('.menu-btn').find('.back').css('display', 'none');
            $('.menu-btn').find('.menu').css('display', 'block');

            $('.menu-box').animate({
                height: '0'
            })
        }
    }

    $('.menu-btn').click(function() {
        menu_fun();
    })


    $('.one-menu').click(function() {

        let $one = $(this);
        let $er = $one.find('.er-menu');
        let $th = $one.find('.th-menu');

        $('.one-menu.on').find('.er-menu').css('display', 'none');
        $('.one-menu.on').removeClass('on');
        if ($er.length) {
//          console.log($er.length, $th.length);
            $one.addClass('on');
            $er.css('display', 'block');
            $er.find('a').click(function() {
                if ($th.length) {
                    let index = $(this).index();

                    $th.eq(index).css('display', 'block');

                    $th.eq(index).find('.back').click(function() {
                        $(this).parent().css('display', 'none');
                    })

                    console.log('Clicked on: ' + $(this).index());
                }
            })
        }
    })
})