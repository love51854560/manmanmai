/**
 * Created by 朱青亮 on 2017/11/8.
 */
$(function () {
   $.ajax({
       url:"http://"+ip+":9090/api/getsitenav",
       type:"get",
       success:function (data) {
           console.log(data);
           var html = template('tpl',data);
           $('.shop-lis ul').html(html);
       }
   })
});
