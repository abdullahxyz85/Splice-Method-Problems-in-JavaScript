// Problem 2:
// Input:
// Array: [1, 2, 3, 4, 5]
// Operation: Insert 10 and 20 at index 2 without removing any element.
let array = [1, 2, 3, 4, 5];

let deletedItems = array.splice(2, 0, 10, 20);
console.log(deletedItems);
console.log(array);
