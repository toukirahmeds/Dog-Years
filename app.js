// My age in human years
const myAge = 29;

// This value is letter going to be changed.
let earlyYears = 2;

// First 2 dog years.
earlyYears *= 10.5;

// Remaining human years.
let laterYears = myAge - 2;

// Dog years accounted for later years.
laterYears *= 4;

console.log(earlyYears, laterYears);

// My age in dog years.
const myAgeInDogYears = earlyYears + laterYears;

// My name with all lowercase letters.
const myName = "Toukir Ahmed Shuva".toLowerCase();

// Printing my name and my age in human years and dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
