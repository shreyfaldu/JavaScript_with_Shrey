const accountID = 12345
let emailID = "faldushrey@gmail.com"
var accountPassword = "Shrey@007"
accountCity = "jaunagadh"
var accountState
// accountID = 43242 not allowed


//Prefer not to use var
//Because of issue in block scope and functional scope

emailID = "paresh@gamil.com"
accountPassword = "p@01887"
accountCity = "Rajkot"

console.log(accountID);

console.table([emailID,accountID,accountPassword,accountCity,accountState]);