/**
 * Created by 朱青亮 on 2017/11/8.
 */
$(function () {
   $.ajax({
       url:"http://"+ip+":9090/api/getbrandtitle",
       type:"get",
       success:function (data) {
           console.log(data);
           var html = template('tpl',data);
           $('.total-brand ul').html(html);
       }
   })
});
