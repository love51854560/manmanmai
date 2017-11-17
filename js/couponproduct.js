/**
 * Created by 朱青亮 on 2017/11/8.
 */
$(function () {
   var couponid = tools.getValue('couponid');

    $.ajax({
        url:"http://"+ip+":9090/api/getcouponproduct",
        type:"get",
        data:{
            couponid:couponid
        },
        success:function (data) {
            console.log(data);
            var html = template('tpl',data);
            $('.cp-products ul').html(html);
        }
    });

    $('.cp-products').on('click','li',function (e) {
        var img = $(this).data('img');
        console.log(img);
        $('.cover').show();
        // document.body.style.overFlow = "hidden";
        // $(document)
        $('body').css('overflow','hidden');
        $('body').css('height', '100%');

        var html = template('tpl1',{img:img});
        $('.swiper-wrapper').html(html);
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: 1000,
            loop:true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next'
        })
    });

    $('.cover .close-btn').on('click',function () {
        // console.log(1);
        $('.cover').hide();
        $('body').css('overflow','auto');
        $('body').css('height', 'auto');
    });
});
