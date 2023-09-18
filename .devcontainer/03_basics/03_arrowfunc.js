//this keyword

const user = {
    username: "Hitesh",
    price:333,

    welcomemsg: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}
// user.welcomemsg();
// user.username = "Sam"
// user.welcomemsg();
// console.log(this)

// this keyword inside functions

function chai(){
    console.log(this)
}
chai()

const chayos = function(){
    const username = "hitesh"
    console.log(this.username)
}
chayos()

const coffee = () =>{
    const username = "hitesh chaudhry"
    console.log(this.username)
}
coffee()

//arrow function
// 1).
const addTwoNum = (num1,num2) =>{
    return num1+num2
}
console.log(addTwoNum(2,5))

// 2).
const addTwoNums = (num1,num2) => num1+num2
console.log(addTwoNums(5,5))

// 2).
const addTwoNumss = (num1,num2) => (num1+num2)
console.log(addTwoNumss(5,7))