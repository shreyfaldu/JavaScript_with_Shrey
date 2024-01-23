//Array

//Array Shallow copy =>par kam kare shallow copy etle e direct refernce pass kare means e direct orignal value ma change thai
 // Deep copy => Etle Koi value ni copy pass thai orignal value ma kai fer nai na pade

let myArray = [1,2,3,4,5]
let myHeros = ["Shaktiman","naagraj"]

let myArray2 = new Array(1,23,3,4)
// console.log(myArray[0])

//Array methods

myArray.push(6)
// console.log(myArray)

myArray.pop()
// console.log(myArray)

myArray.unshift(8)
// console.log(myArray)

myArray.shift()
// console.log(myArray)
// console.log(myArray.includes(6))
// console.log(myArray.indexOf(3))


let newArr = myArray.join() //=>Join a array ne copy pn kare and ene string ma pn covert kare
// console.log(newArr)
// console.log(typeof newArr)

//slice, splice

console.log("A",myArray)

console.log(myArray.slice(1,3)) //=>LAst index na le

console.log(myArray.splice(1,3)) //=> Last index le and aakha array ne manypulate kari nakhe

console.log(myArray)