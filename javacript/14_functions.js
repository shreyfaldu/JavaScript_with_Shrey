

function sayMyName(){
console.log("S")
console.log("H")
console.log("R")
console.log("E")
console.log("Y")
}

// sayMyName() //=> call the function

// function addTwoNum(number1, number2){ //=>number1 and number2 ne parameter kevay
//     console.log(number1 + number2)
// }

function addTwoNum(number1, number2){ //=>number1 and number2 ne parameter kevay
    
    // let result = number1 + number2
    // return result
    // console.loh("shrey") return pachi unrechable code thai jaay
    return number1 + number2
}
// const result = addTwoNum(3,4)//=> called the function and pass the argument
// console.log(addTwoNum())

function loggedin(userName = "SAM"){
    if(userName == undefined){   //if(!userName)
        console.log("Please Enter User Name")
        return
    }
    return `${userName} jsut loggedin`

}
// console.log(loggedin())
// console.log(loggedin("Shrey"))

function calculateCartPrice(val1,val2,...num1){ //... is rest oprator
    return num1                                 // here val1 e 300 and val2 e 200 value leshe vaki num1 e rest oprator use karine bakini bathi value leshe
}
// console.log(calculateCartPrice(300,200,450,999))

const user = {
    userName:"shrey",
    userAge: 21
}

function handleObject(anyObject){
        console.log(`User name is ${anyObject.userName} and age is ${anyObject.userAge}`)

}
// handleObject(user)
handleObject({
    userName:"SAM",
    userAge: 21
})

const myNewarray = [200,400,678,999]

function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewarray))
