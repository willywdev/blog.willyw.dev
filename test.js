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
