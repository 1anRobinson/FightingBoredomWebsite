const elem = document.getElementById("map")
const reset = document.getElementById("reset")
const panzoom = Panzoom(elem, {
  maxScale: 100,
  // minScale: 1,
  step: 0.09,
})
// panzoom.pan(100, 100)
panzoom.zoom(1, { animate: true })

elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)
reset.addEventListener('click', panzoom.reset)

function reveal(a,b){
  var y = document.getElementById(a)
  y.style.backgroundColor = 'red';
  var x = document.getElementById(b)
   if (x.style.display == "none") {
    x.style.display = "block";
    x.style.display = "flex";
  } else {
    x.style.display = "none";
    y.style.backgroundColor = 'white';
  }
}