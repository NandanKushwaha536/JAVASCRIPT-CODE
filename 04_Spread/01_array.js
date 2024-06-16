const oneArray=[1,2,3,4]
const twoArray=[5,6,7,8]

// const threeArray=oneArray.concat(twoArray)

// const threeArray=[oneArray, twoArray]

const threeArray=[...oneArray,...twoArray]

// console.log(threeArray)

let newArryTwo=new Array(1,2,3)
// console.log(newArryTwo)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// rest
function manyArguments(){
    let args=Array.from(arguments)
    let finalArr=args.map(e => e)
    console.log(finalArr)
}

function manyArgumentv2(...args){
    let finallArr=args.map(e =>e)
    console.log(finallArr)
}
manyArguments(1,2,3)
manyArgumentv2(1,2,3)




