// console.log(this); // Global Scope

// const emp1 = {
//     name: "Ergun",
//     age:26,
//     showInfos:function() {console.log("Bilgiler Gösteriliyor");}
// };

// const emp2 = { 
//     name: "Murat",
//     age:26
// }
// emp1.salary = 4000;

// console.log(emp1);

// function Employee() { // Yapıcı Fonksiyon - Constructor
//     this.name = "Ergun";
// }

// const emp1 = new Employee();
// const emp2 = new Employee();

// console.log(emp1);
// console.log(emp2);


function Employee (name,age,salary) {
this.name = name;
this.age = age;
this.salary =   salary;

this.showInfos = function () {
    console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Ergun",26,4000);
const emp2 = new Employee("Murat",26,5000);

emp1.showInfos();
emp2.showInfos();
