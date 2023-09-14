//basic function

function func(num){
    return num*num;
}
console.log(func(4));

//Function Hoisting

//1)
console.log(func2(5))
function func2(n){
    return n*n;
}

//2)
// console.log(square(7))         //Hoisting only work with function declaration not with expression
// const square = function (n){   //So square won't be accessed before function intialization
//     return n*n;
// }

//Function scope

const num1=20;
const num2 =30;           
const name="Chandu"

function multiply(){
    return num1*num2;
}
console.log(multiply())

function getScore(){
    const num1=4;
    const num2=5;

    function add(){
        return `${name} scored ${num1+num2}`
    }

    return add();
}
console.log(getScore())

//Rest operator

function calculateValue(val1, val2, ...restVal){
    return restVal;
}
console.log(calculateValue(20,30,4121,312,123))


//Function with objects
const user = {
    uName:"Ram",
    price:876
}

function objFunc(anyObj){
   console.log(`name is ${anyObj.uName} and price is ${anyObj.price}`)
}
objFunc(user);

//Function with Array
const arrayFunc = [23,123,12312,123,1231]

function returnArrayValue(getArrayVal){
    return getArrayVal[3]
}
console.log(returnArrayValue(arrayFunc))