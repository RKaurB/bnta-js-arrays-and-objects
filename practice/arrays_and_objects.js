// ARRAYS AND OBJECTS

// The two most used data structures in JavaScript are Objects and Arrays.
// Objects allow us to create a single entity that stores data items by key.
// Arrays allow to gather data items into an ordered list.


// ARRAYS

// Arrays are useful where the ordering of the information matters and all the data has the same type...

emptyArray = [];
numbers = [1, 2, 3, 4, 5];
letters = ["a", "b", "c", "d"];
// console.log(emptyArray);
// console.log(numbers);
// console.log(letters);

badIdea = [0, "a", true, numbers];
// console.log(badIdea);

// Arrays are mutable - i.e. we can alter their contents by calling several methods (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

shoppingList = ["milk", "eggs", "bread", "bananas"];
// Add to end of the array
shoppingList.push("apples");
// Remove item from end of the array
shoppingList.pop();
// Add coffee to start of the array
shoppingList.unshift("coffee");
// Remove item from start of the array
shoppingList.shift();
// Remove from array by index - from second item onwards
// shoppingList.splice(1);
// Remove from array by index - 2nd and 3rd item
// shoppingList.splice(1,2);
// Remove from array by index - 2nd item only
shoppingList.splice(1,1);


// Print shopping list
console.log(shoppingList);
// Search by index - access first item in the list
console.log(shoppingList[0]);
// Here we would get 'undefined' instead of an error message...
console.log(shoppingList[10]);
// Print the size of the shopping list (i.e. how many items)
console.log(shoppingList.length);



// OBJECTS

// Using arrays is not ideal here...
aliceArray = ["Alice", 25, "blue"];
bobArray = [28, "Bob", "yellow"];

console.log(aliceArray[1]);

// Ordering matters..!
console.log("Alice age: " + aliceArray[1]);
console.log(`Bob's age: ${bobArray[1]}`);

// Instead of using numbered indices to access the information they contain objects use key-value pairs, where data added to the object is associated with a key which can be used to access it later...

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
// When accessing, we have option of using name of key in square brackets
// or using dot notation (dot notation tends to be more common, but has some restrictions).
console.log("Alice's age: " + alice["age"]);
console.log("Bob's age: " + bob.age);

// Because Alice doesn't currently have an occupation, this will be returned as undefined...
console.log(alice.occupation);

// Adding new values is simpler than with an array. 
// Since ordering doesn't matter in an object, a new key can simply be declared and assigned the value.
alice.occupation = "student";
console.log("Alice is a " + alice.occupation);
// Print alice object
console.log(alice);

// To change a value, the key can be re-assigned to a new value.
alice.occupation = "developer";
console.log("Alice is a " + alice.occupation);
console.log(alice);

// There are many methods which we can call on objects to manipulate them in other ways...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
