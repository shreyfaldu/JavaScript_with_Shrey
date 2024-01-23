const marvalHeros = ["Blackpanther","Ironman","spiderman"]
const dcHeros = ["Superman", "Flash", "batman"]

// marvalHeros.push(dcHeros)

// console.log(marvalHeros)
// console.log(marvalHeros[3][0])

let newHeros = marvalHeros.concat(dcHeros) //=>concat return new array And push je array hoi emaj add kare
console.log(newHeros)

const all_new_heros = [...dcHeros , ...marvalHeros ] //=>Spread all array
console.log(all_new_heros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[8,9]]]
const real_array = anotherArray.flat(Infinity)
console.log(real_array)

console.log(Array.isArray("Shrey"))
console.log(Array.from("Shrey"))
console.log(Array.from({name:"Shrey"})) //=>interesting array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
console.log(anotherArray[3][1])
console.log(anotherArray[5][2][0]);