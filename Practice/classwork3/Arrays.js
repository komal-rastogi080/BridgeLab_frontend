let a = [1,2,3]
let num = new Array(1,2,3)

num = num.map((x)=> x*2);//modifies the array in accord to the condition
console.log(num);

console.log(num.filter(x => x%2==0));//filters the array in accord to the condition

console.log(num.reduce((a,b)=>a+b));//returns a single computed value

num.shift(); // removes first element
console.log(num);
num.unshift(-1);
console.log(num); // adds element at start