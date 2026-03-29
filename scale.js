let scale = 1;
const el = document.querySelector("#ball");

function zoom(event) {

    event.preventDefault();
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(0.125, scale), 4);

    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}

function pan(event) {
    event.preventDefault();
    el.style.cursor = "alias";
    el.style.color = "green";
}

el.onwheel = zoom;
el.onclick = pan;