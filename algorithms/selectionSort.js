function getSelectionSort(a){
  bubbleSort = new Alg(a);
  bubbleSort.start=async function(){
    draw_array.array=bubbleSort.array;
    draw_array.indx=0;
    document.dispatchEvent(draw_array);
    await bubbleSort.sleep(time);

    let j = 0,i=0;
    let n = bubbleSort.array.length;
    for (j=0;j<n-1;j++){
      draw_array.array=bubbleSort.array;
      draw_array.indx=j;
      document.dispatchEvent(draw_array);

      let iMin=j;
      for (i=j+1; i < n; i++){
        draw_array.array=bubbleSort.array;
        draw_array.indx=i;
        document.dispatchEvent(draw_array);
        await bubbleSort.sleep(time);


        if (bubbleSort.array[i]<bubbleSort.array[iMin]){
          iMin=i;
        }
      }
      if (iMin != j){
        draw_array.array=bubbleSort.array;
        draw_array.indx=j;
        document.dispatchEvent(draw_array);
        await bubbleSort.sleep(time);

        temp = bubbleSort.array[j];
        bubbleSort.array[j]=bubbleSort.array[iMin];
        bubbleSort.array[iMin]=temp;
      }
    }
    draw_array.array=bubbleSort.array;
    draw_array.indx=n-1;
    document.dispatchEvent(draw_array);

    document.getElementById('enter').disabled=false;
  }


  return bubbleSort;
}
