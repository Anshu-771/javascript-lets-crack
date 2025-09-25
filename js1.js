// Notes from the video: JavaScript Variables & Data Types Explained (var, let, const, mutable)
// Focusing on historical aspects of variable declarations as mentioned by the speaker
// Compiled from standard JavaScript history for accuracy
// In the early days of JavaScript, the only way to declare variables was using 'var'.
// 'var' was part of the original JavaScript specification and is function-scoped, meaning variables declared with 'var' are accessible throughout the function they are declared in, regardless of block boundaries.
// Variables declared with 'var' are also hoisted, which means their declaration is moved to the top of the function scope during compilation, but initialization remains in place. This can lead to unexpected behavior.
// Due to issues with 'var' such as scope leakage and hoisting problems, ECMAScript 6 (ES6, released in 2015) introduced 'let' and 'const' to provide better scoping and predictability.
// 'let' allows for block-scoped variables that can be reassigned, addressing the limitations of 'var' by confining the variable's scope to the nearest enclosing block (like loops or if statements).
// 'const' is similar to 'let' in being block-scoped but is used for constants; once assigned, the value cannot be reassigned, though for objects and arrays, the contents can still be mutated (mutable).
// Prior to ES6, JavaScript only had global and function scopes, which often led to bugs; 'let' and 'const' introduced proper block scoping to align JavaScript more closely with other programming languages.
// Many older code examples still use 'var' for compatibility with legacy browsers or due to historical reasons, but modern best practices recommend using 'let' and 'const' over 'var'.


function anshuji( ) {
    return "Anshuji";
}

console.log(anshuji());

let s = function addu(a,b) {
    return a+b;
};

console.log(typeof s);
console.log(s(2,3));


let a = 10;
let b = 10.45;
let c = "Anshuji";
let login = true;
let logout = false;
let d;
let e = null;
let f = [1,2,3,4];
let g = {
    name: "Anshuji", 
    age: 21
};
let h = Symbol("This is a symbol");

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof login);
console.log(typeof logout);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);

console.log(a);
console.log(b);
console.log(c);
console.log(login);
console.log(logout);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(g.name);
console.log(g.age);
console.log(h);
console.log(f[2]);
console.log(f.length);