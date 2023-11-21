---
title: "JavaScript Object Oriented Programming II"
description: "Learn with me about JavaScript Object Oriented Programming and how to declare classes"
pubDate: "Nov 20 2023"
heroImage: "/javascript/js-oop-2.png"
category: "javascript"
readingTime: "5:02 min."
previous: "/blog/javascript/3-js-oop-1"
next: "/blog/javascript/5-js-operators-conditions-loops"
---

## Classes in JavaScript

Now imagine you need to create alot of cats. You would have to write the same code over and over again. This is where classes come in handy.

```javascript
class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
    meow() {
        console.log("Meow!");
        return this;
    };
    tellAge() {
        console.log(`I am ${this.age} years old.`);
        return this;
    }
  }
}
```

Okay. What is happening here? We are creating a new Cat Class with the `class` keyword. Inside the class we have a `constructor` method. The constructor method is a special method that is called when we create a new instance of the class. The constructor method takes in the parameters `name`, `age` and `color`. We then assign the values of the parameters to the properties of the class.

Now we can create a couple of cats like this:

```javascript
const ruby = new Cat("Ruby", 18, "gray");
const luna = new Cat("Luna", 2, "black");
const simba = new Cat("Simba", 5, "orange");

// We can even make all of them meow:
ruby.meow();
luna.meow();
simba.meow();
```

## Method Chaining

We can even chain methods together. For example we can make Ruby meow and tell us her age.
But first: Did you notice `return this;` on our methods? This is because we want to return the object itself so that we can chain methods together. If we didn't return the object itself we would get an error, because we are trying to use methods on `undefined` and not on the object itself.

```javascript
ruby.meow().tellAge();
//--Output: Meow!
//--Output: I am 18 years old.
```

## Class Inheritance

We can even create a new class that inherits from another class. For example we can create a class `Kitten` that inherits from the `Cat` class. This way we can create a new kitten that has all the properties and methods of the `Cat` class, but all of our new Kittens need a special Diet so they grow up just as strong as our other cats.

```javascript
class Kitten extends Cat {
  meowForMilk() {
    console.log("Meow! I want milk!");
    return this;
  }
}

const kitten = new Kitten("Kitty", 0, "white");
console.log(kitten);
//--Output: Kitten { name: 'Kitty', age: 0, color: 'white', meow: [Function], tellAge: [Function], meowForMilk: [Function] }
```

What is happening here? We are creating a new class `Kitten` that inherits from the `Cat` class. We can then create a new instance of the `Kitten` class and use all the methods of the `Cat` class. Also we can add new methods to the `Kitten` class, that only the `Kitten` class has.

## Constructors under the Hood

> You can skip to the next article, if you are not interested in the technical details or how Classes were implemented before the Class-Keyword was introduced.

JavaScript actually doesn't have Classes. All this we were using before, is syntactic sugar for the prototype-based inheritance.
So when we are using the Class-Keywoard, JavaScript is working with the Prototype Model under the hood.

Before JavaScript introduced the Class-Keyword, we had to use the Prototype Model to create Classes. This is how it looks like:

```javascript
// This is a constructor function:
function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.meow = function () {
    console.log("Meow!");
    return this;
  };
}
const ruby = new Cat("Ruby", 18, "gray");
console.log(ruby);
//--Output: Cat { name: 'Ruby', age: 18, color: 'gray', meow: [Function] }
```

## Prototype Model

In JavaScript, every object has a prototype. For instance, when we use String or Number methods, we aren't declaring them as objects. Instead, their prototype is an object.

JavaScript essentially wraps primitive values into objects under the hood, enabling the use of object prototypes to apply methods to these primitives.

While you could directly create an object from a primitive variable like this:

```javascript
const myString = new String("Hello World!");
```

It's not common practice because JavaScript automatically handles this conversion for us.
You can check for all Prototype Methods by clicking on the `__proto__` property of an Object in the console.

#### Adding methods to a Prototype

In our example we can add methods to the prototype of our Cat class, so every future Cat we add has access to the method via the Prototype:

```javascript
function Cat(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}
Cat.prototype.meow = function () {
  console.log("Meow!");
  return this;
};
const ruby = new Cat("Ruby", 18, "gray");
console.log(ruby);
//--Output: Cat { name: 'Ruby', age: 18, color: 'gray' }
```

Now every Cat we create has access to the `meow` method through the Prototype.
Remember that this is not necessary if you are using the `class`-Keyword.
There you can just add methods inside the class, and outside the constructor. Then you are good to go.

## Prototype Inheritance

Prototype Inheritance is similar to Class Inheritance. We want to create a new type of Cat, that has more methods than the normal Cat. We can do this by creating a new constructor function and setting the prototype of the new constructor function to the prototype of the Cat constructor function.

```javascript
function Kitten(...args) {
  // ... = Spread Operater. Spreads all the arguments in an Array: [a,b,c]
  Cat.apply(this, args);
  // .apply() => Calling the main constructor function with the arguments of the new constructor function. The second argument takes an array of arguments.
}
Kitten.prototype = Object.create(Cat.prototype);
// Setting the prototype of the Kitten constructor function to the prototype of the Cat constructor function. Otherwise we would not have access to the methods of the Cat constructor function.
Kitten.prototype.meowForMilk = function () {
  console.log("Meow! I want milk!");
  return this;
};
```

What is happening here exactly? We are creating a new Kitten constructor function in which we take the arguments as an Array, because of the Spread Operator(`...args`).
Then we call the Cat function, we give our new Kitten function the context of `this` and we pass in the arguments of the Kitten function.
Then we set the prototype of the Kitten function to the prototype of the Cat function.
