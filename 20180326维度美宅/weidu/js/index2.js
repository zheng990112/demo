$(function(){

    $('#dowebok').fullpage({
        sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        loopBottom: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        navigation:true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',




    afterLoad: function(anchorLink, index){
            // 第二屏回调
            if(index == 2){
              $('.b1').addClass('fadeIn')
            }
            if(index == 4){
              $('.d1').addClass('tada')
            }
            if(index == 5){
                $('.e1').addClass('fadeInLeftBig')
                $('.e2').addClass('fadeInRightBig')
            }
            if(index == 6){
              $('.f1').addClass('rotateInDownLeft')
            }
            if(index == 7){
              $('.g1').addClass('bounceIn')
              $('.g2').addClass('fadeIn')
            }
        },
    onLeave:function(anchorLink,index){
        if(index == 2){
            $('.b1').removeClass('fadeIn')
        }
        if(index == 4){
            $('.d1').removeClass('tada')
        }
        if(index == 5){
            $('.e1').addClass('fadeInLeftBig')
            $('.e2').removeClass('fadeInRightBig')
        }
        if(index == 6){
            $('.f1').removeClass('rotateInDownLeft')
        }
        if(index == 7){
            $('.g1').removeClass('bounceIn')
            $('.g2').removeClass('fadeIn')
        }

    }
})

})//函数结束