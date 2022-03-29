// 3. Default parameters (added in ES6)
function showMessage(message = 'Bye~', from = 'unknown') {
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');
showMessage();

// 4. Rest parametesr (added in ES6)
function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for(const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'hany');


// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}

printMessage();

const add = (a, b) => a + b;
const simplePrint = () => console.log('simlePrint');

simplePrint();

console.log(add(1, 3));


// IIFE: Immeditely Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();


// quiz

const calculate = (command, a, b) => {
  switch(command) {
    case 'add' :  
      return a + b;
    break;
    case 'substract' : 
      return a - b;
    break;
    case 'divide' : 
      return a / b;
    break;
    case 'multiply' : 
      return a * b;
    break;
    case 'remainder' : 
      return a % b;
    break;
    default : 
     throw Error('unknown command'); 
    
  }
}
    
console.log(calculate('substract', 1, 2));

console.log(add(1, 3));
