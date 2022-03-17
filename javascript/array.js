'use strict';

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1 ,2];

// Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3. Looping over an array
// a. for
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from then end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// !! shift, unshift are slower than pop, push


// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Seraching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));
console.log(fruits.indexOf('🥥'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));


// Quiz
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];

  //let friutStr = '';
  //for(let fruit of fruits) {
  //  friutStr += fruit + ',';
  //}
  //console.log(friutStr);

  const answer = fruits.join(', and');
  console.log(answer);
}

// Q2. make an array out of a string
{
  const fruits = 'apple, kiwi, banana, cherry';
  const fruitArray = fruits.split(',');

  console.log(fruitArray);
}