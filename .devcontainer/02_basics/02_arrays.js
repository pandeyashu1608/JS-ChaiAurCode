const marvelHeroes = ["Ironman" ,"Captain America", "Black Panther"]
const dcHeroes = ["Batman", "Superman", "Flash"]

const concatArray = marvelHeroes.concat(dcHeroes);
console.log(concatArray)
console.log("Type of array -", typeof(concatArray));

const spreadArray = [...marvelHeroes, ...dcHeroes]
console.log(spreadArray)
console.log("Type of array -", typeof(spreadArray));

console.log(spreadArray.sort())
console.log(spreadArray)

console.log(Array.isArray("Ashutosh"))
console.log(Array.isArray(dcHeroes))

console.log(Array.from("Ashutosh"))
console.log(Array.of("Ashutosh"))

const n1 = 100;
const n2 = 200;
const n3 = 300;

console.log(Array.of(n1,n2,n3))