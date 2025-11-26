/*primitive data types : stack
non  primitive data types : heap*/
let myname= "rishabh"
let another = myname
console.log(another)
let user1 ={
    name : "rishi",
    account :12345,
}
let user2 = user1;
user2.name= "anshika"
console.log(user2.name)
console.log(user1.name)