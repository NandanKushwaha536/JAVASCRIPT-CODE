let myHeros=["thor","spiderman"]
let dcHeros=["batman","flash","superman"]


let heropower={
    thpr:"hammer",
    spiderman:"sling",

    getSpidermanPower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is persent in all object`)
}

Array.prototype.heyHitesh=function(){
    console.log(`hitesh say hi`)
}

console.log(myHeros.heyHitesh())
// console.log(heropower.heyHitesh())

const user={
    name:"top name",
    email:'top@gmail.com'
}

const Teacher={
    makevideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TAAssistant={
    makeAssistament:"Js Assignment",
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user

console.log(TAAssistant.isAvailable)