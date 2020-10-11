/** @format */

const navl = document.getElementById('navl');
var proj = document.getElementById('projects');
var prl = document.createElement('div');
navl.style.width = '50px';
navl.style.height = '150px';
navl.addEventListener('mouseover', exp);

function exp() {
  navl.style.width = '1200px';
  navl.style.height = '700px';
  navl.style.marginLeft = '200px';

  navl.style.marginTop = '-350px';
}
navl.addEventListener('mouseout', shr);
function shr() {
  navl.style.width = '50px';
  navl.style.height = '150px';
  navl.style.marginTop = '-120px';
  navl.style.marginLeft = '1320px';
  proj.style.display = 'none';
}
// navl.addEventListener('mouseout', shr);
// function shr() {
//   n.style.height = '120px';
//   ab.innerHTML = '';
//   ln.style.display = 'none';
//   bio.style.display = 'none';
//   modern.style.display = 'none';
// }
