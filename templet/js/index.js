/**
 * Created by Administrator on 2017/11/21.
 */
$(function(){
    $('.title').css('width',$(document.documentElement).width()-0.8+'rem')
    document.documentElement.style.fontSize =$(document.documentElement).width()/3.75 + 'px';
    $('#search').focus(function(){
        window.location.href="../html/search.html";
    })

    $('.return').click(function(){
        window.location.href="../html/index.html"
    })
    $(window).scroll(function() {
        var h = $(window).scrollTop();
        var headtop = 380;
        if (h >= headtop) {
            $('#nav1').css('background','#ffffff');
            $('.login a').css('color','#000000')
        }
        else {
            $('#nav1').css('background','rgba(255,255,255,0.3)');
            $('.login a').css('color','#999999')
        }
    })

    //轮播图

        // 获取手指在轮播图元素上的一个滑动方向（左右）
        // 获取界面上轮播图容器
        var $carousels = $('.carousel');
    var $item=$('.item');
        var startX,endX;
        // 在滑动的一定范围内，才切换图片
        var offset = 50;
        // 注册滑动事件
        $carousels.on('touchstart',function (e) {
            // 手指触摸开始时记录一下手指所在的坐标x
            startX = e.originalEvent.touches[0].clientX;

        });
        $carousels.on('touchmove',function (e) {
            // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
            endX = e.originalEvent.touches[0].clientX;
        });
    $item.on('touchend',function(e){
        var n=$(this).index()+1;
       // console.log($(this).index())
        $('.num').html(n+'/6')
    })
        $carousels.on('touchend',function (e) {
            //console.log(endX);
            //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
            //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
            var distance = Math.abs(startX - endX);

            if (distance > offset){
                //说明有方向的变化
                //根据获得的方向 判断是上一张还是下一张出现
                $(this).carousel(startX >endX ? 'next':'prev');
            }
        })
    //
    window.onresize=function() {
        $('.title').css('width',$(document.documentElement).width()-0.8*$(document.documentElement).width()/3.75 + 'px');
        //窗口大小改变改变字体大小
        document.documentElement.style.fontSize =$(document.documentElement).width()/3.75 + 'px';
    }

    //detail

})