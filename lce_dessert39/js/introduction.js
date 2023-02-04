$(function(){

    $("#topBtn").click(function(){
        // window.scrollTo({top:0, behavior:'smooth'});
        $("html, body").animate({scrollTop:0},400);
        return false;
    });

   
    // var winWd = $(window).width();
    // var winHt = $(window).height();
    // if(winHt >= 1200){
    //     $("#contain .wrap .about .about_circle .cir_big_area > li > .black_txt").css("display","block");
    // }

    $(function(){
        $(window).scroll(function(){
          var winHt = $(document).scrollTop();
          if(winHt >= 1200){
            // $("#contain .wrap .about .about_circle .cir_big_area > li > .black_txt").css("display","block");
            $("#contain .wrap .about .about_circle .cir_big_area > li > .black_txt").css("opacity","100%");
          }
          else{
            // $("#contain .wrap .about .about_circle .cir_big_area > li > .black_txt").css("display","none");
            $("#contain .wrap .about .about_circle .cir_big_area > li > .black_txt").css("opacity","0%");
          }
        });
       });


})