const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const totalValue = myNumbers.reduce((accumulator, currval)=>{
    console.log(`accumulator: ${accumulator} and current value: ${currval}`)
        return accumulator+currval;
},0)

console.log(totalValue)

//another example

const shoppingCart = [
    {
        itemName:"Python course",
        price:2999
    },
    {
        itemName:"JS course",
        price:999
    },
    {
        itemName:"PHP course",
        price:5999
    },
    {
        itemName:"React course",
        price:8999
    },
    {
        itemName:"JAVA course",
        price:22999
    }
]

const totalBill = shoppingCart.reduce((acc,item)=>{
      return acc+item.price;
},0)

console.log(`Yout Total Bill: ${totalBill} Rupees`)