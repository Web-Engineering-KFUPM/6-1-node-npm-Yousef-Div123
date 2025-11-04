export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.slice(1).reduce((diff, num) => diff - num, numbers[0]);
}

export function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

export function divide(numbers) {
  let res = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === 0) 
      return NaN;
    res /= numbers[i];
  }
  return res;
}

