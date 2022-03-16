$(document).ready(function () {
    
$(".menu_btn").click(function (e) { 
  $(".mobile_menu").addClass("active");
});
$(".mobile_menu_btn").click(function (e) { 
  $(".mobile_menu").removeClass("active");
});



  $("#m a").click(function (e) { 
    e.preventDefault();
    $(".ss, .bb, .dd").hide(300);
    $(".mm").show(300);
  });
  $("#s a").click(function (e) { 
    e.preventDefault();
    $(".mm, .bb, .dd").hide(300);   
    $(".ss").show(300);
  });
  $("#b a").click(function (e) { 
    e.preventDefault();
    $(".ss, .mm, .dd").hide(300);
    $(".bb").show(300);
  });
  $("#d a").click(function (e) { 
    e.preventDefault();
    $(".ss, .bb, .mm").hide(300); 
    $(".dd").show(300);
  });
  $("#all a").click(function (e) { 
    e.preventDefault(300);
    $(".mm, .ss, .bb, .dd").show(300);
  });

  




});