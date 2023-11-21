---
title: "JavaScript Datatypes and Structures II"
description: "Learn with me about complex JavaScript Datatypes and Prototype methods."
pubDate: "Nov 19 2023"
heroImage: "/javascript/js-datatypes-2.png"
category: "javascript"
readingTime: "2:09 min."
previous: "/blog/javascript/1-js-datatypes-1"
next: "/blog/javascript/3-js-oop-1"
---

## Keyed Collections: Maps & Sets

There are more complex data structures in JavaScript, that are called **Keyed Collections**. They have similar properties to Arrays & JavaScript, but they are not the same.

#### Maps

Maps are a collection of key-value pairs. The keys can be of any type, while the values can be of any type as well. Maps are ordered, which means that the order of the key-value pairs is the same as the order in which they were inserted. Also, the keys of a map are unique, which means that you can't have the same key twice in a map.

```javascript
const foo = new Map();
foo.set("bar", 42);
foo.set(loveCats, true);
console.log(foo);
//--Output: Map(2) {"bar" => 42, "loveCats" => true}
```

#### Sets

Sets are the same as Maps, but they only have keys, no values. The keys of a set are unique, which means that you can't have the same key twice in a set. Sets are ordered, which means that the order of the keys is the same as the order in which they were inserted.

```javascript
const foo = new Set();
foo.add("bar");
foo.add(42);
foo.add(true);
console.log(foo);
//--Output: Set(3) {"bar", 42, true}
```

## Prototype Methods

In JavaScript, every object has a prototype. This prototype is an object itself, that contains methods and properties that are shared between all objects that have this prototype. This is called **prototypal inheritance**.

For example, all arrays have the prototype `Array.prototype`. This prototype contains methods like `Array.prototype.push()` or `Array.prototype.pop()`. These methods are shared between all arrays.

```javascript
const foo = [1, 2, 3];
foo.push(4);
console.log(foo);
//--Output: [1, 2, 3, 4]
```

#### Most common Prototype Methods

It is impossible for me to list all prototype methods here, but I will list some common ones:

- `Array.prototype.push()` - Adds an element to the end of an array
- `Array.prototype.pop()` - Removes the last element of an array
- `Array.prototype.shift()` - Removes the first element of an array
- `Array.prototype.unshift()` - Adds an element to the beginning of an array
- `Array.prototype.includes()` - Checks if an array contains a certain element
- `Array.prototype.reverse()` - Reverses the order of the elements in an array
- `Array.prototype.sort()` - Sorts the elements of an array
- `Array.prototype.toString()` - Converts an array to a string
- `Array.prototype.forEach()` - Calls a function once for each element in an array

<br>

You can get a list of methods for a certain prototype by searching your data type on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) and then clicking on the "Methods" tab.

As you can see, there are a lot of prototype methods for arrays. This is not by coincidence. Many Developers are converting or storing data into Arrays, because they are so flexible and have so many methods.

## Learn more:

- ![Youtube](/icons/youtube.svg) [JavaScript ES6 / ES2015 - [08] Set, Map, WeakSet and WeakMap](https://www.youtube.com/watch?v=ycohYSx5h9w&t=561s)
- ![Youtube](/icons/youtube.svg) [Visually Understanding JavaScript Prototypes](https://www.youtube.com/watch?v=01jVgCK-HX4)
- ![MDN](/icons/mdn.svg) [Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
