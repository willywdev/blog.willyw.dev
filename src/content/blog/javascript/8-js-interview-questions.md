---
title: "JavaScript Interview Preparation"
description: "Prepare for your next JavaScript interview with these interview questions. These questions will help you to prepare for your next JavaScript interview."
pubDate: "Nov 23 2023"
heroImage: "/javascript/js-interview.png"
category: "javascript"
readingTime: "2:16 min."
previous: "/blog/javascript/7-js-async-javascript"
---

In this article, I gathered some JavaScript interview questions from across the web.

#### 1. What is Function Declaration and Function Expression?

As basic as this:

```javascript
// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const add = function (a, b) {
  return a + b;
};
```

#### 2. What are first class functions? What is the difference between first class functions and higher order functions?

First class functions are functions that can be assigned to a variable, passed into another function, or returned from another function. Higher order functions are functions that take a function as an argument or return a function.

```javascript
// First class function
const add = function (a, b) {
  return a + b;
};

// Higher order function
const higherOrder = function (a, b, func) {
  return func(a, b);
};
```

#### 3. What is IIFE?

IIFE stands for Immediately Invoked Function Expression. It is a function that is executed right after it is created.

```javascript
(function add(a+b) {
    return a+b;
})(3,4);
```

#### 4. What is the difference between null and undefined?

`null` is an assignment value. It can be assigned to a variable as a representation of no value. `undefined` means a variable has been declared but not defined yet.

#### 5. What is the output?

```javascript
var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun();
```

<details><summary  style="cursor:pointer;"><b>Show Answer</b></summary>
The output is undefined. This is because of hoisting. Variables in JavaScript are hoisted to the top of the function or global scope. However, only the declaration is hoisted, not the initialization. This means, that "var x = 20" is actually "var x;" and "x = 20;".
</details>
<br>

#### 6. What is the difference between Parameters and Arguments?

Parameters are the names created in the function definition. Arguments are the actual values passed to the function.

```javascript
// These are called parameters
function multiply(num1, num2) {
  return num1 * num2;
}

// These are called arguments
multiply(3, 4);
```

#### 7. What is the difference between the Spread Operator and Rest Operator?

The spread operator helps to spread out or unpack items from something that can be listed, like an array or a string. On the other hand, the rest operator gathers multiple items and condenses them into a single element.

```javascript
// Spread Operator
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];

// Rest Operator
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
```

#### 8. What is the difference between == and ===?

`==` checks for equality of value, but not equality of type. `===` checks for equality of value AND equality of type.

#### 9. What is the output?

```javascript
function fn(a, ...numbers, x, y) {
  console.log(a,x,y);
}

fn(1, 2, 3, 4, 5, 6);
```

<details><summary  style="cursor:pointer;"><b>Show Answer</b></summary>
Output: Uncaught SyntaxError: Rest parameter must be last formal parameter
</details>
<br>

#### 10. What is a callback function and can you give an example?

A callback function is a function that is passed into another function as an argument and is executed inside that function.

```javascript
document.addEventListener("click", function () {
  console.log("Clicked!");
});
```

Other Examples are setTimeout, map, filter, reduce, etc.

#### 11. What is the difference between arrow function and regular function?

1. Arrow functions are anonymous and change the way `this` binds in functions.
2. Arrow functions have a different syntax and use the `=>` instead of the `function` keyword.
3. Arrow functions can use implicit returns when the function is a single line.
4. Arrow functions can't use the arguments keyword.

<br>

```javascript
// Arrow functions:
const add = (a, b) => a + b;

// Regular functions:
function add() {
  return arguments;
}

// this keyword
const person = {
  name: "Willy",
  sayHi: function () {
    console.log("Hi " + this.name);
  },
  sayGoodbye: () => {
    console.log("Goodbye " + this.name);
  },
};

person.sayHi(); // Hi Willy
person.sayGoodbye(); // Goodbye undefined
```

#### 12. What are Closures?

Closures are functions that have access to variables from the outer scope. This is possible because of lexical scoping in JavaScript. Inner functions have access to variables from outer functions but outer functions don't have access to variables from inner functions. This is JavaScript's way of private variables.

```javascript
function outer() {
  const name = "Willy";
  function inner() {
    console.log(name);
  }
  inner();
}
outer();
// ----------------------------------
function makeFunc() {
  const name = "Willy";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

makeFunc()(); // Willy
```

#### 13. What is the output?

```javascript
let count = 0;
function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
}

printCount();
```

<details><summary style="cursor:pointer;"><b>Show Answer</b></summary>
Output: 1, 0
</details>
<br>

#### 14. What is the output?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

<details><summary style="cursor:pointer;"><b>Show Answer</b></summary>
Output: 3, 3, 3 <br>
Because var has function scope. It doesnt have block scope. So, the value of i is 3 when the setTimeout callback is executed.
</details>
<br>

#### 15. What is Module Pattern?

The Module Pattern is a design pattern that allows you to create private variables and methods, which aren't accessible from outside the module. This pattern is very useful when you want to prevent naming collisions in the global scope.

```javascript
const myModule = (function () {
  const privateVariable = "Hello World";
  function privateMethod() {
    console.log(privateVariable);
  }
  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

myModule.publicMethod(); // Hello World
myModule.privateMethod(); // Uncaught TypeError: myModule.privateMethod is not a function
```

#### 16. What are the different data types in JavaScript?

There are 7 primitive data types in JavaScript: string, number, bigint, boolean, undefined, symbol, and null. There is also one non-primitive data type: object. The typeof operator can be used to find the type of a value. Almost all of JavaScript builts on top of objects.

#### 17. Explain Hoisting in JavaScript

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if you declare variables and functions at the bottom of your code, they will still be moved to the top of their scope regardless. Functions are completely hoisted, while variable declarations are hoisted but not initialized. JavaScript does this to improve the Developer Experience.

#### 18. What is the difference between var, let and const?

`var` is function scoped and can be redeclared and updated. `let` and `const` are block scoped. `let` can't be redeclared but can be updated. `const` can't be updated or redeclared.

#### 19. Explain Implicit Type Coercion

Implicit type coercion is when the JavaScript interpreter automatically converts one data type to another. This usually happens when you use the `==` operator. For example, `1 == '1'` will return `true` because the string is converted to a number. This can lead to unexpected behavior in your code, so it's best to avoid it.

#### 20. What is the difference between synchronous and asynchronous code?

Synchronous code is executed in sequence. Each statement waits for the previous statement to finish before executing. Asynchronous code doesn't have to wait. Asynchronous code is executed at the same time as other code.

#### 21. What is the difference between local storage and session storage?

Local storage stores data with no expiration date. Session storage stores data for one session only. The data is deleted when the browser tab is closed.

#### 22. What is the difference between event bubbling and event capturing?

Event bubbling is when an event is fired on an element and then bubbles up to its parent element and then to the ancestor elements. Event capturing is the opposite. The event is fired on the ancestor element and then goes down to the element. You can use the `addEventListener` method with the 3rd parameter to set the event to use capturing instead of bubbling.

```javascript
element.addEventListener(
  "click",
  () => {
    console.log("Clicked!");
  },
  true
);
```

#### 23. What is strict mode in JavaScript?

Strict mode is a way to introduce better error-checking into your code.

1. Duplicate arguments are not allowed
2. `JavaScript` keyword can't be used as names
3. Global variables can't be created
4. `this` keyword in functions is undefined
5. `with` statement is not allowed

#### 24. Explain the `this` keyword

The `this` keyword refers to the object that the function is a property of. The value of `this` depends on where the function is called. If the function is called as a method of an object, `this` is bound to the object the method is called on. If the function is called as a standalone function, `this` is bound to the global object. If the function is called as a constructor, `this` is bound to the newly created object.

#### 25. Explain call(), apply() and bind() methods

The `call()` method calls a function with a given `this` value and arguments provided one by one. The `apply()` method calls a function with a given `this` value and arguments provided as an array. The `bind()` method returns a new function, allowing you to pass in a `this` array and any number of arguments.

```javascript
const person = {
  name: "Willy",
  greet: function (greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
  },
};

person.greet.call({ name: "Ruby" }, "Hello", "!"); // Output: "Hello, Ruby!"

person.greet.apply({ name: "Ruby" }, ["Hello", "!"]); // Output: "Hello, Ruby!"

const boundGreet = person.greet.bind({ name: "Ruby" });
boundGreet("Hello", "!"); // Output: "Hello, Ruby!"
```

#### 26. What is the difference between exec() and test() methods?

These methods are used with regular expressions. The `exec()` method executes a search for a match in a string and returns an array or null. The `test()` method tests for a match in a string and returns true or false.

#### 27. What is currying in JavaScript?

Currying is an advanced technique of working with functions. It's the process of converting a function that takes multiple arguments into a function that takes them one at a time.

```javascript
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

multiply(3)(4); // 12
```

#### 28. What are the different scopes in JavaScript?

There are 3 types of scopes in JavaScript: global scope, function scope, and block scope. Variables declared outside of any function are in the global scope and are accessible everywhere in your code. Variables declared with the `var` keyword are function scoped. This means that they are only accessible inside the function they are declared in. Variables declared with the `let` and `const` keywords are block scoped. This means that they are only accessible inside the block they are declared in.

#### 29. What are object prototypes & prototype chain?

Prototypes are the mechanism by which JavaScript objects inherit features from one another. When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

#### 30. What is Memoization?

Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Because JavaScript objects behave like associative arrays, they are ideal candidates to act as caches. When a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. However, if the data is not cached, then the function is executed, and the result is added to the cache.

```javascript
let cache = {};

function fibMemo(n) {
  // If the parameter n is in the cache, then return it
  if (n in cache) {
    return cache[n];
  }
  // Otherwise calculate the result and put it in the cache
  else {
    if (n < 2) {
      cache[n] = n;
    } else {
      cache[n] = fibMemo(n - 1) + fibMemo(n - 2);
    }
    return cache[n];
  }
}

console.log(fibMemo(10)); // Output: 55
```

#### 31. What is recursion in a programming language?

Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. Most loops can be rewritten in a recursive style, and in some functional languages this approach to looping is the default.

```javascript
function getNearTo100(num) {
  if (num > 100) {
    return;
  }
  console.log(num);
  getNearTo100(num + 1);
}

getNearTo100(90);
// Output:
// 90
// 91
// ...
// 99
// 100
```

#### 32. What is the use of a constructor in JavaScript?

Constructors are used to create objects. They let you create a blueprint for an object with properties and methods. When you instantiate an object from a constructor, you get an object with those properties and methods. There are two ways to create a constructor: the function way and the class way.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Willy", 25);
const person2 = new Person("Ruby", 22);
```

#### 33. What is the difference between slice() and splice() methods?

The `slice()` method returns a shallow copy of a portion of an array into a new array object. The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

#### 34. What is the temporal dead zone?

The temporal dead zone is a behavior in JavaScript that occurs when declaring a variable with the `let` and `const` keywords, but not with `var`. It is a period between entering scope and being declared where they cannot be accessed. This means that a variable is in a temporal dead zone from the start of the block until the declaration is processed.

#### 35. What is URL encoding and how do you do it?

URL encoding is a method that converts characters into a format that can be transmitted over the internet.
URLs can only be sent over the Internet using the ASCII character-set.
Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format.

```javascript
const url = "https://www.google.com/search?q=javascript";
const encodedUrl = encodeURI(url);
const decodedUrl = decodeURI(encodeUrl);
```

#### 36. What is a service worker?

A service worker is a script that your browser runs in the background, seperate from the webpage, opening the door to features that don't need a web page or user interaction. For example Push Notifications.

#### 36. Which tools are available to debug JavaScript?

1. Browser DevTools
2. Debugger Statements
3. Console.Log Statements

#### 37. Is JavaScript a compiled or an interpreted Language?

JavaScript is an interpreted language.

#### 38. What is tree shaking?

Tree shaking eliminates dead code. It means that unused code will not be included in the final bundle. It was popularized by the module bundler `rollup`

#### 39. What is a Debugger Statement?

The debugger statement invokes any available debugging functionality, such as setting a breakpoint.

```javascript
function fn() {
  // some code
  debugger;
  // some code
}
```

The execution pauses at the debugger statement.
