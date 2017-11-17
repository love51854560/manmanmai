/**
 * Created by 朱青亮 on 2017/11/7.
 */
$(function () {

    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005,
        scrollX:true,
        scrollY:false,
        indicators:false
    });

    $.ajax({
        url:"http://"+ip+":9090/api/getbaicaijiaproduct",
        type:"get",
        data:{
            titleid:0
        },
        success:function (data) {
            console.log(data);
            var html = template('tpl1',data);
            $('.bc-lists ul').html(html);
        }
    });


    $.ajax({
        url:"http://"+ip+":9090/api/getbaicaijiatitle",
        type:'get',
        success:function (data) {
            console.log(data);
            var html = template('tpl',data);
            $('#scroll').html(html);
            var lis = $('#scroll').children('li');
            var wid = 0;
            lis.each(function (index,ele) {
                wid += $(ele).width();
            });
            // console.log(wid);
            $('#scroll').css({width:wid+50+'px'})
        }
    });

    $('#scroll').on('click','li',function () {
        var titleid = $(this).data('titleid');
        $(this).addClass('bc-now').siblings().removeClass('bc-now');
        $.ajax({
            url:"http://"+ip+":9090/api/getbaicaijiaproduct",
            type:"get",
            data:{
                titleid:titleid
            },
            success:function (data) {
                console.log(data);
                var html = template('tpl1',data);
                $('.bc-lists ul').html(html);
            }
        })
    });
});


