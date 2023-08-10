//Primitive Type

// 7 types :- String, Number, Boolean, null, Undefined, BigInt and Symbol 

let naam="Rameshwar"
let age=21
let tru = true
let nulll = null
let undef;
let nul = ""
let bint = 1232312312312n
let id = Symbol(123)

console.table(typeof ([naam,age,tru,nulll,undef,nul,bint,id]))



// 2. Reference Type(Non-primitive type) 

//Array, Objects and Functions



//Stack(Primitive) and Heap(Non-primitive)

let myName = "Ashutosh Pandey"
let anotherName = myName
anotherName = "Ashu"

console.log(anotherName)


let userOne = {
    email:"ashu@gmail.com",
    id:2
}

let userTwo = userOne;

userTwo.email = "ashutosh@google.com"

console.log(userOne.email)