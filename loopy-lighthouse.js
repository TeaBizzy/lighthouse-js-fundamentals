loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])

function loopyLighthouse(range, multiples, words) {
  for(let i = range[0]; i <= range[1]; i++) {
    let word1 = "";
    let word2 = "";

    if(i % multiples[0] === 0) {
      word1 = words[0];
    }
    if(i % multiples[1] === 0) {
      word2 = words[1];
    }

    if(i % multiples[0] !== 0 && i % multiples[1] !== 0 ) {
      console.log(i);
    } else {
      console.log(word1 + word2)
    }
  }
}