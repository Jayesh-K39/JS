console.log( 'Letd print the value with map function: ')

let arr = [1,2,3,4,5,6,7]
let x = arr.map((value ) => {
	console.log(value)
})

console.log(`Each value + 2 = ${x}`) //This will display value + 2
//The difference between forEach loop and map function is that, forEach creates a new array while map funcion modifies the original array.


/* Both map as well as the forEach loops can take 1 to 3 arguments:


arr.forEach(value, index, array). Try replacing the map word with forEach and the same thing will be displayed
*/
console.log('\nThe 3 arguments passed are value, index and array: ')
arr.map((value, index, array)=>{
	console.log('\n', value, index, array)
})


// Filter:
let y  = arr.filter((a) => {
	console.log(a < 4)
})
console.log(y)
