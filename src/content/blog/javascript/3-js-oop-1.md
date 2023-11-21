---
title: "JavaScript Object Oriented Programming"
description: "Learn with me about JavaScript Object Oriented Programming and how to declare classes"
pubDate: "Nov 20 2023"
heroImage: "/javascript/js-oop-1.png"
category: "javascript"
readingTime: "1:36 min."
previous: "/blog/javascript/2-js-datatypes-2"
next: "/blog/javascript/4-js-oop-2"
---

In this article we will learn the basics / fundamentals of Objected Oriented Programming.
I will now refer to Objected Oriented Programming as **OOP**.

## Why OOP?

OOP is a programming paradigm that allows us to create objects that have properties and methods.
Imagine a JavaScript File where you have multiple functions and variables that are all over the place. With OOP we can organize our code in a way that is more readable and reusable.

## Creating an Object

To get started we can come back to our Programming pet Ruby 🐈.
Ruby is a cat that has a name, age and a color. Ruby can also meow and purr.

```javascript
const ruby = {
  name: "Ruby",
  age: 18,
  color: "gray",
  sayHello: function () {
    console.log("Meow!");
  },
  purr: function () {
    console.log("Purr!");
  },
  tellAge: function () {
    console.log(`I am ${this.age} years old.`);
  },
};
```

As you can see an Object can even take functions as values. We call this functions `methods`.
JavaScript itself comes with a lot of methods that we can use on Objects. For example the `Object.keys()` method that returns an array of all the keys of an Object:

```javascript
const rubyKeys = Object.keys(ruby);
console.log(rubyKeys);
//--Output: ["name", "age", "color", "sayHello", "purr"]
```

## This Keyword

In the example above we used the `this` keyword. `this` refers to the Object itself. In our case `this` refers to the `ruby` Object.

## Adding / Updating Properties of an Object

Even if we are using `const` to declare our Object we can still update the properties of our Object. This is because we are not changing the Object itself but only the properties of the Object.

In the same way we can add new properties to our object:

```javascript
ruby.age = 19;

console.log(ruby.age);
//--Output: 19

ruby.isCute = true;
```

## Deleting Properties of an Object

We can also delete properties of an Object with the `delete` keyword:

```javascript
delete ruby.isCute;
```

In the next article we will learn how to create **Classes** and how to use them.
