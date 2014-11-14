//derp

$("#share-show").click(function(){
  $("#share-hide").show();
  $(this).hide();
  $("#share-buttons").show();
  $("#share-controls").css("color", "#505050");

});

$("#share-hide").click(function(){
  $("#share-show").show();
  $(this).hide();
  $("#share-buttons").hide();
  $("#share-controls").css("color", "#111111");
});


$(".share-facebook").click(function(){
  console.log("f share - "+ document.URL);
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + document.URL);
});

$(".share-twitter").click(function(){
  console.log("t share - "+ document.URL);
  window.open("https://twitter.com/home?status="+ escape(document.title) + "-" + document.URL);
});

$(".share-google").click(function(){
  console.log("g share - "+ document.URL);
  window.open("https://plus.google.com/share?url=DERP" + document.URL);
});

$(".share-email").click(function(){
  console.log("e share - "+ document.URL);
  window.open("mailto:?subject=Check%20this%20out&Body="+document.URL);
});
