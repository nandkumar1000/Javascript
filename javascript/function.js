// function addition.
function add(){
    var a=23,
    b=43;
    console.log(a+b);
}
add();

// function addition by using parameters.
function sum(a,b){
    return a+b;
}
console.log(sum(345,345));

// show a message by user input name  by using concatation   . 
function greet(name){
    console.log("hello"+" " + name+ " how are you")
}
greet('nand');

// show a message of  user-input age by using concatation .

function num(age){
    console.log("hello"+" "+"I am "+ age+" "+"year old");
}
num(20);

// function calculator by using switch statements.

function calculator(a,b,operator){
    switch(operator){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            if(a==0||b==0){
            return a*b;
            }
            else{
            return a*b;
            }
        case "%":
            if(a==0&&b!=0){
                return a%b;
                if(a!=0&&b==0){
                    return a%b;
                }
                else if(a==0&&b==0){
                    return a%b;
                }
            }
            else{
              return  a%b;
            }   
        break;
        default:
          return "no operator found";
      break;
    }
}
console.log(calculator(0,0,"%"));

// string slice by function.

function slice(str){
    // slicing of string.
    for(let char=0;char<=str.length;char++){
    console.log(str[char]);
    }
}
console.log(slice("nand"));


// string reverse output is verical form by funtion.

function reversing(str){
    // reverse slice.
    for(let char=str.length-1;char>=0;char--){
        console.log(str[char]);
    }
}
console.log(reversing("nand"));


// number reversing in vertical form by using of string.

function reversing(str){
    // reverse slice.
    for(let char=str.length-1;char>=0;char--){
        console.log(str[char]);
    }
}
console.log(reversing("23423423"));

// number reversing in horizontal form by using of string.

function reversing(str){
    let reverse=" ";
      // reverse slice.
      for(let char=str.length-1;char>=0;char--){
          reverse=reverse+str[char];
      }
      return reverse;
  }
  console.log(reversing("23423423"));

//   string reversing in horizontal form by using string.
function reversing(str){
    let reverse=" ";
      // reverse slice.
      for(let char=str.length-1;char>=0;char--){
          reverse=reverse+str[char];
      }
      return reverse;
  }
  console.log(reversing("2342234"));

//   plaindrome .
function plaindrome(str){
    let reverse=" ";
    for(let char=str.length-1;char>=0;char--){
      reverse=reverse+str[char];
    }
    return str==reverse?true:false;
  }
  console.log(plaindrome("342"));
  console.log(plaindrome("nand"));