const string = "Hey, I am string";          //String
console.log(string);

const string2 = 'Hey, I am string2';
const string3 = 'Hey, I am string3';
const string4 = `${string2} and ${string3}`;         //Template Litral
console.log(string4);

/*******String Methods*******/

const str = "String";

//length method
strLength = `Length of the string 'length' is ${string.length}`;
console.log(strLength);
console.log(strLength[2]);
console.log(strLength[strLength.length - 1]);

//includes method
if(str.includes("ing")){
    console.log("found ing");
}else{
    console.log("Not found ing");
}

//startsWith and endsWith methods
if(str.startsWith("S")){
    console.log("Yes")
}else{
    console.log("No")
}

if(str.endsWith("g")){
    console.log("Yes")
}else{
    console.log("No")
}

//indexOf() method   - Finding the position of a substring in a string
const tagline = "Hey, My name is Ashutosh Pandey";
console.log(tagline.indexOf("Ashutosh"));
console.log(tagline.indexOf("b"));

//slice() - extracting a substring from a string
const animal = "Elephant";
console.log(animal.slice(0,3));

//toUpperCase() and toLowerCase()
const text = "I am Ashutosh";
console.log(text.toUpperCase());
console.log(text.toLowerCase());

//replace() method
const replaceText = "Replace me with I"
console.log(replaceText)
console.log(replaceText.replace("me","I"))

//replaceAll() method
const replaceAllText = "To be or not to be"
console.log(replaceAllText)
console.log(replaceAllText.replaceAll("be","code"))