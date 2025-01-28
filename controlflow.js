// //if statement

// //if statement is used to execute or skip a block of code in a condition
// //program to check a positive number 
// const number = prompt("enter your number")
// {} it is used to contain a block of codes
// let temperature = 30;
// if(temperature > 35){
//     console.log("its hot outside")
// }else{
//     console.log("its hot outside")
// }

// //if..else  if ...else
// let grade = 78;
// if(grade >=90){
//     console.log("A")
// }
// else if(grade >=80){
//     console.log("b")
// }
// else if(grade >=70){
//     console.log("c")
// }    
// else if(grade >=60){
//     console.log("d")
// }
// else if(grade >=60){
//     console.log("c")
// }
// else {
//     console.log("f")
// 


//nested if statement
// let age = 19;
// let license = false;
// if (age >= 18) {
//     if (license) {
//         console.log("you can drive")

//     } else {
//         console.log("you cant drive without a license")
//     }
// } else {
//     console.log("you are too young to drive")
// }

// // // switch statement
// let x = 3;
// switch (x) {
//     case 3:
//         console.log("three")
//         break;
//     case 2:
//         console.log("two")
//         break;
//     default:
//         console.log("default value")
// }
// let trafficlight = "green";
// let message = ""
// switch (trafficlight) {
//     case "red":
//         message = "stop immediately";
//         break;
//     case "yellow":
//         message = "prepare to stop";
//         break;
//     case "green":
//         message = "proceed or continue driving";
//         break;
//     default:
//         message = "invalid traffic light colour";
// }
// console.log(message)

// let name = favour;
//  let age = 13;
//  if (age >= 13) {
//      if (age) {
//         console.log("you are alfred favour ")
//     {else {
//         console.log("you are not alfred")
//     }
// let  daynum = 7;
//  switch(daynum) {
//     case 1:
//         message = "sunday";
//         break;
//     case 2:
//         message = "monday"
//         break;
//     case 3:
//         message = "tuesday"
//         break;
//     case 4:
//         message = "wednesday"
//         break;
//     case 5:
//         message = "thursday"
//         break;
//     case 6:
//         message = "friday"
//         break;
//     case 7:
//         message = "saturday"
//         break;
//     default:
//         message = "invalid day number"
//  }
// console.log(message)

// for loop , while loop and the do while loop 
// task pratice more about ^^^^
//     console.log("its hot outside")
// // //condition to check positive number
// if(number > 0){
//     //the body of the if statement
// demo.innerhtml = "positive number"

// //else statement
// else{
// demo.innerhtml="negative number"
// // }
// //if else statement

// let Res;

// if(age >= 18){
//     demo.innerhtml = 'You are an Adult'
// }else{
//     demo.innerhtml = 'You are a minor'
// }

// //else if
// let rating = 10
// //rating of 4 and below is bad
// //rating of 10 or above is good
// //else the rating is average

// if(rating <= 4){
//     console.log("bad rating")
// }else if(rating >=10){
//     console.log("good rating")
// }else {
//     console.log("average rating")

// }

// let userAge = parseInt(prompt("Enter your age:"))
// let output = document.getElementById("output")

// if(userAge >= 18){
//     let userLicense = confirm("Click 'ok' if you have a license and 'cancel' if you don't")
//     if(userLicense){
//         output.textContent = "You can drive"
//     }else {
//         output.textContent = "you are too young to drive"
//     }
// }else {
//     output.textContent = "you cant drive without a licence to drive"
// }






// for loops 
// for (let i = 1; i < 3; i++){
//     console.log(i)
// }
// {for (let i = 1; i < 3; i++)
//     console.log("hello , world")
// }
// for (let i = 1; i <=6; i++){
//     console.log(i)
// }
// console.log("end")

// 1-20
for (let i = 1; i <=20; i++){
    console.log(i)
}
console.log("end")
// even number
for (let i = 2; i <=20; i += 2){
    console.log(i)
// }
// // odd number
// for (let i = 1; i <=20; i+=2 ){
//     console.log(i)
// }
// //from 10-1
// for (i = 10; i >=1; i--){
//     console.log(i)
// }
// //from 20 - 2 even number
// for (let i = 20; i >=2; i-=2){
//     console.log(i)
// }
// for (let i = 20; i >=2; i-=2){
//     console.log(i)
// }
// let sum = 0
// for (let i = 2; i <= 20; i +=2){
//     sum +=i
// }
// console.log (sum)


// //while loop
// let a = 0 
// while (a < 5){
//     console .log (a)
//     a++
// }


// // let b = 1 
// // while (true) {
// // // console.log(b)
// // b++
// // }

// console.log("End")


// let c = 1 
// while (false){
//     console.log(c)
//     c++
// }

// // do while loop 
// let d = 1 
// do{
//     console.log (d)
//     d++
// }while (false)
// console.log('end')

//     // break and continue
// for (let i = 1 ; i <=10 ; i++){
//     console.log(i)
//     if (i == 5){
//         break ;
//     }
// }


// for (let i = 1 ; i <=10 ; i++){
//     if (i == 5){
//         break ;
//     }
//     console.log(i)
// }

// //continue statement 
// for (let i = 1 ; i<= 10; i++){
//     if (i == 5){
//         continue
//     }
//     console.log(i)
// }
// // print odd number
// for (let i = 1 ; i<= 10; i++){
//     if (i % 2 = 0){
//         continue
//     }
//     console.log(i)
// }
// // print even number
// for (let i = 1 ; i<= 10; i++){
//     if (i % 2 = 1){
//         continue
//     }
//     console.log(i)
// }