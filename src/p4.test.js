const intersection = require('./p4');

const list1 = [1, 2, 3, 5, 4];
const list2 = [1, 2, 6, 4, 5];
console.log(intersection(list1, list2));

// expected result: [ 1, 2, 5, 4 ]