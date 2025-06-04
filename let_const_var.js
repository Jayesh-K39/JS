/* let and const are block scoped and var is global scoped 

var can be updated and redeclared within its scope.

let can be updated but not redeclared.

const can neither be updated nor be redeclared

*/


var a = 'Jayesh Bhai'
var a = 'JKGOAT' //Redeclared!
a = 'Latvia' //Updated
console.log(a)
// That is why var is not used nowadays, because it can make the code vulnerable. Instead, use let. Otherwise, there is not much problem.

let b = 'Harry' //Declared
{
	let b = 'USA'
	console.log(b) //This is allowed, because this is not re-declaration of the b variable, it is the first declaration in this specific block.
}

console.log(b)


 
b = 'Estonia' //Updated - allowed
console.log(b)

//let b = 'Harry2'  ....This is not allowed. Because b is already declared above


const author = 'JK' //Now, this can neither be updated nor be updated


