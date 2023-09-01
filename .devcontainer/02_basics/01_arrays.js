//Array

const myArray = [0,1,2,3,4,5,6,7,"ashu","pandey"]

// console.log(myArray[3]);
// console.log(myArray.length)


//Array methods

// console.log(myArray.push(6))

// console.log(myArray.pop())

// console.log(myArray.shift())

// console.log(myArray.unshift(534))

// console.log(myArray.includes(87))

// console.log(myArray.indexOf(5))

// const newArray = myArray.join();
// console.log(newArray)
// console.log("type of new array - ", typeof(newArray))

// console.log("Origional Array - ", myArray)
// console.log("type of Origional array - ", typeof(myArray))

// const sliceArray = myArray.slice(1,4)
// console.log(sliceArray)
// console.log(myArray)

console.log(Object.keys(myArray))

const spliceArray = myArray.splice(1,4)
console.log(spliceArray)
console.log(myArray)