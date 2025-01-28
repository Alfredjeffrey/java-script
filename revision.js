//loops 
// the for comes first then declaration then condition and imcreement or decreement
// for (){}

// for (let i = 1; i <= 10; i++){
//     console.log("hello")
// }

// for (let i = 1; i <= 10; i++){
//     console.log("69")
// }

// even numbers counting from down
for (let i = 20; i>= 2; i-=2){
    console.log(i)
}
// <= counting from 1-10 counting from up
// >= counting from 10 - 1 that is counting from down 


// while loop counts infinity so using the break makes it stop according to the condition
let i = 1;
while(true){
    console.log(i)
    if(i == 100){
        break
    }
    i++
}

//hoisting first of call your function "add function declaration
function add (a,b){
    console.log(a + b)
}

// function expression
const multiply = function {
    console.log(a;b)
}
multiply(5,4) 