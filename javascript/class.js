'use strict';
// Object-oriented programming
// class : template
// obejct : instance of a class
// JavaScript classes
// - introduced in ES6
// - syntacticl sugar oer prototypd-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const hany = new Person('hany', 28);

console.log(hany.name);
console.log(hany.age);
hany.speak();


// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    //if (value < 0) {
    //  throw Error('age cn not be negative');
    //}
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// Soon
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// 4.Static properties and methods
// Soon
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance (상속)
// a wy for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}


class Rectangle extends Shape {};
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('삼각형');
  }
  // overidding
  getArea() {
    return (this.width * this.height) / 2;
  }
  // Object 의 toString 오버라이딩
  toString() {
    return `Triangle color: ${this.color}`;
  }
};
const rectangle = new Rectangle(20, 30, 'pink');
const triangle = new Triangle(20, 30, 'blue');
rectangle.draw();
triangle.draw();
console.log(rectangle.getArea());
console.log(triangle.getArea());
console.log(triangle.toString());


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle);  // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape);  // true
console.log(triangle instanceof Object); // true