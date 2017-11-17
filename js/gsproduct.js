/**
 * Created by 朱青亮 on 2017/11/8.
 */
$(function () {
    $.ajax({
        url:"http://"+ip+":9090/api/getgsshop",
        type:"get",
        success:function (data) {
            console.log(data);

            var html = template('tpl',data);
            $('#li1 ul').html(html);
        }
    });

    $('.first-area').on('click',function () {
        $('.areas-lis1').toggle().siblings().hide();
    });

    $.ajax({
        url:"http://"+ip+":9090/api/getgsshoparea",
        type:"get",
        success:function (data) {
            console.log(data);
            var wid = 0;

            var html = template('tpl1',data);
            $('#li2 ul').html(html);
        }
    });

    $('.second-area').on("click",function () {
        $('.areas-lis2').toggle().siblings().hide();
    });


    $('.price').on('click',function () {
        $('.areas-lis3').toggle().siblings().hide();
    });

    var shopid = 0;
    var areaid = 0;

    function render(shopid,areaid) {
        $.ajax({
            url:"http://"+ip+":9090/api/getgsproduct",
            type:"get",
            data:{
                shopid:shopid,
                areaid:areaid
            },
            success:function (data) {
                // console.log(data);
                $('.gs-product ul').html(template('tpl2',data))
            }
        })
    }

    render(shopid,areaid);

    $('.areas-lis1').on('click','li',function () {
        $('.first-area').html($(this).html());
        $(this).parent().parent().hide();
        $(this).addClass('red-bg').siblings().removeClass('red-bg');
        shopid = $(this).data('shopid');
        render(shopid,areaid);
    });

    $('.areas-lis2').on('click','li',function () {
        var arr =[];
        arr.push($(this).html().split("（"));
        // console.log(arr);
        $('.second-area').html(arr[0][0]);
        $(this).parent().parent().hide();
        $(this).addClass('red-bg').siblings().removeClass('red-bg');
        areaid = $(this).data('areaid');
        render(shopid,areaid);
    });
});