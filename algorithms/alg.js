function Alg(array){
  this.array=array;
  this.start;
  this.end=false;
  this.sleep = function(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

let draw_array = new Event('draw_array');
