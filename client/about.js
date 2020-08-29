var n = document.getElementById("nav");
var pr = document.getElementById("profile");
pr.addEventListener("mouseover", exp);
var ab = document.createElement("h3");
function exp() {
  n.style.height = "400px";
  n.appendChild(ab);
  ab.innerHTML = "About";
  ab.style.marginLeft = "48%";
  ab.style.marginTop = "-50px";
}
pr.addEventListener("mouseout", shr);
function shr() {
  n.style.height = "120px";
  ab.innerHTML = "";
}
