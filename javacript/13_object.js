// const tinderUser = new Object() //=>Singleton object

const tinderUser = {}//=>non single ton object

tinderUser.id = "123abc" 
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    emailID: "samm@gmail.com",
    fullNmae:{
        userFullname : {
            firstName: "Shrey",
            lastNmae: "Faldu"
        }
    }
}
// console.log(regularUser.fullNmae.userFullname)

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}

// const obj3 = {obj1 , obj2}
// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1,...obj2}
console.log(obj3)

const user = [
    {
        id:"123abc",
        name: "shrey"
    },
    {
        id:"123abc",
        name: "shrey"
    },
    {
        id:"123abc",
        name: "shrey"
    },
    {
        id:"123abc",
        name: "shrey"
    },
    {
        id:"123abc",
        name: "shrey"
    }
]

console.log(tinderUser)
console.log(Object.keys(tinderUser)) //=>object ni je key hoi ne e bathi array ma hoi etle eni par aapde loop lagavi sakiye chiye
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggerdIn'))
