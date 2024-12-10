import {showMessage, x1, y1} from './app.js';

/* function message() {
    console.log('Hello, World!');
}

message();

*/

// arrow functions

// const message = () => {
//     console.log('Hello, World!');
// }
//
// message();

/* function add(a ,b ) {
    return a + b;
}

*/
// const add = (a,b) => a + b;
//
// const sum = add(3,4);
// console.log(sum);

// String
// const name = "Vu";
// const message = "Hello " + name;
// console.log(message)

// String literals
// const message = `Hello ${name}`;
// console.log(message)

// Object literals
let user = {
    name: "Vu",
    email: "Vu@example.com",
    age: 25
}

// truy suat thuoc tinh cua object
// const name = user.name;
// const email = user.email;

// es6 -> destructuring
const {name, age } = user
console.log(name, age)

// Array
const arr = [1,2,3,4];
const [x,y] = arr;
console.log(x, y)

const number1 = [1,2,3];
const number2 = [4,5,6];
const number3 = number1.concat(number2);
// spread syntax
const number4 = [...number1, ...number2]; // [1,2,3,4,5,6]


const number5 = [...number1]; // tao 1 mang moi chua cac phan tu dc pha huy boi number1
number5[0] = 7;
console.log(number1)

const student = {
    name: "Vu",
    age: 25,
}

const student2 = {...student, email: "nam@gmail.com"}
console.log(student2)

function sum(a,b,c,d,e) {
    return a + b + c + d + e;
}

const numbers = [1,2,3,4,5] // -> ...numbers => 1,2,3,4,5
console.log(sum(...numbers)) // -> sum(...numbers) <=> sum(1,2,3,4,5)

console.log(x1);
console.log(showMessage())