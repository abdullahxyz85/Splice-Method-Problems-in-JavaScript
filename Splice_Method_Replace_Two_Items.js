// Problem 3:
// Input:
// Array: ["red", "green", "blue", "yellow", "purple"]
// Operation: Replace 2 items starting from index 1 with "orange" and "pink".
let array = ["red", "green", "blue", "yellow", "purple"];

let deletedItems = array.splice(1, 2, "orange", "pink");
console.log(deletedItems);
console.log(array);
