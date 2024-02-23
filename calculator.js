function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid Operator!";
  }
  return result;
}

console.log(calculate(5, 5, "+"));
console.log(calculate(5, 5, "-"));
console.log(calculate(5, 5, "*"));
console.log(calculate(5, 5, "/"));
console.log(calculate(5, 5, "?"));
