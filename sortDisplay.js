function startSorting(alg, array){
  let width = canvas.width/array.length;
  let max = findMax(array);
  displayArray(array,max,width);
}

function displayArray(array, max, width){
  for (let i = 0; i < array.length;i++){
    var v = array[i];
    var space = width>4?2:0;
    colorRect(width*i+space/2,canvas.height-(v/max)*canvas.height,width-space,
      (v/max)*canvas.height,
      'black');
  }
}

function findMax(array){
  let max=array[0];
  for (let i = 0; i < array.length;i++)
    max = Math.max(max,array[i]);
  return max;
}
