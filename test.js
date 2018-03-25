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
