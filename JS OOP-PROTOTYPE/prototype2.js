function Employee (name,age) {
    this.name = name;
    this.age = age;
   
}
Employee.prototype.showInfos = function () {
    console.log("İsim: " + this.name + "Yaş: " + this.age);
}


const emp1 = new Employee("Ergun",26);
const emp2 = new Employee("Murat",26);

emp2.showInfos();
console.log(emp1);
console.log(emp2);