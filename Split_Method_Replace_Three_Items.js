// Problem 7:
// Input:
// Array: [100, 200, 300, 400, 500]
// Operation: Replace 3 items starting from index 1 with 900.
let array = [100, 200, 300, 400, 500];

let removeItems = array.splice(1, 3, 900);
console.log(removeItems);
console.log(array);
