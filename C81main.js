canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


color="green";
widthofline=5;

var mouseEvent="empty";
var lastPositionofX,lastPositionofY;


//codes for mouse down event//
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
 mouseEvent="mousedown";
 console.log("mousedown");   
}
//codes for mouse up//
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
    console.log("mouseup");
}
//codes for mouse leave//
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
    console.log("mouseleave");
}
//codes for mouse move//
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentPositionOfX=e.clientX-canvas.offsetLeft;
currentPositionOfY=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthofline;
ctx.moveTo(lastPositionofX,lastPositionofY);
ctx.lineTo(currentPositionOfX,currentPositionOfY);
ctx.stroke();
}
lastPositionofX=currentPositionOfX;
lastPositionofY=currentPositionOfY;
}


//codes for touch events specially used for mobiles and tabs//

var width=screen.width;
canvas_new_width=screen.width-100;
canvas_new_height=screen.height-300;
if (width<992){
document.getElementById("myCanvas").width=canvas_new_width;
document.getElementById("myCanvas").height=canvas_new_height;
}

//codes for touch start event//

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
lastPositionofX=e.touches[0].clientX-canvas.offsetLeft;
lastPositionofY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    currentPositionOfX=e.touches[0].clientX-canvas.offsetLeft;
    currentPositionOfY=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle="violet";
    ctx.lineWidth=8;
    ctx.moveTo(lastPositionofX,lastPositionofY);
    ctx.lineTo(currentPositionOfX,currentPositionOfY);
    ctx.stroke();
    lastPositionofX=currentPositionOfX;
    lastPositionofY=currentPositionOfY;
}
function abc(){
    ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
}