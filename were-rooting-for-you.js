function judgeVegetable(vegetables, metric) {
  var highestMetricIndex = 0
  for (var i = 0; i < vegetables.length; i++) {
    if(vegetables[i][metric] > vegetables[highestMetricIndex][metric]) {
      highestMetricIndex = i;
    }
  }
  return vegetables[highestMetricIndex].submitter;
}