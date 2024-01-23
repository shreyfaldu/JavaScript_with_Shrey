const user = {
    userName:"shrey",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.userName}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMsg()
user.userName = "Sam"
user.welcomeMsg()

console.log(this) //=> this ===> aa this node anviroment ma empty object represant kare


//=>Important
//=> browser ni ander je globle object che e WINDOW object che

function chai(){
    let userName =  "Shrey"
    console.log(this.userName) //=>this object no use object ni ander j thai nai ke function ni ander
}
chai()


//ARROW FUNCTION


const chai = () =>{
    const userName = "Shrey"
    console.log(this.userName)
}
chai()


// const addTwo = (num1,num2) =>{
//         return num1 + num2
// }

// const addTwo = (num1,num2) => num1+num2

// const addTwo =(num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({userName:"Shrey"})

console.log(addTwo(6,6))


