$(function(){


  $(".prev").click(function(){
    if($(".store_info").is(":animated")) return false;
    var last = $(".store_info > li").last();
    $(".store_info").prepend(last).css("left","-1310px").animate({"left":"0px"},700);
  });

  $(".next").click(function(){
    if($(".store_info").is(":animated")) return false;
    var first = $(".store_info > li").first();
    $(".store_info").animate({"left":"-1310px"},700,function(){
      $(this).append(first).css("left","0px");
    });
  });



})