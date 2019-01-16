$("button").click(function() {
    $("#box").show();
    $(".p1").show ();
});

$(".box").click(function() {
    $(".box").hide ();
    $(".p1").hide();
    $("button").hide ();
    $("#treasure").show();
    $(".p2").show();    
     $("body").addClass("blue");
});

$(".treasure").dblclick(function() {
     $(".treasure").css("background-color","#ff8000");
     $(".treasure").hide();
     $("#blue").show();
    
});

$(".blue").mouseenter(function() {
    $(".treasure").slideToggle();
    $(".p3").show();
    $(".p2").hide();
    $("#bts").show();
    $(".treasure").hide();
    $("#bts").show();
    $(".p4").show();
  
});

