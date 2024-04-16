var myname="nand";
console.log(typeof myname);
let a='343';
console.log(typeof a);
// let b=3;
console.log(a+'324');
console.log(a-'324');
console.log("nand"+2);
console.log('kumar'*4);
// console.log("ad"*sd)
// console.log("ad"*"sd")
var myname=34;
console.log(typeof String( myname +""));
console.log(typeof (myname +""));
var y='345';
console.log(typeof Number (y));
console.log(typeof +y);
var myname=null;
console.log( typeof myname);
var y=null ;
console.log(typeof y);
var x;
console.log(typeof x);
var myg='34';
const my=parseInt(myg);
console.log( typeof myg);
let z='23.345';
console.log(parseFloat(z));
console.log(parseFloat(12.4));
console.log(parseFloat('12.4'));  
console.log(parseInt('&23'));
console.log(parseInt('-12'));
console.log(parseInt (''+''));
console.log(parseInt('324'+12));
console.log(parseInt(12<234<34));
console.log(parseInt('12'<'234'<'34'));
console.log(parseInt('23'+'4'+'345'));
console.log(parseInt(true+true));
console.log(parseInt(true+false));
console.log(parseInt(false+false));
console.log(parseInt("SDAF"*"fgsg"));
console.log(9-'7');
console.log('sddf'-'dfdsa');
var result='lsdljf'%2;
console.log(result);
let age=16;
let res=age>=18?"eligble":"not eligble";
console.log(res);
let score=56;
let re=score>=100?"pass":"fail";
console.log(re);
// control statement  if else(elseif)
var tem=256;
if(tem>=500&&tem<100)
{
  console.log("the");
}
else if(tem>90)
{
  console.log("summer");
}
else
{
  console.log("winter");
} 
// switch statement
var day = 'wednesday';
switch (day) {
    case 'monday':
    console.log("let me play");
    break;

    case 'tuesday':
    console.log(" where");
    break;

    case 'wednesday':
    console.log("what");
    break;
    default:
        console.log('no condition match');
}
// switch statement problem

var l=12;
var b=2;
var r=3;
var s=4;
var AreaofShape="rectangle";
// var AreaofShape='circle';
// var AreaofShape="rectangle";

// bool 'AreaofShape'=rectangle;
switch(AreaofShape)
{
  case "rectangle":
    console.log("area of rectangle",l*b);
    break;
  
  case "circle":
    console.log("area of circle" ,3.17*r*r);
    break;
  
  case "square":
    console.log("area of square is:-", s*s);
    break;
    
    default:
    console.log("shape is not match");
}