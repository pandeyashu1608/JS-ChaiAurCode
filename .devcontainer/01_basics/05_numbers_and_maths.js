const num = 1000000000.5654;

//check whether it is finite or not

console.log(isFinite(num));    //true
console.log(num.toLocaleString());
console.log(num.toPrecision())
console.log(num.toString())


//valueOf(method)

const num2 = new Number(23)

console.log(typeof num2)
console.log(num2.valueOf())
console.log(typeof (num2.valueOf()))

