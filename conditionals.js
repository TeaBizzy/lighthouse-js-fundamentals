const raining = true;

const temperature = 12;

if(raining) {
  console.log("Don't forget your umbrella!");
}

if(temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Wear something warm.");
} else {
  console.log("It's T-shirt weather!");
}

console.log("Now your ready to go outside!");