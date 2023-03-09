const { question, questionInt } = require('readline-sync');

// console.log('Hello, world!');

const name = question('First name: ');
const surname = question('Last name: ');
const age = questionInt('Age: ');

console.log(`${surname.toUpperCase()}, ${name.toLowerCase()}, ${age}`);