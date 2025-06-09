//Map, filter and reduce are the higher order array methods.

console.log( 'Letd print the value with map function: ')

let arr = [1,2,3,4,5,6,7]
let x = arr.map((value ) => {
	return value + 2 //I added 2 to the values, to show that the map function modifies the original array
})

console.log(`Each value + 2 = ${x}`) //This will display value + 2
//The difference between forEach loop and map function is that, forEach creates a new array while map funcion modifies the original array.


/* Both map as well as the forEach loops can take 1 to 3 arguments:
arr.forEach(value, index, array). Try replacing the map word with forEach and the same thing will be displayed
*/
console.log('\nThe 3 arguments passed are value, index and array: ')
let a = arr.map((value, index , array)=>{
	console.log('\n', value, index, array)
})


// Filter:
let arr2 = [90,89,88,87]
let a2 = arr2.filter((a) => {  //Filter only returns boolean. (Whether the condition we provided is filtered or not...)
	return (a > 1) //return will not display the actual values, but when we type cconsole.log(a2), the values will show up. Whereas, using console.log here will return boolean values.
})
console.log(a2)



//Reduce:
let arr3 = [50,60,70,80]

let reduced = arr3.reduce((value1, value2)=>{
	return value1 + value2
})
console.log(reduced) //The reduce function...same as python, but different syntax
