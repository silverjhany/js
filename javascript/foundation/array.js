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

  const answer = fruits.join(', and ');
  console.log(answer);
}

// Q2. make an array out of a string
{
  const fruits = 'apple, kiwi, banana, cherry';
  const fruitArray = fruits.split(',');

  console.log(fruitArray);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];

  console.log(array.reverse());
}


// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  const newArray = array.slice(2, 5);

  console.log(newArray);
  console.log(array);
}

console.clear();

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // students.forEach((student, index) => {
  //   if(student.score === 90) {
  //     console.log(student.name);
  //   }
  // })

  const result = students.find((student) => student.score === 90);

  console.log(result);
    
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);

  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// 배열안에 있는 요소들을 전달해준 콜백함수를 호출하면서 콜백함수에서 가공된 값으로 대체 
{
  const result = students.map((student) => student.score) ;
  console.log(result);
}

console.clear();

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50); // some
  console.log(result);

  const result2 = students.every((student) => student.score < 50); // all
  console.log(result2);
}

// Q9. compute students' average score
{
    // const result = students.reduce((prev, curr) => {
    //   console.log('--------');
    //   console.log(prev);
    //   console.log(curr);

    //   return prev + curr.score;
    // }, 0);

    // console.log(result / students.length);

    const result = students.reduce((prev, curr) => prev + curr.score, 0);

    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join(', ');
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score).sort((a, b) => a - b).join(', ');
  console.log(result);
}