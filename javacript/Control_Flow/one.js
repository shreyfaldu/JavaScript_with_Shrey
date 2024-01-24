//if

const temperature = 41

if(temperature < 50){
    console.log("Temperature is less than 50")
}
else{
    console.log("Tem is more than 50")
}

// >, <, <=, >=, ==, ===, !=, !==

const score = 200

if(score > 100){
    const power = "Fly"
    console.log(`User power: ${power}`)
}

const balance = 1000

if(balance > 500) console.log("Test"),console.log("Test2");

if(balance < 500 ){
    console.log("Less than 500")
}else if(balance < 750){
    console.log("Less than 750")
}else if(balance < 900){
    console.log("Less tha 900")
}else{
    console.log("Less tha 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){ //Check both condition is ture
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){ //Check any one condition is ture or not
    console.log("Allow to buy course")
}