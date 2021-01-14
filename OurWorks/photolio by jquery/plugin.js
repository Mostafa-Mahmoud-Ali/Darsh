$(document).ready(function(){
    
    
    
    $('#menue').on("click",function(){
       $('#list').slideDown(700);
    });
    
    
    
    $('#list i').on("click",function(){
       $('#list').slideUp(700);
    });
    
    
    
    $(window).on('scroll',function(){
       if($(this).scrollTop()>=350)
       {$('#up').fadeIn();}
        else{$('#up').fadeOut();}
    });
    
    
    
    $('#up').on({ 
        click:function(){$('html, body').animate({scrollTop:0},800)},
        mouseenter:function(){$(this).css({"color":"lightblue","backgroundColor":"navy"})},
        mouseleave:function(){$(this).css({"color":"navy","backgroundColor":"lightblue"})}
    });
    
    
    
    $('#d1 img, #d2 img, #d3 img').on({
        mouseenter:function(){$(this).css('opacity','0.5')},
        mouseleave:function(){$(this).css('opacity','1')},
    });
    
    
    
    $('#button').on('click',function(){
        $('#alld').toggleClass('.tog');
       if($('#alld').hasClass('.tog'))
          {
       $('#alld').css('marginLeft','-5px');
       $('#d1 ,#d2, #d3').animate({'padding':'10px','width':'410px'},800);
       $('#d1 img, #d2 img, #d3 img').css('marginBottom','7px');
          }
        else
            {
       $('#alld').css('marginLeft','0px');
       $('#d1 ,#d2, #d3').animate({'padding':'0px','width':'420.98px'},800);
       $('#d1 img, #d2 img, #d3 img').css('marginBottom','0px');   
            }
    });
    
    
    
   $('#d1 img, #d2 img, #d3 img').on('click',function(){
       var p = $(this).attr('src');
       $('#ac').fadeIn();
       $('#back').css({'background-color':'#d0d1d0','opacity':'.3'});
       $('#ac img').attr('src',p);
       
   }); 
    
    
    
    $('#ac i').on('click',function(){
       $('#ac').fadeOut();
       $('#back').css({'background-color':'white','opacity':'1'});
   }); 
});