// let a=[1,2,3,4,"sanket", false]

// console.log(a)

// let b= new Array("abc","def","ghi")

// console.log(b)

/*
given array ->[11,21,31,41,51]
index/pos ->   [0,1,2,3,4] last element index = arr.lenght
*/ 

// console.log(a[14])
// a[4]=5;

// console.log(a)

// let arr=[1,2,3,4,5];

// // add last element
// arr.push(6,7) 

// console.log(arr)
// // last element ko delete karta hai
// arr.pop();
// console.log(arr)

// // delete first element
// arr.shift()
// console.log(arr)

// // add first element
// arr.unshift(9)
// console.log(arr)

let a1=[1,2,3,4,5]
let a2=[3,5,5]
let a3=a1.concat(a2)
console.log(a1,a2,a3)

// convert string

let s=a3.join("")

// reverse element

a3.reverse()
console.log(a3)

let arr1=[1,2,3,4,5,6];

console.log(arr1.slice(2,5))

arr1.splice(2,0,1);

console.log(arr1)