// //singleton
// const mysym = Symbol("rishabh")
// //object literals
//   const myobj ={
//     name: "rishabh",
//     scetion : "ds2",
// [mysym]: "rishabh",
  
//     age : 22,

//   }
//   console.log(myobj["scetion"])
//   console.log(typeof(myobj[mysym]))
// //to free a object
// myobj.name = "rishi"
// Object.freeze(myobj)
// myobj.name="pandey"
// console.log(myobj)

const myobj = {
    name: 'rishabh',
    age : 22,
    class: "ds2"
}
myobj.greeting = function(){
    console.log(`hello ${this.name} js is dope`)
}
console.log(myobj.greeting())