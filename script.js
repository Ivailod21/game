let canvas = document.getElementById("gameCanvas");
let canvasWidth = document.getElementById("canvasWidth").valueAsNumber;
let canvasHeight = document.getElementById("canvasHeight").valueAsNumber;
let sqsize = 20;
canvas.width = canvasWidth * sqsize;
canvas.height = canvasHeight * sqsize;

let context = canvas.getContext("2d");
let thisx = 2;
let thisy = 1;
let thisx = 4;
let thisy = 3
let img = new Image();
let img1 = new Image();
context.drawImage(img, thisx * sqsize, thisy * sqsize, sqsize, sqsize);
context.drawImage(img1, thisx * sqsize, thisy * sqsize, sqsize, sqsize);

function drawMapAndHero() {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvasWidth * sqsize, canvasHeight * sqsize);
    context.drawImage(img, thisx * sqsize, thisy * sqsize, sqsize, sqsize);
    context.drawImage(img1, thisx * sqsize, thisy * sqsize, sqsize, sqsize);
    for (let i = 0; i < canvasWidth; i++) {
        for (let j = 0; j < canvasHeight; j++) {  
            context.strokeRect(i * sqsize, j * sqsize, sqsize, sqsize);
        }
    }
}



drawMapAndHero();                                                                                                


canvas.onclick = function(i) {
   let mousePosX = i.x - i.originalTarget.offsetLeft;
   let mousePosY = i.y - i.originalTarget.offsetTop;
   thisx = Math.floor(mousePosX / sqsize);
   thisy = Math.floor(mousePosY / sqsize);
   drawMapAndHero();
}


function moveUp() {
   thisy--;
   drawMapAndHero();
}
function moveDown() {
   thisy++;
   drawMapAndHero();
}
function moveLeft() {
   thisx--;
   drawMapAndHero();
}
function moveRight() {
   thisx++;
   drawMapAndHero();
}
document.onkeypress = function(e) {
  let key = e.key;
  switch(key) {
     case "w": moveUp(); break;
     case "s": moveDown(); break;
     case "a": moveLeft(); break;
     case "d": moveRight(); break;
  }
}
