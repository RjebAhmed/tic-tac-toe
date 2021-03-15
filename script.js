//declataions
const Button = document.querySelectorAll("button");
const ver = document.querySelector(".ver");
const hor = document.querySelector(".hor");
const diag = document.querySelector(".diag");
const result = document.querySelector(".result");

var xo = ["", "", "", "", "", "", "", "", ""];
var x = 0;
//events
for (let i = 0; i < Button.length; i++) {
  Button[i].addEventListener("click", function () {
    if ((x == 0) & (Button[i].innerHTML == "")) {
      Button[i].innerHTML = '<img src="X.png" alt="">';
      x++;
      xo[i] = "x";
    }
    if ((x == 1) & (Button[i].innerHTML == "")) {
      Button[i].innerHTML = '<img src="O.png" alt="">';
      x--;
      xo[i] = "o";
    }
    play();
  });
}
function play() {
  if (
    (xo[0] == "x") & (xo[1] == "x") & (xo[2] == "x") ||
    (xo[0] == "o") & (xo[1] == "o") & (xo[2] == "o")
  ) {
    win();
    hor.style.display = "flex";
  }
  if (
    (xo[4] == "x") & (xo[5] == "x") & (xo[3] == "x") ||
    (xo[4] == "o") & (xo[5] == "o") & (xo[3] == "o")
  ) {
    win();
    hor.style.display = "flex";
    hor.style.bottom = "370px";
  }
  if (
    (xo[6] == "x") & (xo[8] == "x") & (xo[7] == "x") ||
    (xo[6] == "o") & (xo[8] == "o") & (xo[7] == "o")
  ) {
    win();
    hor.style.display = "flex";
    hor.style.bottom = "270px";
  }
  if (
    (xo[0] == "x") & (xo[3] == "x") & (xo[6] == "x") ||
    (xo[0] == "o") & (xo[3] == "o") & (xo[6] == "o")
  ) {
    win();
    ver.style.display = "flex";
  }
  if (
    (xo[1] == "x") & (xo[4] == "x") & (xo[7] == "x") ||
    (xo[1] == "o") & (xo[4] == "o") & (xo[7] == "o")
  ) {
    win();
    ver.style.display = "flex";
    ver.style.left = "672px";
  }
  if (
    (xo[2] == "x") & (xo[5] == "x") & (xo[8] == "x") ||
    (xo[2] == "o") & (xo[5] == "o") & (xo[8] == "o")
  ) {
    win();
    ver.style.display = "flex";
    ver.style.left = "772px";
  }
  if (
    (xo[2] == "x") & (xo[4] == "x") & (xo[6] == "x") ||
    (xo[2] == "o") & (xo[4] == "o") & (xo[6] == "o")
  ) {
    win();
    diag.style.display = "flex";
  }
  if (
    (xo[0] == "x") & (xo[4] == "x") & (xo[8] == "x") ||
    (xo[0] == "o") & (xo[4] == "o") & (xo[8] == "o")
  ) {
    win();
    diag.style.display = "flex";

    diag.style.transform = "rotate(135deg)";
  }
}
Button[9].addEventListener("click", function () {
  if (Button[9].innerText == "play again") {
    Button[9].innerText = "clear";
  }
  for (let j = 0; j < 9; j++) {
    Button[j].innerHTML = "";
    xo[j] = "";
  }
  diag.style.display = "none";
  ver.style.display = "none";
  hor.style.display = "none";
  result.style.display = "none";
  document.querySelector(".xoContainer").style.opacity = "1";
});

function win() {
  result.style.display = "block";
  Button[9].innerText = "play again";
  document.querySelector(".xoContainer").style.opacity = "0.2";
}
