//Arrow function
const add = (a,b) => a+b

//Anonymous function
setTimeout(function(){
    console.log("2 sec", 2000);
})

//IIFE <Immediate Invoked Function Expression> 
(function(){
    console.log("IIFE");
})();

//HOF <Higher Order Function> :- Function calling another function or a function is passed as an argument
function greetUser(greetFn, name){
    return greetFn(name)
}

function greet(name){ //Callback function :- a function is passed to another function
    return "Hello"+name;
}

console.log(greetUser(greet, "Komal"));

//ProtoTypes are the supermost classes

Object.prototype.print = function(){
    console.log("Hello");
}

let b={
    name: "Sahil",
    age: 26
}
b.print()

//Callback Function
function a(fun){
    console.log("First");
    fun()
}

function b(){
    console.log("Second");
}
console.log(a(b));
//a(function(){ function chaining or callback hell
//     b(c)
// })

//Promises
function a(){
    return new Promise((resolve) => a)
}

async function run(){
    await a()
    await b()
    await c()
}