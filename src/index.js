module.exports = function longestConsecutiveLength(array) {
  let swap = 0;
  do{
    swap = 0;
    for(let x = 0; x < array.length; x++) {
      if(array[x+1] < array[x]) {
        let a = array[x+1];
        let b = array[x];
        array[x] = array[x+1];
        array[x+1] = b;
        swap++;
      }
    }
  }while(swap != 0);


  let length = 0;
  let count = 0;

  for(let i = 0; i < array.length; i++) {
    if(count == 0) count++;
    if(array[i+1] == array[i]+1) {
      count++;
    }
    else if(array[i+1] == array[i]) continue;
    if(array[i+1] != array[i]+1) {
      if(count > length) length = count;
      count = 0;
    }
  }
  return length;
}
