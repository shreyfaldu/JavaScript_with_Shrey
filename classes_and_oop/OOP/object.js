// => Javascript PROTOTIPAL INHERITANCE behavior dharave che Mean javascript kyarey haar nai manti ans na made to uper ne uper joye rakhe che

//=> Function fuction pn che and e Object pn che 
//=> Array pn Ek object che
//=> String pn ek obrjct che

function multiBy5(num){
    return num*5
}

multiBy5.power = 2

console.log(multiBy5(5));
console.log(multiBy5.power);
console.log(multiBy5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.incressge = function(){
    this.score++
}

createUser.prototype.printME = function(){
    console.log(`The score is ${this.score}`)
}

const chai = new createUser("Shrey",23)
const tea = createUser("Tea",230)

chai.printME()