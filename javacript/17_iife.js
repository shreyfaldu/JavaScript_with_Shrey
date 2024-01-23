// Immediately Invoked Function Expression (IIFE)


//=> Globle scop na polution thi je problem / Globle scop na variable na polution ne door karva mate iife no use thai

(function chai(){
    console.log("DB CONNECTED")

}());

(()=>{
    console.log("DB CONNECT TWO")
})()

( (name) => {
    console.log(`Name is ${name}`)
})('shrey')