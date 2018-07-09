document.addEventListener('draw_array',async function(e){
  displayArray(e.array,e.indx);
});




function displayArray(array,ci){
  colorRect(0,0,canvas.width,canvas.height,"whiteSmoke");

  let width = canvas.width/array.length;
  let max = findMax(array);

  for (let i = 0; i < array.length;i++){
    var v = array[i];
    var space = width>4?2:0;
    var color = (i==ci?'red':'black');
    colorRect(width*i+space/2,canvas.height-(v/max)*canvas.height,width-space,
      (v/max)*canvas.height,
      color);
  }
}

function findMax(array){
  let max=array[0];
  for (let i = 0; i < array.length;i++)
    max = Math.max(max,array[i]);
  return max;
}
