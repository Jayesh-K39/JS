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
//Adds the element (that is passed as the argument) into the first index if the existing array, and displays the length
console.log(`\n5 is now added to the starting of the array with unshift: ${a}`) //Updates the array

let popper = a.pop(); //Updates the array
console.log(`\nLast element has been popped which is: ${popper} \nand hence the array is updated to : ${a}`);
//pop updastes the original array, not create a new array like the above 2 methods
