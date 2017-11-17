/**
 * Created by 朱青亮 on 2017/11/7.
 */
$(function () {
    var productid = tools.getValue('productid');
    var category = tools.getValue('category');
   $.ajax({
       url:"http://"+ip+":9090/api/getproduct",
       type:'get',
       data:{
           productid:productid
       },
       success:function (data) {
           // console.log(data);
           // data.category = category;
           var html = template('tpl',data);
           $('.product-pic').html(html);
       }
   });

    $.ajax({
        url:"http://"+ip+":9090/api/getproductcom",
        type:'get',
        data:{
            productid:productid
        },
        success:function (data) {
            // console.log(data);
            var html = template('tpl1',data);
            $('.comment-lis .lis').html(html);
        }
    });

    $.ajax({
        url:"http://"+ip+":9090/api/getproduct",
        type:'get',
        data:{
            productid:productid
        },
        success:function (data) {
            var arr = [];
            // console.log(data);
            var name = data.result[0].productName;
            arr.push(name.split(" "));
            // console.log(arr);
            data.proName = arr[0];
            data.category = category;
            var html = template('tpl2',data);
            $('.nav-lis').html(html);
        }
    });
    
});