canvas =
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


var mouseEvent = "";
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "green";
var widthOfLine = 3;
var radius = 40;
canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
  
  mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    
  mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    
  mouseEvent = "mouseUp";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
  currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
  currentPositionOfMouseY = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mouseDown") 
  {
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + currentPositionOfMouseX + "y  = "+ currentPositionOfMouseY);
  }

    ctx.beginPath() ;
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY,radius,0,  2 *Math.PI);
    ctx.stroke();  
    } 