/**
 * Created by 朱青亮 on 2017/11/5.
 */
$(function () {
    $.ajax({
        url:"http://"+ip+":9090/api/getindexmenu",
        type:'get',
        success:function (data) {
            console.log(data);
            var html = template('tpl',data);
            $('.nav-content').html(html);
        }
    });

    $('.nav-content').on('click','li:nth-child(8)',function () {
        $('.nav').toggleClass('addHeight');
    });

    $.ajax({
        type:'get',
        url:"http://"+ip+":9090/api/getmoneyctrl",
        success:function (data) {
            // console.log(data);
            var html = template('tpl2',data);
            $('.product-list .products').html(html);
        }
    })
});