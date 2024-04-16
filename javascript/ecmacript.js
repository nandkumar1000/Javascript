// reverse a stirng in ecmastring(es6);

const nks=str=>{
    for(let char=str.length-1;char>=0;char--){
       console.log(str[char]);
    }
   }
   nks("nand kumar sahu");

   // reverse a number in ecmastring(es6);

   const nksd=str=>{
    for(let char=str.length-1;char>=0;char--){
       console.log(str[char]);
    }
   }
   nksd("2323");

   // plaindrome(es6)
   const isplaindrome=str=>{
      let reverse=" ";
      for(let char=str.length-1;char>=0;char--){
         reverse=reverse+str[char];
      }
      return str==reverse?true:false;
   }
   console.log(isplaindrome("nand"));

   /*reverse a number and output is in horizontal form.
   same code is applicable for reversing a string in horizontal manner, ther  is change in input.
   */

   const isreversing=str=>{
      let reverse=" ";
      for(let char=str.length-1;char>=0;char--){
         reverse=reverse+str[char];
      }
      return reverse;
   }
   console.log(isreversing("23423"));