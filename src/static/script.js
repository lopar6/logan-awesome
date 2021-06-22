// stores percent values for background layer offsets
class Offset{
    constructor(){
        this.x = 0;
        this.y = 0;
    }
}


let offset1 = new Offset();
let offset2 = new Offset();
let offset3 = new Offset();
let offset4 = new Offset();
let offset5 = new Offset();

let element = null;

window.onload = function() {
    element = document.querySelector("#parallax");
    document.addEventListener("mousemove", horizontalParallax);
    setTimeout(() => {document.body.className += " loaded";}, 400);
    setTimeout(() => {document.body.className += " timeMark1";}, 1200);
    setTimeout(() => {document.body.className += " timeMark2";}, 2200);
}

function horizontalParallax(event){
    // len from side to mid point on screen
    let x = window.innerWidth/2;
    // do not parallax on mobile
    if(x > 500){
        let mouseX = event.clientX;
        let percentOffset = 1;
        // makes movement somewhat dynamically scale to screen size
        if(x < 900){
            percentOffset = .1
        }
        offset1.x = - (mouseX - x) * .25 * percentOffset;
        offset2.x = - (mouseX - x) * .20 * percentOffset;
        offset3.x = - (mouseX - x) * .15 * percentOffset;
        offset4.x = - (mouseX - x) * .10 * percentOffset;
        offset5.x = - (mouseX - x) * .05 * percentOffset;
        applyParallax();
    }
}

function applyParallax(){
    element.style.backgroundPosition = `${offset1.x}% ${offset1.y}%, ${offset2.x}% ${offset2.y}%, ${offset3.x}% ${offset3.y}%, ${offset4.x}% ${offset4.y}%, ${offset5.x}% ${offset5.y}%`;
}