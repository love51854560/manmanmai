/**
 * Created by 朱青亮 on 2017/11/8.
 */
$(function () {
    var brandtitleid = tools.getValue('brandTitleId');

   $.ajax({
       url:"http://"+ip+":9090/api/getbrand",
       type:"get",
       data:{
           brandtitleid:brandtitleid
       },
       success:function (data) {
           console.log(data);
           var html = template('tpl',data);
           $('.brand-sort ul').html(html);
           $('.brand-sort ul li:first-child b').css({backgroundColor:"#f10e0e"});
           $('.brand-sort ul li:nth-child(2) b').css({backgroundColor:"#ff9314"});
           $('.brand-sort ul li:nth-child(3) b').css({backgroundColor:"#8adf5b"});
       }
   });

    $.ajax({
        url:"http://"+ip+":9090/api/getbrandproductlist",
        type:"get",
        data:{
            brandtitleid:brandtitleid,
            pagesize:4
        },
        success:function (data) {
            console.log(data);
            var html = template('tpl1',data);
            $('.products').html(html);
            // console.log(data.result[0].productId);
            var productid = data.result[0].productId;
            var productImg = data.result[0].productImg;
            var productName = data.result[0].productName;
            // console.log(productImg);

            $.ajax({
                url:"http://"+ip+":9090/api/getproductcom",
                type:"get",
                data:{
                    productid:productid
                },
                success:function (data) {
                    console.log(data);
                    data.productImg = productImg;
                    data.productName = productName;
                    $('.product-com ul').html(template('tpl2',data));
                }
            })
        }
    });
});