//String -- Primitive datatype and object datatype


//Declaration
let a ="Hii" // these three stores in string constant pool
let b='Hii'
let c=`Hii`

let g = new String("Hii") // stored in heap memory

//concatenation
let e = a+b;
console.log(`Hii ${e}`); //interpolation used to concatenate

//In-built methods
//length

e.length
"Hello".length

//includes
"Hello".includes('He')

//trim
b.trim()

b.toLowerCase()
b.toUpperCase()

console.log("Hello".lastIndexOf('l')); //returns last index of character

//slice
console.log("Hello".slice(-4,-2)); // ell

//substring
console.log("Hello".substring(1,4));



