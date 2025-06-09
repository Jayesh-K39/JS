let num = [3,4,5,6]; console.log('The original array named \'num\' : ', num)
console.log('The squared array of num: ')
num.forEach((element) => {
	console.log(element * element)
})
//squared. This is called as a forEach Loop

console.log('\nThe each element of array num printed with for of loop: ')
for ( let i of num ){
	console.log(i)
} //This is called as a for of loop. Used as a shortcut to the OG for loops.

let name = 'Jayesh'; console.log('Type of the string \'Jayesh\' : ' , typeof name)
let arr = Array.from(name);  console.log('Now converted to an object by using Array.from: ', typeof arr)
//Array.from is used to create an array from any other object

console.log('\n')
obj = {
	1: 'King',
	2:'Gampu',
	3: "Varad",
	4: 'Harry'
}
for (let x in obj){
	console.log(obj[x])
}
//Another possible application of for loops
