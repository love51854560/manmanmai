/**
 * Created by 朱青亮 on 2017/11/6.
 */
$(function () {
   $.ajax({
       url:"http://" + ip + ":9090/api/getcategorytitle",
       type:'get',
       success:function (data) {
           // console.log(data);
           var html = template('tpl',data);
           $('.cate-big').html(html);
       }
   });

    $('.cate-big').on('click','.cate-big-lis',function () {
        var $this = $(this);

        var titleid = $(this).data('titleid');
        $.ajax({
            url:"http://" + ip + ":9090/api/getcategory",
            type:'get',
            data:{
                titleid:titleid
            },
            success:function (data) {
                var html = template('tpl1',data);
                $this.find('.cate-small').html(html);
                $this.find('.cate-small').toggleClass('show');
            }
        })
    })
});