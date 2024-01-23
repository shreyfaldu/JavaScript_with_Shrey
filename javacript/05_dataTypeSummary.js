// Primitive => call by value => copy thaiyelu aave

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const score2 = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail

const Id = Symbol('123')
const otherId = Symbol('123')

console.log(Id == otherId)

const bigNumber = 34544645754754643543n

// Refernce / Non primitive => Refernce Type

//Array ,Objects, Functions  

//Array => datatype is Function
const heros = ["Shaktiman", "naagraj", "doga"]

//Object => datatype is Function
let mySelf = {
    name: "Shrey",
    age: 18,
}

//Function => datatype is Object Function
const myFunction = function(){
    console.log("Hello World");
}
