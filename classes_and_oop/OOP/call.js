function setUserName(username){
    this.username = username
}
function createUser(username,email,password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("shrey","Shrey@fb.com","1213")
console.log(chai)