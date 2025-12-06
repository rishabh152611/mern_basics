// //arrays in js are resizable and doesnt need to be specific data types

// // const myarray = [1,2,3,4,5]

// console.log(myarray[4])
// const myheros = new Array(1,2,3,4,5)

// console.log(myheros.includes('jeevan'))
// const mynewarray = myheros.join()//converts complete arrays to string

// // // console.log(mynewarray[2])
// // console.log(myheros.slice(1,3))//last limit not included
// // console.log(myheros.spice(1,3))//last limit is included
// const myarray =[1,2,3,4,5] //defintion

// const marvelHeros = ["spiderman","thor","hulk"]
// const dcHeros = ["batman","flash",'wonderwoman']
// // marvelHeros.push(dcHeros);//not a good method of merging the array which is added becmes the third element of the array in which it is added
// //we use concat
// const allHeros =marvelHeros.concat(dcHeros)
// console.log(allHeros) //gets each elemet separately

//use of spread

const marvelHeros = ["spiderman","thor","hulk"]
 const dcHeros = ["batman","flash",'wonderwoman']
 const allnewheros = [...marvelHeros,...dcHeros]//glass breaking analogies
 console.log(allnewheros)
const no = [1,2,3,[4,5,6,7],[2,[2,3,4,5]]]
const newarr = no.flat(Infinity)//important

console.log(newarr)
console.log(Array.from("rishabh"))
