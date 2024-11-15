// Problem 9:
// Input:
// Array: [1, 3, 5, 7, 9]
// Operation: Remove 0 items starting from index 3 and insert 6 and 8
let array = [1, 3, 5, 7, 9];

let removeItems = array.splice(3, 0, 6, 8);
console.log(removeItems);
console.log(array);
