const map = document.getElementById("map");
const kingdoms = document.getElementById("map");
const rect = kingdoms.getBoundingClientRect();
let scale = 1;
let translate = 10;
let scaleFactor = 0.035;
let superScale = 1.009;
let rectFactor = 1;
let Ycounter = 1;
let Xcounter = 1;



window.addEventListener("mousemove", (e) => {
    console.log("mouse", e.clientX, e.clientY)
    console.log("rects", kingdoms.getBoundingClientRect().x, kingdoms.getBoundingClientRect().y);
})

map.addEventListener("wheel", (e) => {
    console.log(scale);
    if(scale>5){
        scaleFactor *= superScale;
        Ycounter++;
    }
        // kingdoms.style.transform = `translate(0px, 200px) scale(${scale})`;

    kingdoms.style.transformOrigin = `${e.clientX-(Xcounter/scale)}px ${e.clientY}px`

    if(e.deltaY < 0 && scale >= 1) { // if we're zooming out
        scale -= scaleFactor;
        Ycounter-=2.3;
        kingdoms.style.transformOrigin = `${e.clientX-(Xcounter/scale)}px ${e.clientY}px`   
        kingdoms.style.transform = `scale(${scale})`;
        // kingdoms.style.transform = `translate(${translate}px, 10px) scale(${scale})`;
    }
    else {
        kingdoms.style.transform = `translate(0px, ${Ycounter}px) scale(${scale})`;

        // kingdoms.style.transform = `translate(-${translate}px, -10px) scale(${scale})`;
        // kingdoms.style.transform = `scale(${scale})`;
        // console.log(e.clientX, e.clientY);
        // kingdoms.style.transform = `translate(${kingdoms.getBoundingClientRect().x}px, ${e.clientY}px) scale(${scale})`;
        scale += scaleFactor;
        Ycounter+=2.3;

        // kingdoms.style.transform = `translate(${translate}px, 10px) scale(${scale})`;
    }
    // kingdoms.style.transform = `scale(${scale})`;
    // Xcounter -=1.3;
})


// map.addEventListener("click", (e) => {
//     kingdoms.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${scale})`;
// })