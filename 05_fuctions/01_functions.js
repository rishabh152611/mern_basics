// // //defintion of the function
// // function sayMyName(){
// // console.log("rishabh")
// // }
// sayMyName()//executed
// sayMyName//refernced
// function add2nums(num1,num2){
//    console.log( num1+num2);
// }
// add2nums(2,null)
// console.log(typeof(add2nums(2,"a")))
function Status(username){
return `${username} just logged in`
}
Status("rishabh")//doesnt return anything
console.log(Status("rishabh"))//return the fuctions constent
function logInCheck(username){
    if(username===undefined){
        return
    }
    else{
        return `${username} is onboard`
    }
}
console.log(logInCheck("rishabh"))
console.log(logInCheck())