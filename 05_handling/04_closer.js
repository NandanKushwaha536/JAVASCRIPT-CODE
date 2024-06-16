let score=6

function one(){
    let score=0
    console.log(score)
}

function Two(){
    let score=3
    console.log(score)
}

function three(){
    console.log(score)
}

// one()
// Two()
// three()
// console.log(score)

function outerFunc(){
    let outerVar='I am at scope level 1'
    function innerFun(){
        let innerVal='i am at scope level 2'
        console.log(outerVar)
    }
    console.log(innerVal)
    innerFun()
}

// outerFunc()

const myGloabalValue=0

function func(){
    const val1=1;
  console.log(myGloabalValue);

  function inneroFunc(){
    const val2=2
    console.log(val2, val1,myGloabalValue)

    function innerofInnerFunc(){
        const val3=3
        console.log(val3, val2,val1, myGloabalValue)
    }
    innerofInnerFunc()
  }

  inneroFunc()

}

// func()

// closure

function superFunc(){
    let outerValue=' i am outer'
    function minorFunc(){
        console.log(outerValue)
    }

    minorFunc()
}

// superFunc()


const errorMessage="file not found"

setTimeout(function callback(){
    console.log(errorMessage)
}, 1000)

let pageCount=0

const items=[2,4,5,6,7.8]

items.forEach(function iterator(num){
    pageCount++
    console.log(num);
})

console.log("pagecount",pageCount)
