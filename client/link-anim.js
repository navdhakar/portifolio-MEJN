var t = document.getElementById("tw-cont");
var ti = document.getElementById("twitter");
var g = document.getElementById("gh-cont");
var gi = document.getElementById("github");

t.addEventListener("mouseover", tout);

function tout() {
  t.style.width = 150 + "px";
  ti.style.marginLeft = 100 + "px";
}
t.addEventListener("mouseout", tinner);

function tinner() {
  t.style.width = 60 + "px";
  ti.style.marginLeft = 0 + "px";
}

g.addEventListener("mouseover", gout);

function gout() {
  g.style.backgroundColor = "rgb(75, 233, 75)";
  g.style.width = 150 + "px";
  gi.style.marginLeft = 100 + "px";
}
g.addEventListener("mouseout", ginner);

function ginner() {
  g.style.width = 60 + "px";
  gi.style.marginLeft = 0 + "px";
  g.style.backgroundColor = "transparent";
}
