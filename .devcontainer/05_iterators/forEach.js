const coding =["js","rubby","java","python","c++"]

// 1). Variation
coding.forEach(function (item) {
    console.log(`${item}`)
});

// 2). Variation
coding.forEach( (item) => {
    console.log(`${item}`)
});

// 3). Variation
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

// 4) Variation
coding.forEach((item,index,arr)=>{
   console.log(item,index,arr)
})