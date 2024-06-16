let emptySet = new Set ()

// console.log(emptySet.size)

let myArray=[1,2,3,4,5,6]

let newset=new Set(myArray)
// console.log(newset)

newset.add(9)
newset.clear()
// console.log(newset )
// console.log(newSet.has(9))

function setDifference(setA, setB){
    return new Set ( [...setA].filter(el => !setB.has(el)))
}


let map=new Map()

console.log(map.size);

let arr=[
    [1, "Mithun"],
    [2, 'Alka'],
    [3, "prabir"],
    [4, 'shivam'],
    [5, 'vinay']
];

let arry=arr.map((arrayItem) => map.set(arrayItem[0], arrayItem[1]))
console.log(arry)