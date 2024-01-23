//Objects

//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "shrey",
    [mySym]: "Mysymbol",
    age: 18,
    location: "Changa",
    emailID: "faldushrey@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monady","Sunday"]

}

console.log(JsUser.name)
console.log(JsUser["name"])

console.log(typeof JsUser[mySym])

JsUser.emailID = "shreyfaldu@microsoft.com"

Object.freeze(JsUser) //=> kai future ma chnage na karva deva mate freeze lagadvanu aave

JsUser.emailID = "shreyfaldu@chatgtp.com"

console.log(JsUser)
