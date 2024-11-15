// Problem 8:
// Input:
// Array: ["math", "science", "history", "geography", "art"]
// Operation: Remove 3 items starting from index 2 and insert "computer science" and "biology".
let array = ["math", "science", "history", "geography", "art"];

let removeItems = array.splice(2, 3, "computer science", "biology");
console.log(removeItems);
console.log(array);
