//1
const PI = Number((Math.PI).toFixed(2));
console.log(PI);
//2
let maxVal = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let minVal = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(maxVal);
console.log(minVal);
//3.a
let val3a = Number((Math.random()).toFixed(2));
console.log(val3a);
//3.b
let x = 23;
let randomToVal = Math.floor(Math.random() * x);
console.log(randomToVal);

//4
let res = (0.6 * 10 + 0.7 * 10) / 10;
console.log(res);

//5
let str = "100$"
let numFromStr = parseFloat(str);
console.log(numFromStr);