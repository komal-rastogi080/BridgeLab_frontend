// //Q-1
// let variable = 20;
// function globalfunc(){
//     console.log(variable);
// }
// console.log(globalfunc());
// console.log(variable);

// //Q-2
// function demo(){
//     let var1 = 40;
//     console.log(var1);
// }
// console.log(demo());
// console.log(var1);

// //Q-3
// function demo2(){
//     if(true){
//         let var2 = 42;
//         console.log(var2);
//     }
//     console.log(var2);
// }
// console.log(demo2());

function myfun(){
    console.log("clicked");
}

function myFun2(){
    console.log("double clicked")
}

const btnELE = document.getElementById("btn");

let count=0;

btnELE.addEventListener("click", ()=> {
    count++;
    console.log(`btn clicked ${count} times`)
});