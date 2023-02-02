const person = {
    name: "Ergun",
    age: 26,
    salary: 5000

};

const langs = ["Phyton", "Java", "C++", "Php"];

const name = "Ergun"

// For In

// Object

// for(let prop in person) {
//     console.log(prop,person[prop]);
// }

// Array

// for(let index in langs){
//     console.log(index);
// }

// String

// for (let index in name) {
//     console.log(index,name[index]);
// }

// Object

// for (let value of person){
//     console.log(value);
// }

// for (let value of langs) {
//     console.log(value);
// }

// String

for (let character of name) {
    console.log(character);
}