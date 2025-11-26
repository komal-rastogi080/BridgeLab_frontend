//Errors are the programmatical mistakes done by developers, due to this compilation pauses.

// try{
//     console.log(10/0);
// }catch(e){
//     console.log(error.message);
// }finally{
//     console.log("Finally block");
// }

// //Function Hoisting
// d() //Type error
// var d = function sub(){
//     console.log(10-10);
// }

// //if let or const is used then reference error will occur.
// console.log(f);
// let f=5;


//Class hoisting

//to invoke the class, use constructor

// const stud1 = new Student("Komal", 21)// using const here will give reference error
// stud1.show()//TDZ{Temporal Dead Zone}

class Student{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    show(){
        console.log(`Name: ${this.name}, Age :${this.age}`); //interpolation and template literals
    }
}
const stud1 = new Student("Komal", 21)//gives the correct output
stud1.show()



