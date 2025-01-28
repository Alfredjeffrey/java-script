let y  = 5;
let x;
//Addition
x = y +2;
console.log(x)

//substraction
x = y - 2
console.log(x)
//multiplication
x = y * 2;
console.log(x)

//exponention 
x = y ** 2;
console.log(x)

//division
x = y / 2;
console.log(x)

//remainder
x = y % 2 ;
console.log(x)

x = y % 10;
console.log(x)
//pre increment
x = ++y ;
console.log (x) //6
console.log(x) //6
y = 5;

//post increment
x = y++
console.log(x) //5
console.log(6) //6
y =5;
//pre decrement
x = --y;
console.log(x) //4
console.log(y) //4
y= 5;

//post decrement
x = y--;
console.log(x) //5
console.log(y) //4

// // assignment operator
 x = 10;
 y = 5;

 // +=
  x = 10;
 // x +=y // or x = x + y
 console.log(x)

 //  -=
 x = 10; 
 x -= y // x = x - y
 console.log(x)
// *=
  x = 10;
 x *= y // x = x*y
 console.log(x)

 // /= division sign 
 x = 10;
 x /= y // x = x /x y
 console.log(x)

 // % remainder sign
 x = 10;
 x %= y // x = x % y
 console.log(x)

  //string operators
  let t1 = "good", t2 = "morning", t3 = "";
 
  //concatenation
  t3 = t1 + "" + t2;
  console.log(t1)

  //comparison operators 
  //== weak sign
  //=== srict sign

  //== weak sign
  x = 5;
  console.log(x == 5);
  console.log(x == "5")

  //===strict sign
  console.log(x === 5);
  console.log(x ==="5");

  //!= weak not equal to
  console.log(x != 5);
  console.log(x != "5")

  //!== srict not equal to
  console.log(x !==5)
  console.log(x !=="5")
   
  // < greater than
  console.log(x <= 6);
  console.log(x < "4");

  //> less than
  console.log(x < 6);
  console.log(x < "4");

  //>= greater than or equal to 
  console.log(x >= 6);
  console.log(x >= "5");

  // <= less than or equal to
  console.log(x <= 6);
  console.log(x <= 5);

  //conditional(tenary) operator
//   let age = 20;
//   let drink = (age >= 18)? "beer":"soft drinks";
//   console.log(drink)

// let age = parseInt(prompt("enter your age"))
// console.log(age)
// console.log(typeof age)

// let output = document.getElementById("output")
// output.textContent = (age >= 18)? "you can drink beer" : "you can drink soft drink"

// logical operators
x = 6; y = 3;
// logical and &&
console.log(x < 10 && y > 1); //true
console.log(x < 10 && y > 7); //false
 //logical or || 
console.log(x === 5 || y === 5)//false
console.log(x === 5 || y === 5)//true

// logical not !
console.log((x === y)) //false 
console.log(!(x === y) )
console.log(true)
console.log(!false)
