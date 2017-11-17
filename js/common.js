var ip = "172.20.10.8";
var mmp_api = {
    //首页导航页
    nav:"http://"+ip+":9090/api/getindexmenu",
    //商品详情页
    discount:"http://"+ip+":9090/api/getmoneyctrl",
    //分类页
    category:"http://"+ip+":9090/api/getcategorytitle",
    //分类清单
    cateList:"http://"+ip+":9090/api/getcategory",
    //商品列表 要传categoryid
    productIdList:"http://"+ip+":9090/api/getcategorybyid",
    productList:"http://"+ip+":9090/api/getproductlist"
};


var tools = {
    getObj:function () {
        var obj = {};
        var search = location.search;
        search = search.slice(1);
        var arr = search.split('&');
        for(var i = 0 ; i < arr.length;i++){
            var key = arr[i].split('=')[0];
            var value = decodeURI(arr[i].split('=')[1]);
            obj[key] = value;
        }
        return obj;
    },
    getValue:function (key) {
        return this.getObj()[key]
    },
    checkLogin:function (data) {
        if(data.error == 400){
            location.href = 'login.html?reUrl'+location.href;
        }
    }
};