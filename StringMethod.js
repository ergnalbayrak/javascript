let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java,Phyton,C++";

value = firstName + lastName;

value = firstName + " " + lastName;

value = "Ergun ";

value += "Albayrak"; // value = value + "Albayrak";


value = firstName.length;

value = firstName.concat(" ",lastName, " ", "Caz"); // firstName + " " + ...

value = firstName.toLowerCase();

value = firstName.toUpperCase();


value = firstName[0];
value = firstName[2];
value = firstName[4];
value = firstName[firstName.length - 1];


// Index of 

value = firstName.indexOf("L");
value = firstName.indexOf("o");
value = firstName.indexOf("1");


// Char At

value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);

// Split

value = langs.split(",");

// Replace

value = langs.replace("Phyton","CSS");

// Includes

value = langs.includes("Java");
value = langs.includes("Ergun");



console.log(value);