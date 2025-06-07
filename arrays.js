//Arrays are variables which can hold more than one value
let a = [1,2,3,4,5, false, null, 'Siya', 'Jayu',  true]
//All data types can be stored in it. Unlike the C language.

console.log(a[1]) //Can be printed
console.log('The length of a is ', a.length)


console.log(a[11]) //Returns as undefined, because the length of the array  (currently) is 10
a[11] = 230 //Can be updated too...
console.log(a[11]) //Returns 230. Thus tells us : "Arrays ar mutable"


// Arrays are not a primitive  datatype. 
//They are an object i.e. a non-primitive datatype.


for (let i = 0; i < (a.length); i++){
	console.log(a[i])
}
//This was a quick quiz
