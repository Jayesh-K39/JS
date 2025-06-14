/* DOM tree refers to the HTML page where all the HTML nodes are objects there can be 3 main types of nodes in the DOM tree:

text nodes
element nodes
comment nodes

In an HTMl page, <html> is at the root and <head> and <body> are its children.

A text node is always a leaf of the tree.

Auto-correction:

If you start with <span> and close with </div>, it is an invalid HTML syntax. But browser auto-corrects it, and closes it with the corresponding tags.
If something is written after the body, it is automatically moved inside the body.

<table> tag must contain <tbody>.
But if <tbody> is absent, everything written after <table> tag, is moved inside the table body, automatically.  

Walking the DOM means accessing variable elements of the html file, via JS.

document.html
document.document_element
document.head
document.foot
document.body

*/
