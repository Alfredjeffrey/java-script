//function myfunction(){
//myfunction()
//}
// myfunction()

// function counter(x){
//     console.log(x)
//     let x2 = x + 1;

// //     //base case
// //     if(x2 <= 12){
// //         counter(x2)
// //     }
// // }
// // counter(0)

// function countdown(y){
//     console.log(y)
//     let x2 = x - 1
// }
// if(x2 >= 1){
//     countdown(x2)
// }
// }
// countdown(10)

// function count(a, b) {
//     if (a < b) {
//         console.log(a)
//         let x = a + 1;
//         if (x <= b) {
//             count(x, b)
//         }
//     } else {
//         console.log(a)
//         let x = a - 1;
//         if (x >= b) {
//             count(x, b)
//         }
//     }
// }
// count(10, 1)

// function factorial(x) {
//     if (x == 1 || x == 0) {
//         return 1;
//     } else {
//         return x * factorial(x - 1)
//     }
// }

// console.log(factorial(4))
// console.log(factorial(5))


// for(let i = 1; i <= 12; i++){
//     let x = 6 * 1
//     console.log(6,"X",i,"=", X)

//     function multiply(x){
//         for (let i = 1; i <= 12; i++){
//             let y = x * i
//             console.log(x,"x",i, "=",y)
//         }
//     }
//     multiply(8)

    function multiply(x, y=1){
        console.log(x,"x", y, "=",x * y)
        let y2 = y + 1;
        if (y2 <= 12){
            multiply(x,y2)
        }
    }
     
    multiply(9)

    function multiply(a,b=1){
        console.log(a,"x",b,"=", a * b)
        let b2 = b + 1;
        if(b2 <=12){
            multiply(a,b2)
        }
    }
    multiply(3000)