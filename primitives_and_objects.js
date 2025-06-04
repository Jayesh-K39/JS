/* There are 7 fundamental primitve data types in JS:

N- null
N- number
S- symbol
S- string
B- boolean
B- bigint
U- undefined
*/

let a = null
let b = 345
let c = true
let d = BigInt(567)

let e = 'Harry'

let f = Symbol('I am a nice and GOATed symbol')
let g = undefined 
console.log(a, b,c,d,e,f,g)
console.log(typeof a)


/* The non-primitive data types in JS are called as objects.
They are a key-value pair.*/

const item = {
	'Harry': true,
	'Jayesh': false,
	'ID':67,
	'Codenames': "Ivan"
}
console.log(item['ID']) 
//Will obviously throw an error if we try to pass a key that does not exist in this object. Do not call it dictionary, (although the concept is same)
