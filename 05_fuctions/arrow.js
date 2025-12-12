const user ={
    username: "rishabh",
    price: 999,
    welcomeMessage: function(){
        //console.log(`${this.username} ,welcome to the website`)
    }
}
// user.welcomeMessage()
// user.username="rishi"
// user.welcomeMessage()
//this global context mein kuch return nhi krta
//this bs obj k andar chlta funtion k andar nhi chlta
const chai = function(){
    let username ="rishabh"
    //console.log(this.user)
}


//arrow fucntion
const chai2 =()=>{//arrow function
   let username ="rishabh"
    //console.log(this.user) 
}

const addTwo = (num1,num2)=>{
    return num1+num2
}
const addTwo2 = (num1,num2)=> num1+num2//implicit return
//iife immediately involked function expressions
//to avoide pollution of funtion from global object we use iife 
(function chai (){
    console.log(`DB Connected`);
})();