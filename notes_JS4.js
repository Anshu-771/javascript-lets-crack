// Lecture 05: Number, Math, and String - Comprehensive Notes in Comment Form
// These notes are based on standard JavaScript fundamentals for Numbers, the Math object, and Strings.
// Structured as hierarchical comments for easy reading and reference.
// Covers key concepts, methods, properties, and examples.

// =============================================================================
// SECTION 1: NUMBERS IN JAVASCRIPT
// =============================================================================

// 1.1 Number Basics
// - JavaScript numbers are always stored as double-precision 64-bit floating point values (IEEE 754 standard).
// - Integers are represented exactly up to 2^53 - 1 (safe integer range: Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER).
// - No distinction between integers and floats; all are Number type.

// Example: Declaring numbers
let integer = 42;          // Integer literal
let decimal = 3.14159;     // Decimal literal
let scientific = 1.5e3;    // Scientific notation (1500)

// 1.2 Number Properties
// - Number.MAX_VALUE: Largest representable number (~1.79e308)
// - Number.MIN_VALUE: Smallest positive number (~5e-324)
// - Number.POSITIVE_INFINITY: Infinity
// - Number.NEGATIVE_INFINITY: -Infinity
// - Number.NaN: Not-a-Number (result of invalid operations, e.g., 0/0)
// - Number.EPSILON: Smallest difference between 1 and the next representable number (~2.22e-16)

// Example:
console.log(Number.MAX_VALUE);     // 1.7976931348623157e+308
console.log(Number.isNaN(NaN));    // true (use Number.isNaN() for reliable check)

// 1.3 Number Methods
// - toFixed(digits): Returns string with specified decimal places
// - toPrecision(precision): Returns string with specified significant digits
// - toExponential(exponent): Returns string in exponential notation
// - isInteger(value): Checks if value is integer
// - isFinite(value): Checks if value is finite number
// - parseInt(string, radix): Parses string to integer (radix 2-36)
// - parseFloat(string): Parses string to floating point

// Examples:
let num = 123.456;
console.log(num.toFixed(2));       // "123.46"
console.log(Number.isInteger(42)); // true
console.log(parseInt("10px", 10)); // 10

// 1.4 Common Number Operations
// - Arithmetic: +, -, *, /, %, ** (exponentiation)
// - Increment/Decrement: ++, --
// - Assignment: +=, -=, *=, /=, **=, %=
// - Comparison: == (loose), === (strict), >, <, >=, <=

// Example:
let a = 5 + 3 * 2;  // 11 (operator precedence: * before +)
let b = Math.pow(2, 3); // 8 (or 2 ** 3)

// =============================================================================
// SECTION 2: THE MATH OBJECT
// =============================================================================

// 2.1 Math Basics
// - Math is a built-in global object with static properties and methods for mathematical operations.
// - Not a constructor; cannot create instances (Math is not a function).

// 2.2 Math Properties (Constants)
// - Math.E: Euler's constant (~2.718)
// - Math.PI: Pi (~3.14159)
// - Math.SQRT2: Square root of 2 (~1.414)
// - Math.abs(x): Absolute value
// - Math.ceil(x): Rounds up to nearest integer
// - Math.floor(x): Rounds down to nearest integer
// - Math.round(x): Rounds to nearest integer
// - Math.trunc(x): Truncates toward zero
// - Math.max(...values): Largest value
// - Math.min(...values): Smallest value
// - Math.random(): Pseudo-random number between 0 (inclusive) and 1 (exclusive)
// - Math.pow(base, exponent): Base to the power of exponent
// - Math.sqrt(x): Square root
// - Math.log(x): Natural logarithm
// - Math.sin(x), Math.cos(x), Math.tan(x): Trigonometric functions (x in radians)
// - Math.exp(x): e^x
// - Math.hypot(...values): Hypotenuse (sqrt(sum of squares))

// Examples:
console.log(Math.PI);              // 3.141592653589793
console.log(Math.round(4.6));      // 5
console.log(Math.random());        // e.g., 0.123456789
console.log(Math.max(1, 5, 3));    // 5
console.log(Math.floor(Math.random() * 10)); // Random integer 0-9

// 2.3 Generating Random Integers
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
// Example: Random int between 1 and 10
let randomInt = Math.floor(Math.random() * 10) + 1;

// =============================================================================
// SECTION 3: STRINGS IN JAVASCRIPT
// =============================================================================

// 3.1 String Basics
// - Strings are immutable sequences of characters.
// - Declared with single quotes '', double quotes "", or template literals ``.
// - Template literals support multi-line and interpolation with ${expression}.

// Examples:
let str1 = "Hello";
let str2 = 'World';
let str3 = `Sum: ${5 + 3}`;  // "Sum: 8"
let multiLine = `Line 1
Line 2`;  // Multi-line string

// 3.2 String Properties and Methods
// - length: Number of characters
// - charAt(index): Character at specified index (0-based)
// - charCodeAt(index): Unicode value of character at index
// - indexOf(substring, start): First index of substring (-1 if not found)
// - lastIndexOf(substring, start): Last index of substring
// - includes(substring, start): Boolean if substring exists
// - startsWith(substring, position): Boolean if starts with substring
// - endsWith(substring, length): Boolean if ends with substring
// - substring(start, end): Substring from start to end (exclusive)
// - slice(start, end): Similar to substring, but allows negative indices
// - toUpperCase(), toLowerCase(): Case conversion
// - trim(): Removes whitespace from both ends
// - replace(search, replacement): Replaces first occurrence (use regex for all)
// - split(separator, limit): Splits into array
// - concat(...strings): Concatenates strings

// Examples:
let text = "  Hello World!  ";
console.log(text.length);          // 15
console.log(text.trim());          // "Hello World!"
console.log(text.toUpperCase());   // "  HELLO WORLD!  "
console.log(text.split(" "));      // ["", "", "Hello", "World!", "", ""]
console.log(text.includes("World")); // true
console.log(text.substring(2, 7)); // " Hello"
console.log(text.replace("World", "Universe")); // "  Hello Universe!  "

// 3.3 Escape Sequences in Strings
// - \n: New line
// - \t: Tab
// - \\: Backslash
// - \': Single quote
// - \": Double quote
// - \uXXXX: Unicode character (XXXX is hex code)

// Example:
let escaped = "Line 1\n\tLine 2\"Quoted\"";

// 3.4 String Iteration and Templates
// - Strings are iterable; use for...of loop.
// - Template literals for dynamic strings with expressions.

// Example:
for (let char of "Hello") {
  console.log(char);  // H, e, l, l, o
}

// =============================================================================
// ADDITIONAL NOTES
// =============================================================================

// - Type Coercion: Numbers and strings often convert automatically (e.g., "5" + 3 = "53").
// - Best Practice: Use strict equality (===) to avoid surprises.
// - Performance: For heavy string operations, consider arrays and join().
// - ES6+ Features: Enhanced support for Unicode, internationalization (Intl object).

// End of Lecture 05 Notes