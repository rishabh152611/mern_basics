let mydate = new Date() //it is a object
console.log(mydate.toString())//gives aaj ki date
//java script mein month 0 se start hota jan is 0
let mynewdate = new Date(2023,0,24 )

let nowTime = Date.now() //1st jan 1997 se kitna time hua hai
console.log(nowTime) //give current time

console.log(mydate.getTime())
console.log(`today date is ${nowTime.getDay()} and year is ${nowTime.getYear()} `)