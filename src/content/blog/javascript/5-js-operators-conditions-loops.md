---
title: "JavaScript Operators, Conditions & Loops"
description: "Explore the Essentials of JavaScript: Operators, Conditions, Loops, Functions, and Recursion. Dive into this comprehensive guide demystifying key concepts in JavaScript programming. Unlock the power of operators, master conditional statements, harness the potential of loops, understand the functionality of functions, and delve into the elegance of recursion. Elevate your coding prowess with this insightful blog post!"
pubDate: "Nov 22 2023"
heroImage: "/javascript/js-operators-conditions-loops.png"
category: "javascript"
readingTime: "2:16 min."
previous: "/blog/javascript/4-js-oop-2"
next: "/blog/javascript/6-js-functions-recursion"
---

## Expressions & Operators

Expressions & Operators are fairly simple in JavaScript. Expressions are any valid unit of code that resolves to a value, while Operators are symbols that perform operations on operands.

```javascript
// An expression with a side effect (assigning a value)
x = 7;

// An expression that purely evaluates
3 + 4;
```

An expression that purely evaluates and is not part of a bigger construct will be immediately discarded. So it does not produce any effects.

All complex expressions are joined by operators. There is a lot of different operators in JavaScript, but we will only cover the most important ones:

```javascript
// Assignment Operators, there are also +=, -=, *=, /=, %=, ...
let rubyAge = 18;

// Comparison Operators, like ==, ===, !=, !==, >, <, >=, <=
rubyAge === 18;
rubyAge == "18";
rubyAge >= 17;
rubyAge > 18;
rubyAge !== 18;

// Arithmetic Operators, like +, -, *, /, %, **, ++, --
rubyAge + 1;
rubyAge - 1;
rubyAge * 2;
rubyAge / 2;
rubyAge % 2;
rubyAge++;
rubyAge--;

// Logical Operators, like &&, ||, !
rubyAge > 17 && rubyAge < 19;
rubyAge > 17 || rubyAge < 19;
!rubyAge > 17;

// Ternary Operator
rubyAge > 17 ? "You are an adult" : "You are a child";

// String Operators, like +, +=
"Ruby" + " " + "is" + " " + "awesome";

// Unary Operators, like delete, typeof, void, +, -, ~, !
delete rubyAge;
typeof rubyAge;
void rubyAge; // evaluates to undefined
```

To read more about Assignement Operators, check out [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).

## Conditions

Probably a lot of you heard of the programmers joke "Please go to the store and buy milk and if they have eggs, get six --- I came home with 6 cartons of milk".

This is a perfect example of a condition. A condition is a statement that evaluates to either true or false. If the condition is true, the code inside the block will be executed, otherwise it will be skipped.

```javascript
// if...else
if (rubyAge > 17) {
  console.log("You are an adult");
} else {
  console.log("You are a child");
}

// switch
switch (rubyAge) {
  case 18:
    console.log("You are an adult");
    break;
  case 17:
    console.log("You are a child");
    break;
  default:
    console.log("You are a baby");
}
```

## Loops

There are a couple of Loops available in JavaScript. Loops are used to execute the same block of code a specified number of times or when a condition is met. The most common ones are:

```javascript
// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do...while
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

There are also for...in or for...of loops, but we most of the time, there are methods available that are more suitable for the task of for example iterating over Arrays.
