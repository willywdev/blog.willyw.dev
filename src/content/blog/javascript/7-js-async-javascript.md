---
title: "Asynchronous JavaScript"
description: "Dive into the world of Asynchronous JavaScript! Uncover the power and efficiency of async programming, mastering callbacks, promises, and async/await functions for smoother, responsive web applications. Explore the fundamentals and best practices in this comprehensive guide to elevate your JavaScript expertise."
pubDate: "Nov 23 2023"
heroImage: "/javascript/js-async-javascript.png"
category: "javascript"
readingTime: "2:16 min."
previous: "/blog/javascript/6-js-functions-recursion"
next: "/blog/javascript/8-js-interview-questions"
---

## Introduction

Asynchronous Programming lets us do things in the background while also doing tasks in the front. This matters because in JavaScript, it can only do one thing at a time. If a task takes too long, it stops everything else in the browser until it's done. This means for example, if you have a function that takes 10 seconds to run, the browser will be frozen for 10 seconds and the user won't be able to do anything.

Here is an Example of an Async Event Loop:

![Asynchronous JavaScript Gif Example](/javascript/async-js.gif)

We will learn more about the Call Stack, Web API, Callback Queue, and Event Loop in another article.

We've already covered Callbacks, an integral part of Async JavaScript. These functions are executed after the higher-order function has completed its execution. Also we have covered many examples of Synchronous Code.

## Promises

Promises are a way to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

A Promise is an object returned by an Async function. A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed.

Some async functions provided by JavaScript itself are for example `fetch()` and `setTimeout()`.
Let's take a look at an example of a Promise:

```js
const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");
console.log(fetchPromise);
//--Output: Promise {<pending>}

fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.log(err);
  });
```

In the above code snippet you can see you can chain multiple `.then()` methods. The first `.then()` method returns the response as JSON. The second `.then()` method logs the users to the console. The `.catch()` method logs any errors to the console. The `.catch()` method is optional.

## Async/Await

Async/Await is a new way to write asynchronous code. It is built on top of Promises, so every async function returns a Promise. Async/Await makes asynchronous code look and behave a little more like synchronous code. This is where the name Async/Await comes from. Async/Await is syntactic sugar for Promises. Also you won't have to chain `.then()` methods anymore, which can make your code more readable.

Let's take a look at an example of Async/Await:

```js
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users);
}
```

The `async` keyword on the function makes it an async function and thus returns a Promise. The `await` keyword waits for the Promise to resolve and then returns the result. The `await` keyword can only be used inside an async function.

**Async/Await is not another way to handle asynchronous code. It is just syntactic sugar for Promises.**
