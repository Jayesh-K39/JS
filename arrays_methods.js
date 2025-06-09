let a = [1,2,3,4,5,6]; console.log('The original array: ', a)
let b = a.toString(); //The array has been turned to string with this one
console.log('This is the string of the same array: ', b)


console.log( '\nThis is the array elements joined with a dot -> ', a.join("."))
let c = a.join(".")
console.log(`The type of ${c} is: `, typeof c)
// _ has become the joiner between all the elements in the array 'a'. Can be changed.By joining th earrays, it is no more an array, but it has become a string


let pusher = a.push(56,57,68) //appends 56 to the end of the array
console.log(`\nThe new array after appending some values : ${a}\nType: ${typeof a}`) 
//push() also updates the array and not create a new one


console.log(`\nThe first element of the array is: ${a.shift()} and now the array looks like:\n${a}`)
//Removes the first element of the array and then returns what is removed (i.e. the first element of the array) and updates the existing array


a.unshift(5)
//Adds the element (that is passed as the argument) into the first index of the existing array, and displays the length
console.log(`\n5 is now added to the starting of the array with unshift: ${a}`) //Updates the array

let popper = a.pop(); //Updates the array
console.log(`\nLast element has been popped which is: ${popper} \nand hence the array is updated to : ${a}`);
//pop updastes the original array, not create a new array like the above 2 methods


let num = [1,2,3,4,5,6]
delete num[0]; console.log(`\n\nThe num array after deletion of the element on the 0th index: ${num}`); console.log('Length of it: ', num.length)
//delete is not a method. It is an operator.The length is not decremented after deletion.


let num1 = [7,8,9,10]; let num2 = [4,5,3,2,1]
let mixup = num1.concat(num2); 
//the concat method can concatinate more than 2 arrays with each other.
//Creates a new array and the original arrays are not modified.


let letter = ['z', 'g', 'h', 'o', 't', 'a']
console.log('\n\nThe original array: \n', letter, '\nThe array that is sorted alphabetically: ', letter.sort(), '\n', letter)// The sort method sorts all the elements in the array alphabetiaclly. Modifies the existing array
// If these were numbers, then...it still sorts alphabetically. Which means, it just looks at the digits and checks which digits come first and which ones come later.like this:

let numbers= [ 10000,200,3, 100000000, 99, 8, 45] 
console.log('This array is full of numbers: ', numbers)
console.log('\nNow, it is sorted alphabetically by using sort function without any argument: ', numbers.sort()) //Goes like 1,2,3,4,5...

console.log('\nThe reversal of the above array: ', numbers.reverse())

let compare = (a, b)=>{
	return a - b
}
console.log('The same array is now sorted in ascending order by passing a function to the sort method: \n', numbers.sort(compare))
//The sort method takes argumetns too! And we can pass it the functions as the arguments... 



let newarray =[1021,1022,1023,1024,99,77]
console.log('\n\nThere is a newarray: ', newarray)
newarray.splice(1, 3 , 44,55,66)
console.log('Now, with the splice method, I deleted the 3 elements in the array on indices 1,2 and 3.\nNow, the newarray is updated to: ', newarray)



let array2 = [2000,3000,4000, 5000, 6000, 7000, 8000, 9000]
console.log(`\n\nThe array2 is:  ${array2}`)
console.log(`I sliced it as (0,3):  ${array2.slice(0,3)}`)  //Same as the string slicing.This does not modify the original array, it just creates a sliced version of it.
