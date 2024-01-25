//forEach

const coding = ["java", "js", "py", "node", "rb"]

coding.forEach(function(val){
    console.log(val);
})

coding.forEach((item) => {
    console.log(item)
})

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

// /)

const myCoding =[
    {
    langyageName:"JavaScript",
    langyageFileName:"js"
    },
    {
    langyageName:"Java",
    langyageFileName:"java"
    },
    {
    langyageName:"python",
    langyageFileName:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.langyageName)
})