const color = document.querySelector(".quote");
function changeColor() {
  color.style.color = "pink";
}

let button = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
