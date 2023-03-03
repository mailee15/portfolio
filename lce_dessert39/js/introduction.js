$(function(){

  //윈도우크기 줄어들면 gnb메뉴가 flex되어 상단표출
  $(window).resize(function(){
    var winWidth = $(window).width();

    if(winWidth > 1600){
      $(".headAll .gnb").css("display","block");
    }else if(winWidth > 1068){
      $(".headAll .gnb").css("display","flex");
    }else{
      $(".headAll .gnb").css("display","none");
  }}
);

//  메뉴 토글버튼 > .sub 아코디언메뉴
  // $(".headAll .gnb > li").click(function(){
  //   $(this).children().slideToggle("fast");
  // })
  $(".headAll .toggle").click(function(){
    $(".headAll .gnb").slideToggle("fast");
  })



    $("#topBtn").click(function(){
        // window.scrollTo({top:0, behavior:'smooth'});
        $("html, body").animate({scrollTop:0},400);
        return false;
    });

    //우측하단 fixed된 top버튼들이 특정 위치부터 나타나게 하기
    $(function(){
      $(window).scroll(function(){
        var scroll_height = $(document).scrollTop();
        if(600 <= scroll_height){
          $(".Btn").fadeIn();
        }
        else{
          $(".Btn").fadeOut();
        }
      });
     });
   
    // var winWd = $(window).width();
    // var winHt = $(window).height();
    // if(winHt >= 1200){
    //     $("#contain .wrap .about .about_circle .cir_big_area > li > .black_txt").css("display","block");
    // }

    // var winHt = $(document).scrollTop();

    $(function(){
      // var winHt = $(document).scrollTop();

      $(window).scroll(function(){
        var winHt = $(document).scrollTop();
        if(winHt >= 1400){
          // $("#contain .wrap .about .about_circle .cir_big_area > li > .black_txt").css("display","block");
          $("#contain .wrap .about .about_circle .cir_big_area > li > .black_txt").css("opacity","100");
        }
        else{
          // $("#contain .wrap .about .about_circle .cir_big_area > li > .black_txt").css("display","none");
          $("#contain .wrap .about .about_circle .cir_big_area > li > .black_txt").css("opacity","0");
        }
      });

      
      $(window).scroll(function(){
        var winHt = $(document).scrollTop();
        if(winHt >= 1860){
          $(".cir_small_fir").slideDown(3000);
          $(".cir_small_sec").slideDown(3500);
          $(".cir_small_thr").slideDown(5000);
        }
      });
    

      
      //여기부터 안되는듯
      // $(window).scroll(function(){
      //   var winHt = $(document).scrollTop();
      //   if(winHt >= 1800){

      //     $(".cir_small_area > .fir > .arrow").css({"opacity":"100"},{"transform":"translateY(70px)"});
      //     // $(".cir_small_area > .sec > .arrow").animate({top:"70px"},1400);
      //     // $(".cir_small_area > .thr > .arrow").animate({top:"70px"},2100);
      //   }
      // });
      
    });

    // $(function(){
    //   

    //   $(window).scroll(function(){
    //   var winHt = $(document).scrollTop();
    //     if(winHt >= 2000){
    //       // $(".cir_small_area > .fir > .arrow").css("animation","arrowdown 1s 0.7s linear");
    //       // $(".cir_small_area > .sec > .arrow").css("animation","arrowdown 1s 1.4s linear");
    //       // $(".cir_small_area > .thr > .arrow").css("animation","arrowdown 1s 2.1s linear");

    //       $(".cir_small_area > .fir > .arrow").css("opacity","100").animate({top:"70px"},700);
    //       // $(".cir_small_area > .sec > .arrow").animate({top:"70px"},1400);
    //       // $(".cir_small_area > .thr > .arrow").animate({top:"70px"},2100);
    //     }
    //   })
    // });

})