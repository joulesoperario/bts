let btnContainer = document.getElementsByClassName("container");

let img = document.querySelectorAll(".img-cont")

let text = document.querySelectorAll(".text")




for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

  });
}
