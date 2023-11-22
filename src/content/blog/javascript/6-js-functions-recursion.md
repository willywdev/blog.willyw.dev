---
title: "JavaScript Functions & Recursion"
description: "Explore the Essentials of JavaScript: Functions and Recursion. Dive into this comprehensive guide demystifying key concepts in JavaScript programming. Unlock the power of operators, master conditional statements, harness the potential of loops, understand the functionality of functions, and delve into the elegance of recursion. Elevate your coding prowess with this insightful blog post!"
pubDate: "Nov 21 2023"
heroImage: "/javascript/js-functions-recursion.png"
category: "javascript"
readingTime: "5:02 min."
previous: "/blog/javascript/5-js-operators-conditions-loops"
next: "/blog/javascript/7-js-async-javascript"
---

## Defining Functions

Functions are one of the fundamentals of every programming languages. They are blocks of code that can be called by name to perform a specific task. Functions are also known as methods, procedures, or subroutines. They are used to perform repetitive tasks, to organize code, and to make code reusable.

```javascript
function name() {
  // code to be executed
}

function foo(bar) {
  console.log(bar);
}

// call a function
foo();
```

Functions are defined with the `function` keyword, followed by the name of the function, a list of parameters, and the code to be executed. The function name can contain letters, digits, underscores, and dollar signs. The parentheses may include parameter names separated by commas.

## Arrow functions

Since ES6, JavaScript also supports arrow functions. They are a more concise way to write functions. Arrow functions are always anonymous, so they are usually assigned to a variable.

```javascript
const name = () => {
  // code to be executed
};

const foo = (bar) => {
  console.log(bar);
};

foo();
```

Arrow functions have the same functionality as regular functions. Often you will see them as Callback functions, which are functions passed as arguments to another function. You will read about that in a minute.

## Function trivia & scope

- Functions can be defined anywhere in the code, even inside other functions.
- They can also be defined conditionally, or inside loops.
- Functions can be assigned to variables, stored in arrays, or objects.
- They can also be passed as arguments to other functions.
- Functions can return other functions, or they can return values.
- Functions can also be invoked immediately after they are defined.

Functions also have their own scope. Variables defined inside a function are not accessible from outside the function. Variables defined outside a function are accessible from inside the function.

```javascript
function tellCatsAge() {
  const age = 5;
  console.log(`The cat is ${age} years old.`);
}

console.log(age); // ReferenceError: age is not defined
```

## Recursion

Recursion is a way of programming or coding a problem, in which a function calls itself one or more times in its body. Usually, it is returning the return value of this function call. If a function definition fulfills the condition of recursion, we call this function a recursive function.
This means: A function can refer to and call itself.

```javascript
function loop(x) {
  // Case to stop the loop, prevending an infinite loop
  if (x >= 10) {
    return;
  }

  loop(x + 1);
}

loop(0);
//--Output: 10
```

## Callback functions

Callback functions are like sharing toys and taking turns on the playground. Imagine having a special toy, like a trumpet, that makes a sound. You tell your friend, 'When I'm done playing with the trumpet, I'll call you.' That's how a callback works! It's when something finishes happening, it tells someone else, 'Hey, I'm done, you can do your thing now!'

Just like taking turns playing with toys, in the world of computer programs, callback functions allow different parts of the code to work together and take their turns efficiently.

```javascript
// This function represents playing with the toy (trumpet)
function playWithToy(callback) {
  console.log("Playing with the trumpet 🎺...");
  // Simulating the playing time with a timeout
  setTimeout(function () {
    console.log("Finished playing!");
    callback(); // Calling the callback function when done
  }, 2000); // This represents the time taken to play with the toy
}

// This function represents the friend waiting to play with the toy next
function friendWantsToPlay() {
  console.log("Yay! It's my turn now! 🎉");
}

// Playing with the toy and then calling the friendWantsToPlay function as a callback
playWithToy(friendWantsToPlay);

//--Output: Playing with the trumpet 🎺...
//--Output: Finished playing!
//--Output: Yay! It's my turn now! 🎉
```

Callback functions are a part of Asynchronous JavaScript, which topic is the next blog post.
