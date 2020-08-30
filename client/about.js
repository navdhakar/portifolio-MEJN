var n = document.getElementById("nav");
var pr = document.getElementById("profile");
pr.addEventListener("mouseover", exp);
var ab = document.createElement("h4");
var ln = document.createElement("div");
var con = document.createElement("p");
function exp() {
  ln.style.display = "";
  n.style.height = "400px";
  n.appendChild(ab);
  n.appendChild(ln);
  ln.appendChild(con);
  ab.innerHTML = "About";
  ab.style.fontFamily = "font-family: 'Londrina Solid', cursive";
  ab.style.marginLeft = "48%";
  ab.style.marginTop = "-50px";
  ab.style.backgroundColor = "#f3ec78";
  ab.style.backgroundImage = "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)";

  ab.style.backgroundClip = "text";
  ab.style.webkitBackgroundClip = "text";
  ab.style.mozBackgroundClip = "text";
  ab.style.webkitTextFillColor = "transparent";
  ab.style.webkitTextFillColor = "transparent";
  ab.style.textShadow = "6px 0 8px rgba(59, 18, 209, 0.3)";
  ln.style.width = "400px";
  ln.style.borderTop = "1px solid rgb(196, 199, 184)";
  ln.style.marginLeft = "37%";
}
pr.addEventListener("mouseout", shr);
function shr() {
  n.style.height = "120px";
  ab.innerHTML = "";
  ln.style.display = "none";
}
