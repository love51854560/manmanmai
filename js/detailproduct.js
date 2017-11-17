/**
 * Created by 朱青亮 on 2017/11/6.
 */
$(function () {
    var id = tools.getValue('productid');

    $.ajax({
        url: "http://" + ip + ":9090/api/getmoneyctrlproduct",
        type:'get',
        data:{
            productid:id
        },
        success:function (data) {
            console.log(data);
            var html = template('tpl',data);
            $('.content').html(html);
        }
    })
});
