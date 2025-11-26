//One way to create object
const car = new Object();
car.brand = "KIA";
car.model = "Carnival";
car.price = 7000000;

//Object second way(Generalised)
const Student={
    Name: "Komal",
    Age: 21,
    Id: 1235,
    Dept: "CSE"
}

//Constructor Function (not used nowadays)
function bike(name,price){
    this.name = name
    this.price = price
    this.greet = function(){ //Anonymous function
        return `Hii my name is ${this.name} and price is ${price}` //both ways are correct using this and not using this
    }
}

const bike1 = new bike("KIA-Seltos", 1000000)
console.log(bike1.greet());

//Using create
const child={
    greet(){
        console.log("HII");
    }
}
const child1 = Object.create(child)
child1.age = 24;

//Using JSON
const person = '{"Name : "Sahil", "Age" : 21}'
const jsonObj = JSON.parse(person) // Converted to json object from string
console.log(jsonObj.name)
const stringObj = JSON.stringify(jsonObj)//Converted to string from json

