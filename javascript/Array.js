// Array concept.
let a=["nand",23,"234"];
console.log(typeof a);

// find element by index Number.
let result=a[1];
console.log(result);
 
// creating method.
// create a array by using  constructor.
let fruit= new Array("apple","guava","grapes","banana","orange");
console.log(fruit);

// create a array by using array literals.
let Number=[234,234,23,4343,2];
console.log(Number);

// create a array by using empty array .
let arr=[];
console.log(arr);

// modifying elements by replacing .
let fruits=["apple","guava","grapes","banana","orange"];
console.log(fruits);
fruits[0]="orange";
console.log(fruits);
fruits[3]="234";
console.log(fruits);
fruits[4]=234;
console.log(fruits);

// array traversal  
// 1. for  of loops by using constructor;

let fruits=("apple");
for(let item of fruits){
    console.log(item);
}

// 2.by using array literals.
let Numbers=[12,234,234543,4545,45,45,];
for(let element of Numbers){
    console.log(element);
}

// for in loops
let Numbere=[32,34,4556,5,6];
for(let elements in Numbere){
    console.log(elements);
}

// for each method.

let fruits=["orange","guava","grapes","apple"];
fruits.forEach((curelement,index,fruits) =>{
    console.log(`${curelement}   ${index}`);
});

// the syntax of  map method is similar to for each method. 

let fruits=["orange","guava","grapes","apple"];
fruits.map((curelement,index,fruits) =>{
    console.log(`${curelement}   ${index}`);
});

// different type of array operation.
// push operation performed in array.
let a1=[34,56,67,7,45,23];
a1.push("nand");
console.log(a1);

// pop operation performed in array.

let a2=[34,56,67,7,45,23];
a2.push("nand");
a2.pop();
console.log(a2);

// unshift operation: it is use to add element in begning  of  the array.
let nam=['234',"nand","sahu",'23432'];
nam.unshift("43");
console.log(nam);

// shift operation: it is use to remove the element from begning of the array:
let namm=['234',"nand","sahu",'23432'];
namm.shift();
console.log(namm);

// splice: it is use to change the element from an array by removing or replacing existing element and or adding
// new element in place;

let x=[23,45,56,76,87,899,90,12];
x.splice(2,x.length,"nand","sahu")
    console.log(x);

// searching operation
// index of method : It gives the first element
const number1=[1,3,45,6,"shiva"];
const result3=number1 .lastIndex(6);
console.log(result3);

// Includes: it check wheather element is present of not
const number2=[1,3,45,6,"shiva"];
const result2=number2 .includes(6);
console.log(result2);

// last index of method: it return last index value.
const number=[1,3,45,6,"shiva"];
const result1=number .lastIndex(6);
console.log(result1);

// filters in array:- it is used to filter the array.
// 1. find mthod: it is use to find first element in an array that satisfy a provide testing function.

const dune=[1,2,3,4,5,6,7];
const result5=dune.find((curelement)=>{
return curelement>5;
})
console.log(typeof result5,result5);

// 2.find index method :- it return the first element of index
const dunee=[1,2,3,4,5,6,7];
const result6=dunee.findIndex((curelement)=>{
return curelement>5;
})
console.log(typeof result6,result6);

// filter(call back function)
const number22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result11 = number22.filter((currentElement) => {
    return currentElement > 2;
});
console.log(typeof result11, result11);

// filter product price in website;
const product = [
    { name: 'shoes', price: 2020 },
    { name: 't-shirt', price: 1200 },
    { name: 'jeans', price: 1000 },
    { name: 'shirt', price: 1500 },
    { name: 'jacket', price: 1800 },
    { name: 'loser', price: 800 }
];

const result10 = product.filter((currentElement) => {
    return currentElement.price <= 1500;
});

console.log(typeof result10, result10);

// filter unique value 
const array = [1, 2, 3, 4, 2, 3, 5, 6, 1, 7, 8, 4];
const uniqueArray = array.filter((value, index, self) => {
    return self.indexOf(value) === index;
});
console.log(array);
console.log(uniqueArray);

// sort the array and compare;
const Fruit=["banana","apple","orange","mango"];
Fruit.sort();
console.log(Fruit);

// call backfunction
const NUMBER = [1, 2, 3, 4, 2, 3, 5, 6, 1, 7, 8, 4];
NUMBER.sort((a,b)=>{
if(a>b)return 1;
if(b>a)return -1;
});
console.log(NUMBER);

// square of each number
const NUMBER1= [1, 2, 3, 4, 2, 3, 5, 6, 1, 7, 8, 4];
const result13 = NUMBER1.map((currentElement) => {
    return currentElement * currentElement;
});
console.log(result13);

// square of a even number in the array.
const NUMBERe = [1, 2, 3, 4, 2, 3, 5, 6, 1, 7, 8, 4];
const resulte = NUMBERe
  .map((currentElement) => {
    if (currentElement % 2 === 0) {
      return currentElement * currentElement;
    }
  })
  .filter((currentElement) => currentElement !== undefined);
console.log(resulte);

// reduce method: it is use to accumulate or reduce an array to element of an array;
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);

// calculate the total price of a product
const productprice=[121,232,343,454,565,569];
const totalprice=productprice.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
console.log(totalprice);

// convert array of string  in uppercase;
const word = ["apple", "orange", "cherry"];
const result0 = word.map((currentElement) => {
    return currentElement.toUpperCase();
});
console.log(result0);
