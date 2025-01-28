// global scope are those var we declare at the top before a function
// on their own they stay on their own 

let message = "hello world" 
function  callMessage (){
    console.log(message)
}

callMessage()

//the value of a gobal scope variable can be changed inside 
// of a function but in order to get that changed value you need to first
// call that function

function changedValue (){
    message= "hello"
}

console.log (message)

changedValue()

console.log (message)

function globalvariable (){
 a = "globalvariable in a function"
 let b = "variable in a function"
}
globalvariable()
console.log(a)

// 
//block scoped variable(let and const)
{
    var a = "hello from the block using var "
    var a = "hello from the block using let "
    console.log(b)

    {
        const e = "second block"
        console.log(b)

        {
            console.log(b)
            console.log(e)

        }
    }
}

