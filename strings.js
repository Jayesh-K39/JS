 // Strings are a collection of cahracters.

let name = 'Harry'
console.log(name.length)
console.log(name[0]) //Basic ahh programminng. JS is also a language that starts indexing from 0



let boy1 = 'JK'; let boy2 = 'Roman'
let sentence = `${boy1} is a friend of ${boy2}`; console.log(sentence)
// These backticks are called as template literal. Basically, the f-strings of JS.// The above thingy is also called as 'string interpolation'

 
/* Escape sequence characters:
\',  \",   \n,   \t (for tab),   \r ()


The \r (return carraige) returns the cursor to the start of the string and overwrites whatever is written there.
*/

let str = "jayesh\rs"; console.log(str) //now, the s will overwrite j and teh string will become: sayesh
let str2 = '123456\r987'; console.log(str2) // In this example, After 6, The cursor will move to the start of the string 123 will be overwritten by 987.
