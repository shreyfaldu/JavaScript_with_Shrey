const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB called
    //Cryptograpy
    //network
    setTimeout(function(){
        console.log('Asyns task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async 2 is cpmplete')
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 is Resolved")
})



const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"Shrey",Email:"shrey@google.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user)
})



const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let ERROR = false
        if(!ERROR){
            resolve({username:"Paresh",Email:"paresh@google.com"})
        }
        else{
            reject('ERROR : SOMETHING WENT TO WRONG')
        }
    },1000)
})

PromiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((usernameis) => {
    console.log(usernameis)
})
.catch(function(ERR){
    console.log(ERR)
})
.finally(() => console.log("The Promise is ethier resolve or rejected"))


const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let ERROR = true
        if(!ERROR){
            resolve({username:"JS",Email:"paresh@google.com"})
        }
        else{
            reject('ERROR : JS WENT TO WRONG')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()


// async function callALluser(){
//     try {
//         const responce = await fetch('https://api.github.com/users/shreyfaldu')
//         const data = await responce.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:",error)
//     }
// }

// callALluser()

fetch('https://api.github.com/users/shreyfaldu')
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))