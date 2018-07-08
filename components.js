var canvas, ctx;
var sorts, enter;
window.onload=function(){
  canvas=document.getElementById('gameCanvas');
  ctx=canvas.getContext('2d');
  sorts=document.getElementById('sorts');
  enter=document.getElementById('enter');

  colorRect(0,0,canvas.width,canvas.height,'whiteSmoke');
}

function colorRect(x,y,w,h,color){
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function clicked(){
  console.log(sorts.value);
}
