emptyArray = [];
numbers = [1, 2, 3, 4, 5];
letters = ["a", "b", "c", "d"];

// console.log(emptyArray);
// console.log(numbers);
// console.log(letters);

badIdea = [0, "a", true, numbers];

// console.log(badIdea);

shoppingList = ["milk", "eggs", "bread"];

// add to end of the array
// shoppingList.push("apples");

// remove from end of array
// Takes bread off the end of the array
shoppingList.pop();

// add to start of array
shoppingList.unshift("coffee");

// remove from start
shoppingList.shift();


console.log(shoppingList);
// To access first thing
console.log(shoppingList[0]);
// Here we would get undefined instead of an error message...
console.log(shoppingList[10]);

console.log(shoppingList.length);


// OBJECTS...

aliceArray = ["Alice", 25, "blue"];
bobArray = [28, "Bob", "yellow"];

console.log(aliceArray[1]);

// Ordering matters..!
console.log("Alice age: " + aliceArray[1]);
console.log(`Bob's age: ${bobArray[1]}`);


// Key value pairs
// Use sensible, meaningful names!

alice = {
    name: "Alice",
    age: 25,
    favouriteColor: "blue"
};

bob = {
    age: 28,
    name: "Bob",
    favouriteColor: "yellow"
};

// Access, e.g. Alice's age from the object...
console.log("Alice's age: " + alice["age"]);
console.log("Bob's age: " + bob.age);

console.log()
