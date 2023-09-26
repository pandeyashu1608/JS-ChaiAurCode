// for loop

for(let i=0;i<=10;i++){
    console.log(i)
}

//nested for loop
for(let i=1;i<=10;i++){
    console.log(`Table of ${i}`)
    for(let j=1;j<=10;j++){
        console.log(`${i}*${j} = ${i*j}`)
    }
}

//for loop in arrays
let myArray = ["Captain America","Iron Man","Batman"]
for(let i=0;i<myArray.length;i++){
    const element = myArray[i];
    console.log(element)
}

//break & continue statement in for loop

//break
for(let i=0;i<=20;i++){
    if(i===5){
        console.log("5 detected, and the loop will be stopped here");
        break;
    }
    console.log(`value of i is ${i}`)
}

//continue
for(let i=0;i<=20;i++){
    if(i===5){
        console.log("5 detected, and the loop will be continue from here");
        continue;
    }
    console.log(`value of i is ${i}`)
}