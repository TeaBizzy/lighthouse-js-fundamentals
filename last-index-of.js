function lastIndexOf(arrayToCheck, numToFind) {
  for(let i = arrayToCheck.length - 1; i >= 0 ; i--) {
    if(numToFind === arrayToCheck[i]) {
      return i;
    }
  }
  return -1;
}

// For testing!
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);