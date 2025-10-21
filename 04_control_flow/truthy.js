const userEmail = []

if(userEmail) {
    console.log("GOt user email");
}
else{
    console.log("Don't have user email");
}


// false values

// false,Undefined,0,NaN,-0,BigInt 0n, "",null


// truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

 