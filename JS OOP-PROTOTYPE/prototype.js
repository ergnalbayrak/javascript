// const object = new Object(); // Object Literal
// const object2 = new Object();
// object.name = "Ergun";

// console.log(object);

function Employee(name, age) {
    this.name = name;
    this.age = age;

    this.showInfos = function () {
        console.log("Bilgiler Gösteriliyor");
    }
}


const emp1 = new Employee ("Ergun", 26);
console.log(emp1);

console.log(emp1.toString());