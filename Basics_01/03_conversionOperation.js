let score = "33abc";

console.log(typeof score);
// when "33" is converted to number => 33
//"33abc" (number+string) =>NaN- Not a number but the typeof(NaN) is Number.
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber);

let newscore = null;

console.log(typeof newscore);

let valueInNumber2 = Number(newscore);
console.log(valueInNumber2);

let score2 = undefined;

console.log(score2);

let valueInNumbers3 = Number(score2);

console.log(valueInNumbers3);

let value = true;
// true => 1 ; false => 0
console.log(typeof value);

let changeInValue = Number(value);
console.log(typeof changeInValue);
console.log(changeInValue);


//*****************************************************************************

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let isFalse = ""; // 0 and empty string both gives false value

let newToBoolean = Boolean(isFalse);
console.log(newToBoolean)


// 1 => true; 0 => false
// " " => false
// "Ashutosh" => true

let someNumber = 33;

console.log(typeof(someNumber))
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof(stringNumber));
