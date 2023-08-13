const lodash = require('lodash');

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const sortedNumbers = lodash.sortBy(numbers);

console.log('Sorted Numbers:', sortedNumbers);

const maxNumber = lodash.max(numbers);

console.log('Max Number:', maxNumber);

const evenNumbers = lodash.filter(numbers, num => num % 2 === 0);

console.log('Even Numbers:', evenNumbers);
