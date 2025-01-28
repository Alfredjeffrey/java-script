// implicit type conversion - automatic type conversion
// emplicit type conversion - manual type coversion

//concatenate joining together 
//type node - folder first name and tab button to load terminal code
//implicit conversion

//implicit conversion to string
let result;

result = "2" + 4;
console.log(result);
console.log(typeof result);
 //answer = 24 "type string"

result = "3" + 4 + 2;
console.log(result);
console.log(typeof result);
//answer = 342 "string" cocatenate all numbers 

result = 4 + 2 + "3";
console.log(result);
console.log(typeof result);
//answer = 63 "string" = 

//note whatever is in string will cocatenate 
//strings only work for numeric numbers not alphabets 
//implicit conversion  to number 

result = "4" - 2;
console.log(result);
console.log(typeof result);

result = "4" - "2";
console.log(result);
console.log(typeof result);

result = "4" * "2";
console.log(result);
console.log(typeof result);

result = "4" / "2";
console.log(result);
console.log(typeof result);

result = "4" % "2";
console.log(result);
console.log(typeof result);

//non numeric strings result to nan 
result = "hello" - "world";
console.log(result);
console.log(typeof result);

//note putting booleans in a string result to NAN not a number 
//implicit boolean conversion to number 
result = "4" - true;
console.log(result);
console.log(typeof result);

result = "4" - false;
console.log(result);
console.log(typeof result);

result = 4 * null;
console.log(result);
console.log(typeof result);

//explicit type conversion
let res;
//covert string to number 
res = number("33")
console.log(res)
console.log(res ,"-," type of res)

//convert boolean to string
res = boolean(24)
console.log(res)
console.log("-"typeof res)
//numeric strings used with -,/,*
let res;

res = "10" - "5"
console.log(res)
console.log(res -typeof res)

res = "5"- 2 
console.log(res)
console.log(res -typeof res)

