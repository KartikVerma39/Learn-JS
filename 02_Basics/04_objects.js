const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 5: "b"}

// const obj3 = {obj1 , obj2}
// const obj4 = Object.assign({} , obj1 , obj2 , obj3)

const obj4 = {...obj1 , ...obj2}
// console.log(obj4);



// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))