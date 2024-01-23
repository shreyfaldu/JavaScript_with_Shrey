let a = 300

if (true){
    let a = 10
    const b = 20
    //var c = 30 //=>scop ni baar pn use thai che jyare a and b e scop ni baar use nai thata etle "var" ma problem che 
    // console.log("INNER a Value is " , a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const name = "Shrey"

    function two(){
        const webSite = "YouTube"
        console.log(name)
    }
    // console.log(webSite)
    // two()
}
// one()

if(true){
    const userName = "Shrey"
    if(userName === "Shrey"){
        const webSite = "YouTube"
        // console.log(userName + webSite)
    }
// console.log(webSite)
}
// console.log(userName)



//************************************     INTRESTING    ********************* */

addone(5) //=>No error here bcz not a any variable can hold the value of function
function addone(num){
    return num + 1
}


addTwo(4) //=> throw the arror bcz here variable hold the vlaue of the function
const addTwo = function(num){
    return num + 2
} 
