---
title: "JavaScript Datatypes and Structures I"
description: "Learn with me about JavaScript Datatypes and how to declare variables"
pubDate: "Nov 19 2023"
heroImage: "/js-datatypes-1.png"
category: "javascript"
---

## Declaring Variables

In JavaScript we can declare variables with the `let` or `const` keyword. The difference between them is that `const` variables can't be changed after they have been declared, while `let` variables can be changed.

```javascript
let foo = 42;
const bar = "Hello World";

foo = 21;
//--Output: foo = 21

bar = "Goodbye";
//--Output: TypeError: Assignment to constant variable.
```

In old JavaScript Days we were declaring variables with the `var`-Keyboard. This is outdated and should not be used anymore.

## Dynamic and Weak Typing

Since JavaScript is a dynamically typed language, we don't need to tell the Interpreter what type of data (e.g. Numbers, Strings, ...) a variable is. The Interpreter will figure this out on his own.

This also means, that we can change the type of a variable at any time.

```javascript
let foo = 42;
foo = "bar";
```

JavaScript is also a weakly typed language. This means, that the Interpreter will try to convert a variable to the type it needs at the exact point of time. This is called **"type coercion"**:

```javascript
const foo = 42;
const bar = foo + "Hello World";
console.log(bar);
//--Output: bar = "42Hello World"
```

In this example the Interpreter will convert the number that is stored in our variable `foo` to a string, so that it can **concatenate** it with our string `"Hello World"`.

This also leads to some weird behavior and bugs, if this happens in a way we didn't expect it to happen. A goood example is the type coercion from strings to numbers.

## Primitive Types

All primitive Types, except null, can be tested with `typeof`. The result will be a string with the name of the type.

```javascript
console.log(typeof 42);
//--Output: "number"
```

There are 7 primitive types in JavaScript:

- **Null** - A variable that has no value assigned to it
- **Undefined** - A variable that has been declared but not assigned a value
- **Boolean** - A variable that can only have two values: `true` or `false`
- **Number** - A variable that can hold both integers and floating point numbers
- **String** - A variable that can hold a sequence of characters
- **Symbol** - A variable that holds a unique value
- **BigInt** - A variable that can hold integers of arbitrary length

<br>

## Objects

Objects are a collection of properties. Properties are a key-value pair. The key is always a string, the value can be **any type**.
Objects are a very important part of JavaScript. Almost everything in JavaScript is an object.

```javascript
let foo = {
  name: "Ruby",
  age: 18,
  isCute: true,
  isCat: true,
};
```

In this example we are creating a new Object named `foo`. You can recognize an object by the curly braces `{}`. Inside the curly braces we are defining the **properties** of our object.

## Arrays

Arrays are a type of Object and store collection of values. The values can be **any type**. Arrays are also a very important part of JavaScript.

```javascript
let foo = ["Ruby", 18, true, true];
```

In this example we are creating a new Array named `foo`. You can recognize an array by the square brackets `[]`. Inside the square brackets we are defining the **values** of our array.

## Mutable vs. Immutable

All primitive Values are immutable. This means that they can't be changed after they have been created. This has nothing to do with the fact that we can change the value of a variable.
In fact, if we change the values of a variable, we are creating a new value and assigning it to the variable. The old value will still be there, but we can't access it anymore.

Exceptions for this are the non-primitive types, like objects and arrays. They are mutable, which means that we can change their values after they have been created.
