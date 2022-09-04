function ageCalculator(name, yearOfBirth, currentYear) {
  return `${name} is ${currentYear - yearOfBirth} years old.`
}

ageCalculator("Suzie", 1984, 2016);
ageCalculator("Jack", 2004, 2016);
ageCalculator("Ali", 2016, 2016);


// Function Testing!
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));