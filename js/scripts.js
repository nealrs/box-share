//derp

$("#share-show").click(function(){
  $("#share-hide").show();
  $(this).hide();
  $("#share-widget").show();
  $("#share-controls").css("color", "#505050");

});

$("#share-hide").click(function(){
  $("#share-show").show();
  $(this).hide();
  $("#share-widget").hide();
  $("#share-controls").css("color", "#111111");
});
