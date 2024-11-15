// Problem 6:
// Input:
// Array: ["cat", "dog", "rabbit"]
// Operation: Insert "hamster" at index 1 without removing any items.
let array = ["cat", "dog", "rabbit"];

let removeItems = array.splice(1, 0, "hamster");
console.log(removeItems);
console.log(array);
