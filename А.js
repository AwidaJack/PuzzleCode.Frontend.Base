const num1 = Number(prompt("Введите первое число:"));
const num2 = Number(prompt("Введите второе число:"));
const operator = prompt("Введите оператор ( +, -, *, /, **, % ):");
let result;

switch(operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  case '**':
    result = num1 ** num2;
    break;
  case '%':
    result = num1 % num2;
    break;
  default:
    result = "Некорректный оператор";
    break;
}

console.log(`Результат операции: ${result}`);