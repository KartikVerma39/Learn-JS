// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt


// Js is dynamic type language


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

// const bigNumber = 344444444333333332455n



// Reference (Non Primitive)


// Array , Objects, Functions


// const heros = ["shaktiman" , "naagraj" , "doga"];

// let myObj = {
//     name: "Hitesh",
//     age: 22,
// }


// const myFunction = function(){
//     console.log("Hello World");   
// }

// console.log(typeof heros) 


// ++++++++++++++++++++++++++++++++++++++++++++++



// Stack , Heap

// Stack(Primitive) , Heap(Non Primitive)


let myYoutubename = "hiteshChoudhary"

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kartik@google.com"

console.log(userOne.email);
console.log(userTwo.email);