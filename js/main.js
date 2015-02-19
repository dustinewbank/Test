//This is the main Java script file
function modifyTitle(title) {
    document.getElementById("T").innerHTML = title;
}
function addToElement(elementid,text){
    //document.getElementById(elementid)
}
function replaceToElement(elementid,text){
    document.getElementById(elementid).innerHTML = text;
}

var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when 
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawStuff(); 
}
resizeCanvas();

function drawStuff() {
            // do your drawing stuff here
}
