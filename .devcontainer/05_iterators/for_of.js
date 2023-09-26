// 1)
const arr = [1,2,3,4,5,7,6]

for (let key of arr){
    console.log(key)
}

// 2)
const greetings = "Hello World"

for(let greet of greetings){
    console.log(`Each char is ${greet}`)
}

// 3).  Maps

const map = new Map()
map.set('IN', 'India');
map.set('IN', 'India');                             //maps always stores unique values
map.set('USA', 'United States of America');
map.set('FR', 'France');
map.set('BR', 'Britain');

for(const [key,value] of map){                      //Array distructuring
   console.log(`Shortcut for ${key} is :- ${value}`)
}



// 4) for of on Objects - objects are not be iteratable via for of loop