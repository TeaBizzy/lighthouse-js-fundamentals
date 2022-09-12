function smartGarbage(trash, bins) {
  bins[trash] += 1;
  return bins;
}

var trashBins = {
  waste: 0,
  recycling: 0,
  compost: 0
}

console.log(smartGarbage("recycling", trashBins));