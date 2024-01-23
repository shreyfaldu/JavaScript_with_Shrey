// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log(2 > "1")

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

//The reason is that an quality check == and compariosn > < <= >= work Differntly
//Comparison convert null to number, treating it as 0
//That's why (3) null >= 0 is ture and (1) null > 0 is false

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// ==  => For conversion
console.log("2" == 2)

// ===  => Check Datatype and coversion
console.log("2" === 2)