const raining = true;

const temperature = 40;

if(!raining) {
  console.log("No need to bring an umbrella.");
}

if(temperature <= -40 || temperature >= 40) {
  console.log("Going outside is not a good idea right now...");
} else if(temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Wear something warm.");
} else {
  console.log("It's T-shirt weather!");
}

console.log("Now your ready to go outside!");

const isCitizen = true;
const age = 26;

if(isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}