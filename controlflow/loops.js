// // // // const arr = [ 1,2,3,4,5]
// // // // for (const val of arr) {
// // // //     console.log(val)
// // // // }
// // // // //maps
// // // const map = new Map()
// // // map.set("india","in")
// // // map.set("america","usa")
// // // map.set("france","fr")
// // // map.set("pakistan","pk")
// // // // console.log(map) 
// // // for (const [key,value] of map) {
// // //    console.log(key, ":-" ,value) ;
// // // }
// // const myobj ={
// //     js:"javascript",
// //     cpp:"c++",
// //     rb:"ruby",
// //     swift:"swift by ios",

// // }
// // for (const key in myobj) {
// //     colsole.log(myobj[key])
    
    
// // }
// const myarr=["batman","superman","flash","aquaman"]
// myarr.forEach(function (item){
//     item+="isshit"
// })
// console.log(myarr)





//for each loop ye kuch return nnhi krta 
// const coding =["js","Cpp","python","rust"]
// coding.forEach((item)=>
// {
//     // console.log(item)
// })
//for each loopse return value lene k liye
const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynums.filter((nums)=> nums>4)
// console.log(newnums)

const mynew =[]
mynums.forEach((num)=>{
    if(num>4) mynew.push(num)
}
)
console.log(mynew)