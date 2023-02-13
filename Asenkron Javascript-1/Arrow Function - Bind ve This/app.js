const person = {
    age:25,
    
    // tellAge : function(){

    //     // this - Person Object
    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)


    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }
    // this - Window Object



    
}

person.tellAge();