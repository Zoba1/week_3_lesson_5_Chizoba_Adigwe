// //create an array of multiple elements

let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17]

//use filter method to create a new array 

let myFilteredArray = myArray.filter(function(element){
     return element % 3 === 0;
});
console.log(myFilteredArray);


































//class work
// let student = {
//      age: 19,
//      name: 'hey',
//      completedTask: {
//       task: 'functtion',
//       task2: 'arrays' 
// }
// }
// console.log(student.completedTask.task2);
// student['task'] = 'fun'

// console.log(student['completedTask'][0]);
// student['name'] = 'clem'
// console.log(student); 

// let {completedTask} = student
// let [task1, task2] = completedTask
// console.log(task1);