let value;

const programmer = {
    name : "Ergun Albayrak",
    age : 26,
    email: "ergnalbayrak@gmail.com",
    langs : ["Phyton","Java","JavaScript"],

    address : {
        city : "Istanbul",
        street : "Kartal"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }

}

value = programmer;

value = programmer.email; // Genel olarak
value = programmer["email"];

value = programmer.langs; 

value = programmer.address.city;


programmer.work();


const programmers = [
    {name:"Ergun Albayrak", age:26},
    {name: "Murat", age:26},
];

value = programmers[0].name;


console.log(value);