const elem = document.getElementById("ball")
const panzoom = Panzoom(elem, {
  maxScale: 50
})
panzoom.pan(10, 10)
panzoom.zoom(2, { animate: true })

// Panning and pinch zooming are bound automatically (unless disablePan is true).
// There are several available methods for zooming
// that can be bound on button clicks or mousewheel.
elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)
