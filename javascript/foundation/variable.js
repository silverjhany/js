// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Varaible, rw (read/write)
// let (added in ES6)
// Mutable
let globalName = 'global name';

{
  let name = 'hany';
  console.log(name); 

  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (사용 금지 !!)
// var hoisting (어디에 선언하든 상관없이 항상 선언을 끌어올려주는 것.)
// has no block scope
{
  var age;
  console.log(age);
}

// 3. Constant, r (read only)
// 자바스크립트 개발 시 값이 변할 일이 없다면 const사용
// - scurity
// - thread safety
// - reduce human mistakes
// Immutable
const daysInWeek = 7;
const maxNumber = 5; 

// 4. Variable types
// primitive, single item: nuber, string, boolean, null, udefined, symbol
// object, box-container
// function, first-class function (함수도 다른 데이터타입처럼 변수에 할당이 가능하고 , 
// 함수의 파라미터(인자)로도 전달되고 리턴타입으로도 전달이 가능하다.)

const count = 17; 
const size = 17.1
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, negativeInfinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${brendan}, type: ${typeof brendan}`);
console.log(`value: ${greeting}, type: ${typeof greeting}`);

// boolean
// false: 0 , null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create uniaue identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`vlaue: ${symbol1.description}, type: ${typeof symbol1.description}`);

// object
const hany = { name: 'hany', age : 28};
hany.age = 27;
console.log(hany); 

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
