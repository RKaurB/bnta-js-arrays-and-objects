// CHECKING AND USING EQUALITY

secretNumber = 5;
// userGuess = 5;
userGuess = 4;

if (secretNumber === userGuess) {
    console.log("Congratulations, you win!");
} else {
    console.log("Unlucky...");
}


// TRUTHY AND FALSY VALUES

// It is always possible to coerce an object into a boolean (true or false).
// Objects are said to be truthy or falsy according to the result of coercing them to a boolean. 
// There are only six falsy values:

// false
// 0
// ""
// null
// undefined
// NaN

// Every other value is truthy.
// This means that instead of checking for equality, if-statements can check if the object is truthy or falsy.

userName = "Rachel";

if (userName) {
    console.log(`Welcome to the game ${userName}`)
} else {
    console.log("Please enter a name")
}