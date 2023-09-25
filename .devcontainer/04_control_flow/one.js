// if else condition

const num = 9000;

if(num>10000){
    console.log(`${num} is Greater than 10000`);
}else{
    console.log(`${num} is Less than 10000`);
}

//Nested if else statement

const month = 5;

if(month ===1){
    console.log("This is Janaury")
}else if(month ===2){
    console.log("This is February")
}else if(month == 3){
    console.log("This is march")
}else{
    console.log("Invalid month")
}

//AND , OR, NOT operator

//AND
const isUserLoggedIn =true
const isEmailRight = true

if(isUserLoggedIn && isEmailRight){
    console.log("Welcome user")
}else{
    console.log("Invalid credentials")
}


//OR
const isUserLoggedOut =true
const isEmailWrong = false

if(isUserLoggedOut || isEmailWrong){
    console.log("Welcome user")
}else{
    console.log("Invalid credentials")
}

//NOT
const val1 = 300
const val2 = 350

if(val1 !== val2){
    console.log("Incorrect Values")
}else{
    console.log("Correct Values")
}