const elem = document.getElementById("map")
const panzoom = Panzoom(elem, {
  maxScale: 100,
  // minScale:10,
  step: 0.15,
  focal: {x: 0, y: 0}
})
// panzoom.pan(100, 100)
panzoom.zoom(1, { animate: true })

// Panning and pinch zooming are bound automatically (unless disablePan is true).
// There are several available methods for zooming
// that can be bound on button clicks or mousewheel.
elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)

