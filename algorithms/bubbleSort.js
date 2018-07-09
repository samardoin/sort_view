function getBubbleSort(a){
  bubbleSort = new Alg(a);
  bubbleSort.start=async function(){
    draw_array.array=bubbleSort.array;
    draw_array.indx=0;
    document.dispatchEvent(draw_array);
    await bubbleSort.sleep(time);
    do{
      var swapped=false;
      for (let i = 1; i <= bubbleSort.array.length-1;i++){
        if (bubbleSort.array[i-1]>bubbleSort.array[i]){
          let temp = bubbleSort.array[i-1];
          bubbleSort.array[i-1]=bubbleSort.array[i];
          bubbleSort.array[i]=temp;
          swapped=true;

          draw_array.array=bubbleSort.array;
          draw_array.indx=i;
          document.dispatchEvent(draw_array);
          await bubbleSort.sleep(time);
        }//end if
      }//end for

    }while (swapped);
    bubbleSort.end=true;

    draw_array.array=bubbleSort.array;
    draw_array.indx=bubbleSort.array.length-1;
    document.dispatchEvent(draw_array);

    document.getElementById('enter').disabled=false;
  }

  return bubbleSort;
}
