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

// forEach on Objects inside array
const myCoding = [
    {
        langName:"Javascript",
        langFileName:"js"
    },
    {
        langName:"Python",
        langFileName:"py"
    },
    {
        langName:"Java",
        langFileName:"java"
    }
]

myCoding.forEach((item)=>{
  console.log(`${item.langFileName} full form is ${item.langName}`)
})