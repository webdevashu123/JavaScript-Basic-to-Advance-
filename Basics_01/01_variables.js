const accountId = 1454547
let accountEmail = "ashutosh@google.com"
var  accountPassword = "12435"
accountCity = "Delhi"// this is possible,but don't use it

let accountState ;

// accountId = 2 - this is not allowed as because const keyword is used to declare this variable

console.log(accountId);

accountEmail = "ashu@ashu.com"
accountPassword = 8585
accountCity = "Mumbai"

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

// This is very tough to write , in one line we can use  ------

/*
Prefer not to use var because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
