/**
 * Created by 朱青亮 on 2017/11/7.
 */
$(function () {
   $.ajax({
       url:"http://"+ip+":9090/api/getinlanddiscount",
       type:'get',
       success:function (data) {
           console.log(data);
           var html = template('tpl',data);
           $('.discontent').html(html);
       }
   })
});