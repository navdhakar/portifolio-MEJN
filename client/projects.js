/** @format */

const navl = document.getElementById('navl');
var prj = document.getElementById('projects');
var prl = document.createElement('div');
var projec = document.getElementById('projec');
var lang = document.getElementById('lang');
navl.style.width = '50px';
navl.style.height = '150px';
navl.addEventListener('mouseover', exp);
projec.style.display = 'none';
prj.style.display = '';
function exp() {
  navl.style.width = '1200px';
  navl.style.height = '700px';
  navl.style.marginLeft = '200px';

  navl.style.marginTop = '-500px';
  prj.style.display = 'none';

  projec.style.display = '';
  navl.style.overflow = 'hidden';
  lang.style.display = 'none';
}
navl.addEventListener('mouseout', shr);
function shr() {
  navl.style.width = '50px';
  navl.style.height = '150px';
  navl.style.marginTop = '-120px';
  navl.style.marginLeft = '1320px';
  prj.style.display = '';
  projec.style.display = 'none';
  lang.style.display = '';
}
// navl.addEventListener('mouseout', shr);
// function shr() {
//   n.style.height = '120px';
//   ab.innerHTML = '';
//   ln.style.display = 'none';
//   bio.style.display = 'none';
//   modern.style.display = 'none';
// }
