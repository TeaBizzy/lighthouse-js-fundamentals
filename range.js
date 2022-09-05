function range(start, end, step) {
  if(start == undefined || end == undefined || step == undefined || start > end || step <= 0) {
    console.log("A parameter was undefined or invalid... Returning empty array.")
    return []
  }

  let numRange = [];
  for (let i = start; i <= end; i++) {
    if (i === start || i % step === 0) {
      numRange.push(i);
    }
  }
  return numRange;
}

// For testing!
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));