document.write("Hello world!!");

function stop(event) {
  alert('Stop page transfer');
  return false;
}

var btn = document.getElementById('foo3');
function sayFoo3() {
  alert('foo3');
}

btn.onclick = sayFoo3;
