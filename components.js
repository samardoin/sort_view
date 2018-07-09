var canvas, ctx;
var sorts, enter;
var time = 1;
window.onload=function(){
  canvas=document.getElementById('gameCanvas');
  ctx=canvas.getContext('2d');
  sorts=document.getElementById('sorts');
  enter=document.getElementById('enter');


  colorRect(0,0,canvas.width,canvas.height,'whiteSmoke');


  //getBubbleSort(getRandomArray(90,0,50)).start();
}

function colorRect(x,y,w,h,color){
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function clicked(){
  //enter.disabled=true;
  console.log(sorts.value);
  document.getElementById('enter').disabled=true;
  switch(sorts.value){
    case("bubble"):
      getBubbleSort(getRandomArray(90,0,50)).start();
      break;
    case("selection"):
      getSelectionSort(getRandomArray(90,0,50)).start();
      break;
    default:
      document.getElementById('enter').disabled=false;
      break;
  }

}

//inclusive inclusive
function getRandomArbitrary(min, max) {
    max++;
    return Math.random() * (max - min) + min;
}

function getRandomArray(length,min, max){
  let out = [];
  for (let i = 0; i < length;i++){
    out.push(getRandomArbitrary(min,max));
  }
  return out;
}
