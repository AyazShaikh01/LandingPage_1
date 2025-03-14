$("#toggleDown").click(function(){
    $("#toggleDown").hide();
    $("#toggleUp").show();
    $("#sideBar").slideDown();
  });
  
  $("#toggleUp").click(function(){
    $("#toggleDown").show();
    $("#toggleUp").hide();
    $("#sideBar").slideUp();
  });