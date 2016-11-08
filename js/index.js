/**
 * Created by yangger on 2016/10/18.
 */
"use strict"
$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.slider').slider({height:600});
    $('.parallax').parallax();
    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrain_width: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
    );
    $("#main").css("height",$(".contain")[0].scrollHeight+$(".slider")[0].scrollHeight+"px");
    $("#back-to-top").fadeOut(1500);
});
window.onload=function () {
    $("#main").css("height",$(".contain")[0].scrollHeight+$(".slider")[0].scrollHeight+"px");
    var options = [
        {selector: '#gulid', offset: 600, callback:Materialize.showStaggeredList("#gulid") },
        {selector: '#staggered-test', offset: 50, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' }
    ];
    Materialize.scrollFire(options);
    $(function(){
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#back-to-top").fadeIn(1500);
                }
                else
                {
                    $("#back-to-top").fadeOut(1500);
                }
            });

            //当点击跳转链接后，回到页面顶部位置

            $("#back-to-top").click(function(){
                $('body,html').animate({scrollTop:0},1000);
                return false;
            });
        });
    });
};

