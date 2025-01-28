// hoisting is a way of accessing a variable before the declaration 
//variable hoisting
console.log(a)
var a = 5;

// console.log(b)
// let b = 5;

c = 6;
console.log(d)
var c;

// d = 6;
// console.log(d)
// let d;

greet("john")

function greet(user){
    console.log("hello",user)
}

//comsole.log(add(4,5))

const add = function (a,b){
    return a + b 
}