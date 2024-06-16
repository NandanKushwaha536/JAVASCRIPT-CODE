let pattern= "pw"

let reqExone=new RegExp(pattern)

let flag = 'gi'

let regExtow= new RegExp(pattern, flag)

let regExthree=/pw/gi

const strToCheck ='pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent'

const result = regExthree.test(strToCheck)

console.log(result)


const anotherResult=strToCheck.match(regExthree)

console.log(anotherResult)

const anotherMoreResult=strToCheck.replace(regExthree, 'p-w')

console.log(anotherMoreResult)

const webUrl="http://pwskills.com/hitesh%30chudhari"

const useableUrl=webUrl.replace(/%\d0/,'-')

console.log(useableUrl)