const name = "Shrey"
let bodyWeight = 90

// console.log(name + bodyWeight + "Ptalo thai ja bhai")

console.log(`Hello my name is ${name} and my body weight is ${bodyWeight}`)

const gameName = new String('Shrey-Faldu')

console.log(gameName[2])

console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(3))

console.log(gameName.indexOf('y'))

const newString = gameName.substring(0,6)
console.log(newString)

const otherString = gameName.slice(-9, 5)
console.log(otherString)

const secondString = "   Shrey   "
console.log(secondString)
console.log(secondString.trim())

const url = "http://shreyfaldu/shrey!300faldupareshkumar"
console.log(url.replace('!300','-'))
console.log(url.includes('shrey'))

console.log(gameName.split('-'))
