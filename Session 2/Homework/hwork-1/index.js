console.log('1. What are var and const in JavaScript?');
console.log('var is “function scoped” and “const” is “block scoped”');

console.log('2. What are the differences between let and var?');
console.log('"var" is “function scoped” but "let" is “block scoped”');
console.log('"var" can be re-declared and updated but "let" can be updated but not re-declared.');
console.log('the "let" keyword is not initialized. So if you try to use a "let" variable before declaration, you will get a Reference Error');

console.log('3. What are the differences between let and const?');
console.log('"let" can be updated but not re-declared but "const" cannot be updated or re-declared');
console.log('"let" can be declared without being initialized but not "const"');

console.log('4. What to use in what cases?'); 
console.log('"const" is a signal that the identifier won’t be reassigned.');
console.log('"let" is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function.');
console.log('"var" is now the weakest signal available when you define a variable in JavaScript. The variable may or may not be reassigned, and the variable may or may not be used for an entire function, or just for the purpose of a block or loop.');
