/**
 * Created by 朱青亮 on 2017/11/7.
 */
$(function () {
    $.ajax({
        url:"http://"+ip+":9090/api/getcoupon",
        type:"get",
        success:function (data) {
            console.log(data);
            var html = template('tpl',data);
            $('.coupon ul').html(html);
        }
    })
});
