/**
 * Created by 朱青亮 on 2017/11/7.
 */
$(function () {
    var productid = tools.getValue('productid');
    $.ajax({
        url:"http://"+ip+":9090/api/getdiscountproduct",
        type:'get',
        data:{
            productid:productid
        },
        success:function (data) {
            console.log(data);
            var html = template('tpl',data);
            $('.content').html(html);
        }
    })
});
