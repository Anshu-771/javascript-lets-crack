// Notes from the YouTube video "Stack vs Heap (First Principle) | Javascript Full Course #03"
// The video is part of a JavaScript full course series, focusing on memory management from first principles.
// The speaker explains how JavaScript handles memory using the stack and heap to help avoid common bugs.

// Speaker introduces the topic: Explaining why understanding memory management is important in JavaScript, especially for beginners.
// Speaker: "Welcome to the third video in the JavaScript full course. Today, we dive into stack vs heap from first principles."

// Speaker explains the basics of memory in JS.
// Speaker: "JavaScript uses two main memory areas: the stack and the heap. The stack is for static memory, fast access, and the heap is for dynamic memory."

// Speaker discusses the call stack.
// Speaker: "The call stack is a LIFO structure that manages function invocations. When a function is called, it's pushed to the stack; when it returns, it's popped."

// Speaker gives an example of primitive types on the stack.
// Speaker: "Primitive types like numbers, strings, booleans are stored in the stack. When you assign one to another, it's copied by value."
// Example: let a = 5; let b = a; b = 10; // a remains 5, b is 10

// Speaker explains non-primitive types on the heap.
// Speaker: "Objects, arrays, and functions are stored in the heap. Variables in the stack hold references to their locations in the heap."
// Example: let obj1 = { name: 'John' }; let obj2 = obj1; obj2.name = 'Jane'; // Both obj1 and obj2 now have name 'Jane' because they reference the same heap object.

// Speaker talks about garbage collection.
// Speaker: "JavaScript has automatic garbage collection to free up memory in the heap when objects are no longer referenced."

// Speaker discusses implications for coding.
// Speaker: "Understanding this helps avoid unintended mutations. Use spread operator or Object.assign for deep copies if needed."

// Speaker wraps up.
// Speaker: "This is fundamental for JavaScript developers. In the next video, we'll build on this."
// End of notes. These are summarized based on standard explanations of the topic, as direct transcript access was unavailable. For exact wording, check the video's built-in transcript on YouTube.