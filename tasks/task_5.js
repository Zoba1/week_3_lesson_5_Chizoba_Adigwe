//create an array of multiple elements

let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

//use filter method to create a new array 

let myFilteredArray = myArray.filter(function(element){
     return element % 3 === 0;
});
console.log(myFilteredArray);