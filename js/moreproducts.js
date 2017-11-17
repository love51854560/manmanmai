$(function () {
    var pageid = tools.getValue('pageid') || 1;
    
   $.ajax({
       url:"http://"+ip+":9090/api/getmoneyctrl",
       data:{
           pageid:pageid
       },
       type:'get',
       success:function (data) {
           console.log(data);
           var pages = Math.floor(data.totalCount/data.pagesize);
           // console.log(pages);
           data.pageid = pageid;
           data.pages = pages;
           var html = template('tpl',data);
           $('.content').html(html);
       }
   });

    $('.content').on('change','select',function () {
        var pageid = $(this).val();
        location.href = "http://www.mmp.com/mmp/moneyctrl.html?pageid="+pageid;
    })
});
