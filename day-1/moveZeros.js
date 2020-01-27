class MoveZeros {
 
    constructor() {
    }
  
    //implement your code here
    moveZeros(array){
  
    }
  
}
  
let movezeros = new MoveZeros();
let array = [];
let length = Number(prompt("Please enter the length of array"));
for(let i = 1; i <= length; i++) {
   let input =  Number(prompt("Please enter your number"));
   array.push(input);
}
console.log(array);
movezeros.moveZeros(array);
