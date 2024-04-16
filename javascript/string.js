// length of string;
const a = ["nand kumar sahu"];
const b = a[0].length;
console.log(b); 
 
// index of method;
let text="nand kumar sahu";
let result=text.indexOf(("kumar"));
console.log(result);

// last index method;
let text1 = "nand kumar sahu";
let result1 = text1.lastIndexOf("kumar");
console.log(result);

// searching the elements:-
let text3="nand kumar sahu";
let result2=  text3.search('sahu')
console.log(result2);

//match method :-if no match then return null;
let text4="nand kumar sahu";
let result3=  text4.match('shiva');
console.log(result3);

// includes method:
let text6 = "nand kumar sahu";
let result7 = text6.includes("shiva");
console.log(result7);

// extracting element ;
// 1. slice;
let text7 = "nand kumar sahu";
let result8 = text7.slice(0,15);
console.log(result8);

// 2.substr: it is replaced by another method called substring;
let text8 = "nand kumar sahu";
let result9 = text8.substr(0,12);
console.log(result9);

// 3.substring.
let text9 = "nand kumar sahu";
let result10 = text9.substring(0,13);
console.log(result10);

// 4. replace method:-it helps to replace the element/word by other element;
let text5="nand kumar sahu";
let result4=  text5.replace("sahu","nand");
console.log(result4);

// extracting string character;
// 1.charAt position method: it returns the character at aspecified index(position)in a string.
let text10="hello I am nand kumar sahu . I hope you are doing well";
let result11=text10.charAt(6);
console.log(result11);
let result12=text10.charAt(-2);
console.log(result12);

// 2. char codeAt:- it returns the code of the character act a specified index in a string;
let text11="hello I am nand kumar sahu . I hope you are doing well";
let result13=text11.charCodeAt("well");
console.log(result13);

// case insensitive replacements:-by using replace method with the help of i flag and global.
let str="hello I am nand kumar sahu . I hope you are doing well";
let result14=str.replace(/Well/gi,"nand");
console.log(result14);

// split: it is use to convert string into array;
const fruit="apple,orange,guava,mango";
let fruitarr=fruit.split(",");
console.log(fruitarr);

// reverse the string after converting string into array by the help of reverse method;
const fruits="apple,orange,guava,mango";
let fruitarre=fruits.split(",");
let fruitaray=fruitarre.reverse();
console.log(fruitaray);

// join : it is use to join the array into string ;
const fruitarray=["apple",'orange',"guava","mango"];
let fruitar=fruitarray.join();
console.log(fruitar);

// write a to z using loops;
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0)); 
for(let char = 97; char <= 122; char++) {
    console.log(String.fromCharCode(char));
}

//  to check all vowels and consonats and also cout number:
let word = "JavaScript, often abbreviated as JS, is a versatile programming language commonly used for web development.";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let sum = 0;
let consonants = 0;
for (let char of word) {
    if (vowels.includes(char.toLowerCase())) {
        sum++;
    } else if (char.match(/[a-z]/i)) {
        consonants++;
    }
}
console.log("Number of vowels:", sum);
console.log("Number of consonants:", consonants);

// another method of finding vowels and consonants by using function;
const checkallvowelsornot = (str) => {
    const vowels = "aeiou";
    let count = 0;
    let consnants=0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
      else{
        consnants++;
      }
    }
    console.log(consnants);
    return count;
  };
  console.log(checkallvowelsornot("hello  I am nand kumar sahu")); 

//   panagram:-A pangram is a sentence that includes every single letter of the alphabet, from A to Z, at least once. 
const panagramchecker = (str) => {
    let inputarr = str.toLowerCase().split(''); 
    console.log(inputarr);
    const values = inputarr.filter((currentElement) => {
      return currentElement.charCodeAt() >= "a".charCodeAt() && currentElement.charCodeAt() <= "z".charCodeAt(); 
    });
    console.log(values);
    console.log([...new Set(values)]);
  };
  console.log(panagramchecker("A pangram, also known as a holoalphabetic sentence, is a sentence that contains every letter of the alphabet at least once."));
  
