// Stack(primitive dataType) => Copy le

let myYouTubeChannal = "Chaiorocode"

let otherName = myYouTubeChannal

otherName = "codeorchai"

console.log(myYouTubeChannal)
console.log(otherName)

//Heap(non primitive datatype) => direct refernce le

let userOne = {
    email : "use@google.com",
    id : 12121
}

let userTwo = userOne

userTwo.email = "Shrey@google.com"

console.log(userTwo.email)
console.log(userOne.email)

