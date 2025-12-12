// //if in js
// //===checks value as well as type
// if(2==="2"){
//   console.log("executed")
// }//thi sis not executed
// else{console.log("not executed")}
// //switch statement
// const month =3
// switch (month )
// {
//     case 1: 
//     console.log("jan")
//     break;
//     case 2: 
//     console.log("feb")
//     break;
//     case 3: 
//     console.log("mar")
//     break;

//     default: 
//     console.log("gth")
// }
// //truthy and falsy
// //falsy: 0,false,-0,BigInt 0m, undefined,NaN,""
// //truthy: "0"->truthy, "false",[],{}, function(){}
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("its a empty object")
}
//nullish coalencing opertor
// let val1
// val1 =5??10//checks safty for null
// val1= null??10??16//will return the firs true value here it is 10

// console.log(val1)

