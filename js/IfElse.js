"use strict";
 if (4==9){
    console.log("ok!");
 } else {
console.log("error");
 }

 /*const num = 50;
 if (num < 49){
    console.Log("error");
 } else if (num > 100){
    console.log("много")
 }else {
console.log("ok");
 }

 //
 (num == 50) ? console.log("ok") : console.log("error");*/
 
 //swich case
const num = 50;
 switch(num){
    case 49:
        console.log("Не верно");
        break;
        case 100:
            console.log("Не верно");
            break;
        case 51:
            console.log("верно");
            break;
        default:console.log("Не в етот раз"); 
 }

 // learn 1

 console.log(1 && 0);
 console.log(1 && 5);
 console.log(null && 5);
 console.log(0 && "text");
//
 let joneReport, alexReport,samReport,mariaReport = "done";
 console.log(joneReport || alexReport || samReport || mariaReport);

 const humburger = 3;
 const fries = 3;
 const cola = 0;
 const nuggets = 5;

 if (humburger  === 3 && cola === 2 || fries === 3 && nuggets ){
   console.log("все довольны");
 }else {
   console.log("мы уходим");
 }
 console.log(humburger  === 3 && cola === 2 || fries === 3 && nuggets );
//задача 1
 console.log( NaN || 2 || undefined );
 console.log( NaN && 2 && undefined );
 console.log( 1 && 2 && 3 );
 console.log( !1 && 2 || !3 );
 console.log( 25 || null && !3 );
 console.log( NaN || null || !3 || undefined || 5);
 console.log( NaN || null && !3 && undefined || 5);
 console.log( 5 === 5 && 3 > 1 || 5);
//
 let hamburger;
 const fries = NaN;
 const cola = 0;
 const nuggets = 2;
  
 if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!');
 }
 //yes
//
 let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}// no

 