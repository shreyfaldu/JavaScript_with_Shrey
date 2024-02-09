
let superHeros = ["Thore","Spiderman"]

let heroPower = {
    thore:"Hammer",
    spiderMan:"sling"
}

Object.prototype.shrey = function(){
    console.log(`Shrey is available in all object`)
}
// heroPower.shrey()
superHeros.shrey()

Array.prototype.heyShrey = function(){
    console.log(`Hey Handsome Shrey`);
}

superHeros.heyShrey()
// heroPower.heyShrey()


//Inheritance

const user = {
    username:"Chai",
    email:"chai@gogle.com"
}
const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignmnet: "JS Assignment",
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = user


// Morden Syntax

Object.getPrototypeOf(TeachingSupport,Teacher)

//

const anothoreName = "ChaiAurCode"

String.prototype.trueLenght = function(){
    console.log(`${this}`)
    console.log(`The true lenght is ${this.trim().length}`)
}

anothoreName.trueLenght()
"Shrey      ".trueLenght()
"Faldu              ".trueLenght()