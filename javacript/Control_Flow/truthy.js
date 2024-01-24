const Email = ""

if(Email){
    console.log("Got the Email")
}
else{
    console.log("Don't have a Email")
}
//falsy value
//false ,0 ,-0, BigInt 0n, null, undefined, NaN

//Turthy value
//"0", 'false', " ", [], {}, function(){}

if(Email.length == 0){
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty")
}

//false == 0 
//ture

//false ==''
//ture

//0 == ''
//true

// Nullish Coalescing Oprator (??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 15 ?? 21

console.log(val1)


// Terniary Oprator

// condition ? true:false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("More than 80")