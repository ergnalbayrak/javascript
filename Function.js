// Fonksiyon Tanımlama

// function merhaba(name = " Bilgi Yok",age = "Bilgi Yok"){

    // if (typeof name === "undefined") name = "Bilgi Yok";

    // if (typeof age === "undefined") age = "Bilgi Yok";

    // console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Ergün", 26); // Fonksiyon Çağrısı (Function Call)

// merhaba (); 

// merhaba ("Ergün");


// function square(x) {
//     console.log(x*x);
//     return x * x ;
// }
// function cube(x) {
//     console.log(x*x*x);
//     return x * x * x ;
// }

// let a = cube(square(12));

// console.log(a);

// function merhaba() {
//     return "Merhaba";
// }

// console.log(merhaba());

// Function Expression

// const merhaba = function(name){
//     console.log("Merhaba: " + name);
// };

// merhaba ("Ergün");

// Immediately Invoked Function Expression (IIFE)

// (function(name){
//     console.log("Merhaba: " + name);
// }) ("Ergün");

const database = {
    host:"localhost",
    add:function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete:function(id){
        console.log(`Id: ${id} Silindi`);
            }
}

console.log(database.host);

database.add();

database.delete(10);