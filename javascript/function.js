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

console.log(add(1, 3));