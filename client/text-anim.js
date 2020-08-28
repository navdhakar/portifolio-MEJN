console.log("script loaded");
var ms = document.getElementById("msg1");

var i = 0;
function blink() {
  if (ms.style.color == "rgb(255,255,55)") {
    ms.style.color = "rgb(0,0,0)";
  } else {
    ms.style.color = "rgb(255,255,55)";
  }
}
setInterval(blink, 1000);
