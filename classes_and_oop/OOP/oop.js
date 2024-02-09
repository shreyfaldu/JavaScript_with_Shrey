const user ={
    userName:"Shrey",
    loginCount: 8,
    singedIn:true,

    getUserDetalis: function(){
        // console.log("Get the user Detalis from DataBase")
    //    console.log(`username: ${this.userName}`)
    console.log(this)
    }

}
console.log(user.userName)
// console.log(user.getUserDetalis())

function User(username , IsLoggedIn, SignInCount){
    this.username = username
    this.IsLoggedIn = IsLoggedIn
    this.SignInCount = SignInCount

    // return this
}

const userOne = new User("Shrey", true, 10)
const userTwo = new User("Paresh", false, 18)
console.log(userOne)
console.log(userTwo)