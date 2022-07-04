const num1 = 3;
const num2 = 10;

let count = 0;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

if (num2 > num1) {
  count++;
  console.log(count);
}

for (let i = 0; i < 9; i++) {
  count++;
  console.log(count);
}

const num3 = Number("10.5");
console.log(num3);
