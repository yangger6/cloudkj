/**
 * Created by yangger on 2016/11/20.
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

};

