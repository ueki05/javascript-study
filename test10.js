document.write("Hello world!!");

function stop(event) {
  alert('Stop page transfer');
  return false;
}

var btn3 = document.getElementById('foo3');
function sayFoo3() {
  alert('foo3');
}

btn3.onclick = sayFoo3;

var btn4 = document.getElementById('foo4');
btn4.addEventListener('click', function (e) {
  alert('foo4');
}, false);

var p = document.getElementById('foo5');

p.addEventListener('mouseenter', function (e) {
  console.log('mouseenter');
}, false)

p.addEventListener('mouseleave', function (e) {
  console.log('mouseleave');
}, false)

p.addEventListener('mouseover', function (e) {
  console.log('mouseover');
}, false)

p.addEventListener('mouseout', function (e) {
  console.log('mouseout');
}, false)

p.addEventListener('mousemove', function (e) {
  console.log('mousemove');
}, false)

var p2 = document.getElementById('foo6');

p2.addEventListener('click', function (e) {
  console.log('click');
}, false)

p2.addEventListener('dblclick', function (e) {
  console.log('dblclick');
}, false)

p2.addEventListener('mousedown', function (e) {
  console.log('mousedown');
}, false)

p2.addEventListener('mouseup', function (e) {
  console.log('mouseup');
}, false)

p2.addEventListener('mousemove', function (e) {
  console.log('mousemove');
}, false)

