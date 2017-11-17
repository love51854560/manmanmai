/**
 * Created by 朱青亮 on 2017/11/6.
 */
$(function () {
    var cate = tools.getValue('category');
    var cateId = tools.getValue('categoryId');
    var pageid = tools.getValue('pageid') || 1;
    // console.log(cate);
    // console.log(cateId);

    $.ajax({
        url:"http://"+ip+":9090/api/getcategorybyid",
        type:'get',
        data:{
            categoryid:cateId
        },
        success:function (data) {
            // console.log(data);
            var html = template('tpl',data);
            $('.nav-lis').html(html);
        }
    });

    $.ajax({
        url:"http://"+ip+":9090/api/getproductlist",
        type:'get',
        data:{
            pageid:pageid,
            categoryid:cateId
        },
        success:function (data) {
            console.log(data);
            var pages = Math.ceil(data.totalCount/data.pagesize);
            data.pageid = pageid;
            data.pages = pages;
            data.categoryId = cateId;
            data.category = cate;

            var html = template('tpl1',data);
            $('.products').html(html);
        }
    });

    $('.products').on('change','select',function () {
        var pageid = $(this).val();

        location.href = "productlist.html?category="+cate+"&categoryId="+cateId+"&pageid="+pageid;
    })


});
