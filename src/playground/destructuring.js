//
// Object destructuring
//

// const person = {
//   name: 'Andrew',
//   age: 24,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// };

// const book = {
//   title: 'Ego is the Enamy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Stree', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink = 'not selected', , mediumPrice = 0] = item;
console.log(`A medium ${drink}, costs ${mediumPrice}`);

