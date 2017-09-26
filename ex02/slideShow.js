var index = 0;
var slides = document.getElementsByClassName("slide");

function nextImage() {
  index = (slides.length - 1 > index) ? index + 1 : 0;
  setImage(index);
}

function prevImage() {
  index = (0 < index) ? index - 1 : slides.length - 1;
  setImage(index);
}

function setImage(i) {
  var x = 0;
  for (x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[i].style.display = "block";
}

