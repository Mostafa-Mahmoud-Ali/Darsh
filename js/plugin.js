/*global $, document, window*/
$(document).ready(function () {

    "use strict";
    //$("html").niceScroll(); neaded update jQuery
            //////////////////////////////////////////
    $('.carousel').carousel({interval: 4000});
            //////////////////////////////////////////
    $('.gear').click(function () {
        $(".color-option").fadeToggle(500);
    });
            //////////////////////////////////////////
    $('.color-option ul li')
            .eq(0).css("background", "#4971e4").end()
            .eq(1).css("background", "#e400ff").end()
            .eq(2).css("background", "#05b945").end()
            .eq(3).css("background", "rgb(232, 154, 10)").end()
            .eq(4).css("background", "#e41b17");
            //////////////////////////////////////////
            
            
            
    $('.option-box .color-option ul li').click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
            
            
            
            //////////////////////////////////////////
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 630) {
            $('.scroll-top').fadeIn(500);
        } else {
            $('.scroll-top').fadeOut(500);
        }
    });
    $('.scroll-top').click(function () {
        $('body').animate({scrollTop: 0}, 2000);
    });
            
});


            ////////////////////////////////////////////////
            ////////////////////////////////////////////////
            ////////////////////////////////////////////////
$('body').css("overflow", "hidden");
$(window).load(function () {
    "use strict";
    $('.loading-screen #all').fadeOut(2000, function () {
        $('body').css("overflow", "auto");
        $(this).parent().fadeOut(1000, function () {
            $('.loading-screen').remove();
        });
    });
});