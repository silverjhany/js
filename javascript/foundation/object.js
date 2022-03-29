// Objects
// one of the JavaScrpt's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = { key : value }; => Object는 Key와 Value의 집합체

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// 1. Literals and properties
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const hany = { name: 'hany', age : 28 };
print(hany);

// with JavaScript magic (dynamically typed language)
// can add properties later
hany.hasJob = true;
console.log(hany.hasJob);

// can delete
delete hany.hasJob;
console.log(hany.hasJob);


// 2 Computed properties 
// key should be always string
console.log(hany.name);
console.log(hany['name']);
hany['hasJob'] = true;
console.log(hany.hasJob);


//3. Property value shorthand
const person1 = { name : 'bob', age : 2 };
const person2 = { name : 'steve', age : 3 };
const person3 = { name : 'dave', age : 4 };
const person4 = new Person('hany', 28);
console.log(person4);


//4. Constructor
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
    // return this;
}

// 5. in perator: property existence check (key in obj)
console.log('name' in hany);
console.log('age' in hany);
console.log('random' in hany);


// 6. for..in  vs for..of
// for (key in obj)
for (key in hany) {
  console.log(key);
}

// for (value of iterble)
const array = [1, 2, 3, 4, 5];

for(value of array) {
  console.log(value);
}


// 7. Func cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name :'hany', age : '28'};
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}

console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blje', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
