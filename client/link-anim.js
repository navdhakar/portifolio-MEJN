var t = document.getElementById("tw-cont");
var ti = document.getElementById("twitter");
var g = document.getElementById("gh-cont");
var gi = document.getElementById("github");
var l = document.getElementById("li-cont");
var li = document.getElementById("linkedin");
var inst = document.getElementById("in-cont");
var insti = document.getElementById("insta");
var f = document.getElementById("f-cont");
var fi = document.getElementById("facebook");

t.addEventListener("mouseover", tout);

function tout() {
  t.style.width = 150 + "px";
  ti.style.marginLeft = 100 + "px";
}
t.addEventListener("mouseout", tinner);

function tinner() {
  t.style.width = 50 + "px";
  ti.style.marginLeft = 0 + "px";
}

g.addEventListener("mouseover", gout);

function gout() {
  g.style.backgroundColor = "rgba(228, 112, 34,0.8";
  g.style.width = 150 + "px";
  gi.style.marginLeft = 100 + "px";
}
g.addEventListener("mouseout", ginner);

function ginner() {
  g.style.width = 50 + "px";
  gi.style.marginLeft = 0 + "px";
  g.style.backgroundColor = "transparent";
}
l.addEventListener("mouseover", lout);

function lout() {
  l.style.backgroundColor = "rgba(20, 127, 177,0.8)";
  l.style.width = 150 + "px";
  li.style.marginLeft = 100 + "px";
}
l.addEventListener("mouseout", linner);

function linner() {
  l.style.width = 50 + "px";
  li.style.marginLeft = 0 + "px";
  l.style.backgroundColor = "transparent";
}
inst.addEventListener("mouseover", instout);

function instout() {
  inst.style.backgroundColor = "rgba(251, 57, 88,0.8)";
  inst.style.width = 150 + "px";
  insti.style.marginLeft = 100 + "px";
}
inst.addEventListener("mouseout", instinner);

function instinner() {
  inst.style.width = 50 + "px";
  insti.style.marginLeft = 0 + "px";
  inst.style.backgroundColor = "transparent";
}
f.addEventListener("mouseover", fout);

function fout() {
  f.style.backgroundColor = "rgba(66,103,178,0.8)";
  f.style.width = 150 + "px";
  fi.style.marginLeft = 100 + "px";
}
f.addEventListener("mouseout", finner);

function finner() {
  f.style.width = 50 + "px";
  fi.style.marginLeft = 0 + "px";
  f.style.backgroundColor = "transparent";
}
