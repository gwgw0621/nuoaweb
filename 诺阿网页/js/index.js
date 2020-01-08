// var ban = document.querySelector(".banner");
// 监听页面滚动
// window.onscroll = function() {
//     console.log(1);
//     // 控制台
//     // 获取当前滚动高度 top

//     var top = document.documentElement.scrollTop;
//     if (top > 200)
//         ban.style.position = "static";
//     // if (top < window.innerWidth - 300)
//     //     ban.style.left = top + "px";
//     // else {
//     //     ban.style.position = "static";
//     //     ban.style.left = window.innerWidth - 300 + "px";
//     // }
// }
var ban = document.querySelector(".banner");
var ka = document.querySelector(".ka");
window.onload = function() {


}
window.onscroll = function() {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    // console.log(1);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log("滚动距离" + scrollTop);
    if (scrollTop < 120) {
        ka.style.margin = "0px " + scrollTop * 4 + "px";
    }
    if (scrollTop > 300) {
        ban.style.position = "static";

    }
    var gong = document.querySelector(".b1");
    if (scrollTop < 610 && scrollTop > 250) {

        gong.style.margin = "0px " + (scrollTop - 250) + "px";
        gong.style.opacity = (scrollTop - 250) / 360;
    } else if (scrollTop > 610) {
        gong.style.margin = "0px 360px";
        gong.style.opacity = 1.0;
    }
    var lefts = document.querySelector(".lefts");
    if (scrollTop < 633 && scrollTop > 300) {
        lefts.style.opacity = (scrollTop - 300) / 333;
        lefts.style.left = (scrollTop - 300) * 3 - 1360 + "px";
    } else if (scrollTop > 633) {
        lefts.style.opacity = 1.0;
        lefts.style.left = "-360px";
    }
    var beijin = document.querySelector(".beijin");
    var rets = document.querySelector(".rets");
    if (scrollTop < 750 && scrollTop > 300) {
        var t1 = 600 / (750 - 300);
        rets.style.transform = "translateX(" + (600 - ((scrollTop - 300) * t1)) + "px)"
        beijin.style.opacity = (scrollTop - 300) / t1;
    } else if (scrollTop > 750) {
        beijin.style.opacity = 1.0;
        rets.style.transform = "translateX(0px)"
    }




}