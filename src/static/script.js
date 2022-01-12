const NUM_BACKGROUND_IMAGES = 5;
// const RELATIVE_MOVEMENT_LEVELS = [.25, .20, .15, .10, .05];
const RELATIVE_MOVEMENT_LEVELS = [.15, .10, .08, .06, .05];

let element;

window.onload = () => {
    element = document.querySelector("#parallax");
    document.addEventListener("mousemove", parallax);

    // delayed rendering bio on home
    setTimeout(() => {document.body.className += "loaded";}, 400);
    setTimeout(() => {document.body.className += " time-mark1";}, 1000);
    setTimeout(() => {document.body.className += " time-mark2";}, 2000);
}

parallax = (event) => {

    // do not parallax on mobile
    if(window.innerWidth > 680){
        let backgroundPosition = '';
        // from center
        const mouseX = event.clientX - (window.outerWidth / 2); 
        // movement dynamically scale to zoom amount
        let pixelRatio = window.devicePixelRatio;

        RELATIVE_MOVEMENT_LEVELS.map((relativeOffset, i) => {
                // const offset = mouseX * relativeOffset * percentOffset 
                const offset = mouseX * relativeOffset * pixelRatio
                i === 0 
                    // ? backgroundPosition +=  `${offset}px 0px`
                    ? backgroundPosition +=  `${offset}px 0px`
                    : backgroundPosition += `, ${offset}px 0px`
            });
            
        applyParallax(backgroundPosition);
    }
}

applyParallax = (backgroundPosition) => {
    element.style.backgroundPosition = backgroundPosition
}