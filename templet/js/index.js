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

    //�ֲ�ͼ

        // ��ȡ��ָ���ֲ�ͼԪ���ϵ�һ�������������ң�
        // ��ȡ�������ֲ�ͼ����
        var $carousels = $('.carousel');
    var $item=$('.item');
        var startX,endX;
        // �ڻ�����һ����Χ�ڣ����л�ͼƬ
        var offset = 50;
        // ע�Ử���¼�
        $carousels.on('touchstart',function (e) {
            // ��ָ������ʼʱ��¼һ����ָ���ڵ�����x
            startX = e.originalEvent.touches[0].clientX;

        });
        $carousels.on('touchmove',function (e) {
            // Ŀ���ǣ���¼��ָ�뿪��Ļһ˲���λ�� ����move�¼��ظ���ֵ
            endX = e.originalEvent.touches[0].clientX;
        });
    $item.on('touchend',function(e){
        var n=$(this).index()+1;
       // console.log($(this).index())
        $('.num').html(n+'/6')
    })
        $carousels.on('touchend',function (e) {
            //console.log(endX);
            //��������һ˲���¼��ָ�����������x��λ�� endX
            //�Ƚ�endX��startX�Ĵ�С������ȡÿ���˶��ľ��룬���������һ��ֵʱ��Ϊ���з���ı仯
            var distance = Math.abs(startX - endX);

            if (distance > offset){
                //˵���з���ı仯
                //���ݻ�õķ��� �ж�����һ�Ż�����һ�ų���
                $(this).carousel(startX >endX ? 'next':'prev');
            }
        })
    //
    window.onresize=function() {
        $('.title').css('width',$(document.documentElement).width()-0.8*$(document.documentElement).width()/3.75 + 'px');
        //���ڴ�С�ı�ı������С
        document.documentElement.style.fontSize =$(document.documentElement).width()/3.75 + 'px';
    }

    //detail

})