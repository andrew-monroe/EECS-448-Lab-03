function changeColors() {
  var myParagraph = document.getElementById("dummy");

  var bordRed = document.forms["stylizer"]["border-red"].value;
  var bordGreen = document.forms["stylizer"]["border-green"].value;
  var bordBlue = document.forms["stylizer"]["border-blue"].value;
  var bordWidth = document.forms["stylizer"]["border-width"].value;
  var backRed = document.forms["stylizer"]["background-red"].value;
  var backGreen = document.forms["stylizer"]["background-green"].value;
  var backBlue = document.forms["stylizer"]["background-blue"].value;

  var newBorderString = "" + bordWidth + "px solid rgb(" + bordRed + "," + bordGreen + "," + bordBlue + ")";
  var newBackgroundString = "rgb(" + backRed + "," + backGreen + "," + backBlue + ")"

  myParagraph.style.border = (newBorderString);
  myParagraph.style.backgroundColor = (newBackgroundString);
}