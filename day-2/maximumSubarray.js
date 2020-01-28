class MaximumSubarray {
    constructor() {
    }
    //implement your code here
    maximumSubarray(array){
    }
}

let maximumsubarray = new MaximumSubarray();
let array = []
let length = Number(prompt("Please enter length of array"))
for(let i = 1; i <= length; i++) {
    let input =  Number(prompt("Please enter your number"))
    array.push(input);
}
console.log(array)
maximumsubarray.maximumSubarray(array)

// mention your time and apace complexity here