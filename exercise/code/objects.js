/**
 * In these tasks you will need to manipulate the object below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

dog = {
    name: "Poppy",
    age: 4,
    breed: "Springer Spaniel",
    colours: ["white", "brown"],
}

cat = {
    name: "Morris",
    age: 9,
    breed: "European Shorthair",
    colours: ["black", "white"]
}

tortoise = {
    name: "Ella",
    age: 7,
    breed: "Eastern Hermanns",
    colours: ["yellow", "brown", "black"]
}


/**
 * Q1. What's the name of the dog?
 */
dogName = dog.name;
console.log("The dog's name is " + dogName);
console.log("\n");

/**
 * Q2. What breed is the cat?
 */
catBreed = cat.breed;
console.log("The cat is a " + catBreed);
console.log("\n");

/**
 * Q3. It's the tortoise's birthday! Add one to her current age.
 */
tortoise.age += 1;
console.log(tortoise)
console.log(tortoise.name + ", the tortoise, is now " + tortoise.age + " years old");
console.log("\n");

/**
 * Q4. How many different colours is Poppy?
 */
dogColourCount = dog.colours.length;
console.log(dog.name + ", the dog, has " + dogColourCount + " different colours");
console.log("\n");

/**
 * Q5. I've just bought a 12-year-old African Grey parrot called Lucky. Create an object for her.
 */
parrot = {
    name: "Lucky",
    age: 12,
    breed: "African Grey"
};
console.log(parrot);
console.log(parrot.name + " is a " + parrot.age + "-year-old " + parrot.breed + " parrot");
console.log("\n");

/**
 * Q6. Ella's favourite food is dandelion, add this information to her object
 */
tortoise.favouriteFood = "dandelion";
console.log(tortoise);
console.log(tortoise.name + " the tortoise's favourite food is " + tortoise.favouriteFood);
console.log("\n");

/**
 * Q7. What's the combined age of all the pets?
 */
totalPetAge = dog.age + cat.age + tortoise.age + parrot.age;
console.log("The total age of the pets is " + totalPetAge);
console.log("\n");

/**
 * Q8. It's turns out that Morris isn't a European Shorthair. We don't actually know his real breed, so remove that key from his object
 */
delete cat.breed; 
console.log(cat);
console.log("\n");