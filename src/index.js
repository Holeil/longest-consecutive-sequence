module.exports = function longestConsecutiveLength(array) {
  function compareNumeric(a, b) {
    if(a > b) return 1;
    if(a < b) return -1;
  }

  array = array.sort(compareNumeric);
  let length = 0;
  let count = 0;

  for(let i = 0; i < array.length; i++) {
    count++;
    if(array[i+1] != array[i]+1) {
      if(count > length) length = count;
      count = 0;
    }
  }
  return length;
}
