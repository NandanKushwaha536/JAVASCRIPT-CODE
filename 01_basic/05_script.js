// let obj={
//     id:101,
//     name:"alex",
//     salary:10000
// }
// console.log(obj)


// let emp=new Object();

// emp.id=102
// emp.name="alexa"
// emp.salary=10000

// console.log(emp)


// function Emp(i, n, s){
//     this.id=i;
//     this.name=n;
//     this.salary=s;
// }

// const e=new Emp(103,"amy", 12000)

// console.log(e)

// console.log(emp.id)


let emp={
    id:101,
    name:'sanket',
    age:24
}

let keys=Object.keys(emp);
console.log(keys);

let values=Object.values(emp);
console.log(values)

let entries=Object.entries(emp);
console.log(entries)

Object.seal(emp)
emp.id=104
console.log(emp)

Object.freeze(emp)
emp.address='random'
emp.id=100;
console.log(emp)

let o=Object.assign({x:16},emp)
console.log(o)