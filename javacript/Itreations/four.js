//for in

const myObject = {
    js : "javaScipt",
    cpp : "C++",
    rb : "Ruby",
    swift: "Swift by Apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for: ${myObject[key]}`)
}

const myArr = ["rb", "cpp", "node", "py", "java"]

for (const key in myArr) {
    console.log(myArr[key])
}
