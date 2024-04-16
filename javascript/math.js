// floor:-always down to nearest integer;
let a=4.5;
let result=Math.floor(a);
console.log(result);

// round:-to nearest intger;

let b=4.9;
let c=4.1;
let result1=Math.round(b);
console.log(result1);
let result2=Math.round(c);
console.log(result2);

// ceil:-always round up to nearest intger:
let d=3.8;
let e=3.2;
let result3=Math.ceil(d);
let result4=Math.ceil(e);
console.log(result3);
console.log(result4);

// costant;
let piValue = Math.PI;
console.log(piValue);
console.log(Math.round(piValue));

// Basic operation.
// 1.absolute value:-it is use to convert -ve into +ve;
let num=-5;
let result0=Math.abs(num);
console.log(result0);

// 2.power calculation.
console.log(Math.pow(4,7));
// update version/ecmascript.
console.log(2**3);

// 3.square root calculation;
let squareroot=Math.sqrt(49);
console.log(squareroot);

// 4.logrithim calculation;
let logrithim=Math.log(12);
console.log(logrithim);
// base '2';
let logresult=Math.log2(12);
console.log(logresult);

// random: it return the random value number between 0(inclusive) and 1(exclusive)
console.log(Math.round(Math.random()*100));
console.log((Math.random()*100).toFixed(3));
console.log((Math.random(2,102)).toFixed(3));