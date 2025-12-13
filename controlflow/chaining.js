// const mynums =[1,2,3,4,5,6,7,8,9,10]
// const newNums = mynums.map((num)=>num*10
// ).map(num=>num+1).filter(num=>num>=40)
// console.log(newNums)
//reduce
const myNums = [1,2,3]
// const Mytotal=myNums.reduce(function (currval,acc){
//     console.log(`currval is: ${currval} and accumulator is ${acc}`);
//         return currval+acc
//     },0)
//using arrow function
// 
const Mytotal = myNums.reduce((acc,curr)=>{
    console.log(`curr is : ${curr} and acc is ${acc}`);
    return curr+acc},0)

    console.log(Mytotal)

