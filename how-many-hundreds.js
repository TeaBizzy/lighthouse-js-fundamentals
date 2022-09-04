function howManyHundreds(num) {
    return Math.floor(num / 100);
}

howManyHundreds(1234);
howManyHundreds(0);
howManyHundreds(55);
howManyHundreds(100);
howManyHundreds(200);
howManyHundreds(123456);


// Function Testing!
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);