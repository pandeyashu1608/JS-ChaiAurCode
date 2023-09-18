const globalVar =23;
// var globalVar2 = 25;
let name="Ashutosh";

function gFunc(){
    var globalVar2=12;
    const globalVar =12;
    console.log(`Sum of global variables is = ${globalVar+globalVar2}`)
}
gFunc()

// console.log(globalVar2)

////////////////////////Nested scope////////////////////////////
function one(){
    const username="Hitesh"

    function two(){
        const web = "Youtube"
        console.log(username)
    }

    // console.log(web)       //we can't do this

    two();
}
// console.log(username)     //we can't do this

one()



if(true){
    const username = "Hitesh"
    if(username==="Hitesh"){
        const web= " Youtube"
        console.log(username+web);
    }
    // console.log(web)
}
// console.log(username)

//////////////////////////// Hoisiting ////////////////////////
function1()         //function declaration support hoisting
function function1(){
    console.log("I support Hoisting")
}
// function1()

// function2()                  //function expression does not support hoisting
const function2 = function(){
    console.log("I do not support Hoisting")
}
function2()