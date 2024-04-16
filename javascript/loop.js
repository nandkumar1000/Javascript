// counting of numbers;
var i;
for(i=1;i<=100;i++){
  console.log(i);
  
}

// table of numbers;
var i;
var a=9;
for(i=1;i<=10;i++){
  console.log(i*a);

}
// concatation method
var i;
var a=prompt("enter the value");
for(i=1;i<=10;i++){
  console.log("a*"+i+"="+(i*a));

}
// sum problem by using formula
var n=2;
 var r=n*(n+1)/2; 
 console.log(r);
//  sum problem by using loops
var i;
var result=0;
for(i=1;i<=10;i++){
result=i+result;  
}
 console.log(result);

 // leapyear problem by if else statement
var year=2020;
if(year%4&&year%100||year%400){
  console.log("this is leapyear");
}
else
{
  console.log("this is not leapyear");
}

// pattern printing using loops

for(i=1;i<=8;i++){
  var pattern = " ";
  for(j=1;j<=i;j++){
    pattern = pattern +' * '; 
  }
  console.log(pattern);
}