const tinderUser ={
    name :"rishi",
id : 1234,
isLoggedIn : false,

}
const regularUser = new Object({
   fullName :{
        first: "rishabh",
        lastname:"pandey",
    }
})
// console.log(tinderUser)
// console.log(regularUser.fullName.first)
//merger of objects
const obj1 ={
    a:"1",
    b:"2",
}
const obj2 ={
    c:"3"
    ,
    d:"4",

}
const object3 = Object.assign({} ,obj1,obj2)//merger 
console.log(object3)
const obj3 = {...obj1,...obj2}//merger using spread
console.log(obj3)
