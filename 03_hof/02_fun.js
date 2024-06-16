let arr=[2,3,4,5]

arr.forEach(function(element, index, arr){
    console.log(index, element, arr)
})

arr.forEach((element, index, arr)=>{
     console.log(index, element, arr)
})

const heros=["naagraj", "dog", "dhruva", "maniraj"]

heros.forEach((el)=>{
    // console.log(el.toUpperCase())
})

heros.map((el)=>{
    console.log(el.toUpperCase())
})

// filter

console.log(heros)

const herosWithRaj=heros.filter((el)=> {
  return  el.endsWith("raj")
})

console.log(herosWithRaj)

// shopping card

const cartBill=[20, 30, 50]

const sumOfCartBill = cartBill.reduce((prev, curr)=>prev+curr,0)

console.log(sumOfCartBill)

const gameScore=[200, 300, 310, 250, 150]

// check if all values are numbers

const gameScoreCheck=gameScore.every((v)=> typeof v==='number')

console.log("check:", gameScoreCheck)

// find score above 200

const above200 = gameScore.find((score)=> score > 200)

console.log(above200)