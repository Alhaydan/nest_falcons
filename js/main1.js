// ############################################################
// ######################## Applied JS ########################
// ############################################################

// ScrollTo in action
// Notice the information in the scrollTo method is greatly simplified
// All you need to supply is the scrollTo target and the duration in milliseconds (1000ms = 1s)
$("#goHome").click(function() {
  $.scrollTo("#Home", 600);
  // $.scrollTo("#category", 600);
  // $.scrollTo("#gall", 600);
  // $.scrollTo("#C", 600);
});
$("#goCategory").click(function() {
  $.scrollTo("#category", 600);
  // $.scrollTo("#gall", 600);
  // $.scrollTo("#C", 600);
});
$("#goGallery").click(function() {
  $.scrollTo("#gall", 600);
  // $.scrollTo("#C", 600);
});
$("#goC").click(function() {
  // $.scrollTo("#gall", 600);
  $.scrollTo("#C", 600);
});
