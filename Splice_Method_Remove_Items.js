// Problem 10:
// Input:
// Array: ["pen", "pencil", "eraser", "sharpener"]
// Operation: Remove 2 items starting from index 1 without inserting anything.
let array = ["pen", "pencil", "eraser", "sharpener"];

let removeItems = array.splice(1, 2);
console.log(removeItems);
console.log(array);
