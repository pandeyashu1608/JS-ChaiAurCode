//truthy & falsy values


//truthy values

const email = "hitesh@gmail.com"

if(true){
    console.log("Got user email")
}else{
    console.log("Dont have user email")
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN          //other than these all are truthy values


//check an empty array

const userEmail = []

if(userEmail.length===0){
    console.log("Array is empty")
}

//check an empty Object

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}


//Nullish Coalescing Operator (??): null undefined

let val1;

val1 = 5??10
// val1 = null??10
//val1 = undefined??10??20
//val1 = null ?? 10 ?? 30

console.log(val1)



//Turnary Operator

// condition ? true : false;

