// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 

''''

1 + 2 = ${1 + 2}`);

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// check() 함수와 같이 연산을 많이하는 함수는 제일 뒤에 호출한다.
// value1 <  value 2 < check()
console.log(`or: ${value1 || value2 || check()}`);

// || (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('hey');
    }

    return true;
}

// object equality by reference
const hany1 = {name: 'hany'};
const hany2 = {name: 'hany'};
const hany3 = hany1;
console.log(hany1 == hany2);
console.log(hany1 === hany2);
console.log(hany1 == hany3);