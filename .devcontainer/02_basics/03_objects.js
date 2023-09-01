const mySymbol = Symbol("I am Symbol");

const myBio = {
    name:"Ashutosh Pandey",
    age:32,
    email:"ashutosh@theconnecthub.com",
    qualification:"Post Graduate",
    ["Occupation"]: "Software Engineer",
    ["Company Name"]:"TCH",
    [mySymbol]:"I am symbol"
}

console.log(myBio);
console.log(myBio.email)
console.log(myBio["Occupation"])
console.log(myBio[mySymbol])

//Objects value change

myBio.email = "ashu@gmail.com"
console.log(myBio);

//function declaration
myBio.greetings = function(){
    console.log(`hello i am ${this.email}`)
}
console.log(myBio.greetings())