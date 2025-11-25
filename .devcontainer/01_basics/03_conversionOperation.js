"use strict";
let score = '33abc'

console.log(typeof score)
/*use of Number(datatype)
 // NULL Number mein convert hoke number deta
 //pure no. nhi hai toh (like "33abc") to NaN milega 
 //undefined k case mein bhI NaN milega 
 //true => 1
 //false=> 0

 */

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log( valueInNumber)
let isLoggedin = 1
let tonumber = Boolean(isLoggedin)
console.log(tonumber)
/* boolean coversions
1=> true
""=> false
"rishabh"=> true*/
////// Conversion to strings
let someNumber = 33
let toNum = String(someNumber)
console.log(toNum)
console.log(typeof toNum)