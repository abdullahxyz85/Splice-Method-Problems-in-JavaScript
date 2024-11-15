// Input:
// Array: [5, 10, 15, 20]
// Operation: Remove 1 item at index 0 and insert 50, 60.
let array = [5, 10, 15, 20];

let removeItems = array.splice(0, 1, 50, 60);
console.log(removeItems);
console.log(array);
