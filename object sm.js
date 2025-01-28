// const student = {
//     firstName: "john",
//     lastName: "doe",
//     age: 20,
//     gender: "male"
// }
// console.log(student)
// console.log(typeof student)
// // accessing object properties
// // using the dot notation

// // console.log(student.firstName)
// // console.log(student.lastName)

// // // using the bracket notation
// // console.log(student["firstName"])
// // console.log(student["lastName"])

// // const person = {
// //     firstName: "john",
// //     lastName: "doe",
// //     age: 20,
// //     gender: "male",
// //     hobbies: ["coding", "writing"],
// //     address: {
// //         city: "new york",
// //         state: "ny",
// //         country: "USA"
// //     },
// //     friend: {
// //         firstName: "john",
// //         lastName: "doe",
// //         age: 20,
// //         hobbies: {
// //             coding: {
// //                 type: [{ frontend: ["javascript", "html", "css"] }]
// //             },
// //         cooking: {
// //                 type: ["rice", "beans", "spaghetti"]
// //             }
// //         }

// //     }
// // };
// // console.log(cooking.[2])
// // console.log(person.friend.hobbies.frontend.[2])


// //oblect method 
// //object method are function that are defined inside an object
// const user = {
//     name:"daniel",age:"20",gender:"male",
//     greet: function(new_name){
//         console.log("hello",this.name,"your gender is",this.gender,"and your new name is",new_name)
//         this.name = new_name;
//     }
// }
// user.greet("john")
// user.greet("david")
// //constructors
// function Person(){
//     this.name = "john"
//     this.age = 30
//     this.gender = "male"
//     this.greet = function(){
//         console.log(
//             "hello",this.name,"how are you?"
//         )
//     }
// }
// console.log(Person)
// //NEW KEYWORD
// const person1 = new Person()
// console.log(person1)
// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.gender)
// person1.greet()

// const person2 = new Person()
// console.log(person2)
// console.log(person2.name)
// console.log(person2.age)
// console.log(person2.gender)
// person2.greet()

// function userobject (name,age,gender){
//     this.username = name
//     this.age = 20
//     this.gender = gender
// }

// const userobj1 = new userobject("david@gmail.com",20,"male")
// const userobj2 = new userobject("mary@gmail.com",19,"female")

// console.log(userobj1)
// console.log(userobj2)

// function User(email,age,gender,password1,password2){
//     this.email = email
//     this.age = age
//     this.gender = gender
//     this.password1 = password1
//     this.password2 = password2
// }
// const user1 = new User("jeff@gmail.com",21,"male","password1","password2")
// const user2 = new User("angel@gmail.com",29,"female","password1","password2")

// console.log(user1)
// console.log(user2)

// function validateUser(email,age,gender,password1,password2){
//     this.email = email
//     this.age = age
//     this.gender = gender
//     this.password1 = password1
//     this.password2 = password2

//     this.validatepassword = function(){
//         if(typeof this.password1 != "string"&& typeof this.password2 !="string"){
//             return new error("password must be strings")
//         }else if(this.password1 !== this.password2){
//             return new error("passwords do not match")
//         }else if(!(this.password1.length >= 8)){
//             return new error("password must be 8 or higher than 8")
//         }else{
//             return "password validation successful"
//         }
//     }
// }
// const validatepassword = new

// function person(name,age,gender,examno,){
//     this.name = name
//     this.age = age
//     this.gender = gender
//     this.examno

//     this.validate Person = function(){
//     (typeof)
//     }
// }


//GETTERS AND SETTERS WITH
const student = {
    first_name : "john",
    last_naame : "doe",
    age : 20,
    gender : "male",
    isstudent : false,

    get fullName(){
        return `Fullname = ${this.first_name}${this.last_naame}`
    },
    get confirmStudent(){
        return this.isstudent?`${this.first_name}${this.last_naame}is a student`:`${this.first_name}${this.last_naame}is not a student`
    },

    set setStudent(value){
        this.isstudent = value
    }
}
console.log(student)
console.log(student.fullName)
console.log(student.confirmStudent)

student.setStudent = true
console.log(student.confirmStudent)

console.log(student)