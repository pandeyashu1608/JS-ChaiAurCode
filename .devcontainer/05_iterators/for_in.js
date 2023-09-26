// for in loop for objects

const myObject = {
    js:"Javascript",
    cpp:"c++",
    py:"python"
}

for(const key in myObject){
    console.log(`${key} shortcut is ${myObject[key]}`)
}

//for in loop for Arrays

const programmingLang = ["ruby", "Python", "Data Structure", "Javascript"]

for(const key in programmingLang){
    console.log(`${programmingLang[key]}`)
}

//for in not used in Map function