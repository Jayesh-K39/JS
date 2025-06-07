let name = 'Jayesh'
console.log(name.length)


name = 'Jayesh\n' //one escape sequence character adds up, not 2.
console.log(name.length)


console.log(name.toUpperCase())

console.log(name.toLowerCase())

console.log(name.slice(0,3))

console.log(name.slice(2)) // This prints all the characters on the index after 2, so...yesh in this case

console.log(name.replace('Jay', 'Guy'))


let friend = 'Zeus'; console.log(name.concat(`is a very chill guy and he is also a friend of ${friend}`))

let spaces = '    Three, spaces on both sides...   '; console.log(spaces.trim()) //Spaces, tabs and newline characters (which are also called as the whitespaces) from both sides are trimmed now.


// Strings are immutable. Because, we cannot change the original string, we just make new strings with all these methods....Example:
friend[0] = 'O' //Doesn't happen, because not possible. Instead, the original string is printed without any changes.
console.log(friend)


let sentence = 'the quick brown fox jumps over the lazy dog'; let word = 'fox';
console.log(`The word ${word} ${sentence.includes(word) ? 'is' : 'is not'} in the sentence.`)

console.log(`The sentence ${sentence.startsWith('T') ? 'starts': 'does not start'} with capital T.`)

console.log(`The sentence ${sentence.endsWith('g') ? 'ends': 'does not end'} with a small g.`)

let statement = 'Please lend me rupees 1000' // Task: extract the amount from this statement. Her is how to do that:
console.log('Please lend me rupees '.length) //Gives the length till which we have to skip.
console.log(statement.slice(22)) // Skipped the 22 characters and continued from there...Kinda mid



word = 'bigword'
for (let i = 0; i < (word.length); i++){
	console.log(word[i])
	
}
// This was a quick quiz...Done and dusted 😙 
