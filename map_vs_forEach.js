arr1 = [10,20,30,40,50,60]

let x = arr1.forEach((value)=>{
	console.log(value + 10)
})
console.log('The original array (arr1) was: ', arr1)
console.log('The variable to which (x) I assigned the forEach function: ',  x,`\nType of this variable is: ${typeof x}`, '\n\n')


//----------------------------------------------------------

arr2 = [11,22,33,44,55,66,77]
let y = arr2.map((value)=>{
	return (value + 20)
})
console.log('The original array (arr2) was: ', arr2)
console.log('The variable (y) which I assigned to mapping of the array is: ', y, 'Type :', typeof y)


/* Conclusion:

✅ Neither `forEach` nor `map` modify the original array by default.

🔁 forEach:
- Just loops over the array.
- Doesn't return anything — the variable assigned (x) is always `undefined`.
- Only useful when you want to *do something* (like console.log, update DOM, etc).
- Writing `return` inside it is pointless — it gets ignored.
- Use `console.log()` inside the block if your goal is just to display stuff immediately.

🧠 map:
- Creates a new array with modified values.
- Always returns a new array of the same length.
- Must use `return` inside the callback — that's what fills the new array.
- If you only use `console.log()` and forget `return`, the new array will be full of `undefined`s.
  (e.g., `[undefined, undefined, ...]`)

🚨 Summary:
- `forEach()` = used for **side effects** (logs, DOM, etc). No data returned.
- `map()` = used for **transformation**. Must return a value to build the new array.
*/
