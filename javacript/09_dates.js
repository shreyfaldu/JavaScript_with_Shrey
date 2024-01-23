// Dates

let myDate = new Date()
// console.log(myDate.toDateString()) 
// console.log(myDate.toISOString()) 
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

let myCreatDate = new Date(2023, 0 ,23,5,5) //=>JS ma month 0 thi start thai che
let myCreatDate2 = new Date("13-08-2003")
// console.log(myCreatDate.toDateString())
// console.log(myCreatDate.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp.toString())

// console.log(myCreatDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1) //=>month 0 thi satrt thai etle +1
// console.log(newDate.getTime())
// console.log(newDate.getMinutes())

// `${newDate.getMonth() + 1} is a new date`

newDate.toLocaleDateString('default',{

    weekday: "long"
})