var GuidUrl = "http://localhost:65012/guid.ashx";
var GuidStrLen = 40;

//1-2S超时
//快 1ms

///获得GUID的内容
///GuidUrl        :获得guid的路径
///successFunction:成功时触发的函数
function getGUID() {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.open("POST", GuidUrl, false);

    //添加监听事件
    var GUIDText = ""; //GUID内容
    xhr.onerror = function(){
        clearTimeout(timer1);//清空定时器
    };
    xhr.onload = function(e){
        if((e.target.readyState == 4) && (e.target.status == 200)) {
            //获得内容
            if(e.target.responseText.length <= GuidStrLen) GUIDText = e.target.responseText;
            else GUIDText = "";

            clearTimeout(timer1);//清空定时器
        }
    };

    var timer1 = setTimeout(function() {
        if (xhr) xhr.abort();
        GUIDText = "";
    }, 2000);
    xhr.send("");

    return GUIDText;
}
