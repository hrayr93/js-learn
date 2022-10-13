// let num = 50;
//  while (num <= 55){
//     console.log(num);
//     num++;
//  } 

//  do{
//     console.log(num);
//     num++;
//  }
//  while (num < 55);

//  for (let i = 1;i < 10;i++){
//     console.log(i);
//  }

let result = "";
const length = 10;

 for (let i = length; i >= 0; i--){
      for (let j = 0;j < i;j++){
      result += " ";
      
      
   }
    for (let k = length ; k >= i; k--){
   result+=" *";
}
   
   result += "\n";
 }

console.log(result);
 