// var a=10;
// var b="aajjdh";
// var c={};
// var d=true;
// alert(d);

// 获取对象
var one = document.querySelector(".one");
// 监听页面滚动
// window.onscroll=function(){
//     console.log(1);
//     // 控制台
//     // 获取当前滚动高度 top
//     var top = document.documentElement.scrollTop;
//     if(top<window.innerWidth-300)
//         one.style.left=top+"px";
//     else{

//         one.style.left=window.innerWidth-300+"px" ;
//     }
// }


var speed = 45 / window.innerHeight;
window.onscroll = function() {
        var top = document.documentElement.scrollTop;
        var ang = top * speed;
        if (ang <= 45) {
            one.style.transfrom = "rotate(10deg);";
        } else {
            one.style.transfrom = "rotateY(0)";
        }
    }
    // 网页内容加载完成
window.onload = function() {
    document
}