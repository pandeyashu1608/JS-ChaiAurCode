const codingLangs = ["Java","Ruby","JS","Python","pHP"]

const value = codingLangs.forEach((items) => {
    console.log(items);
     return items;                           
})

console.log(value)           // The forEach() method doesn't return anything. That's why we will get undefined

//To Solving this problem we use filter() method
//filter() method

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((nums)=>nums>4)          //code in one line
console.group(newNums)

const newNums1 = myNums.filter((nums)=>{               //readable code using return keyword
    return nums>4;
})
console.group(newNums1)


//filter() example

const books =[
    {title:'Book one', genre:'History',publish:'1986',edition:'2023'},
    {title:'Book two', genre:'Sci-Fi',publish:'1966',edition:'2023'},
    {title:'Book three', genre:'History',publish:'1985',edition:'2023'},
    {title:'Book four', genre:'Novel',publish:'1999',edition:'2023'},
    {title:'Book five', genre:'Non-Fiction',publish:'2003',edition:'2023'},
    {title:'Book six', genre:'History',publish:'2005',edition:'2023'},
    {title:'Book seven', genre:'Bio',publish:'2016',edition:'2023'},
    {title:'Book eight', genre:'History',publish:'1986',edition:'2023'}
]

const userChoice = books.filter((item)=>item.genre === 'History')
console.log(userChoice)