import calculator from '../src/calculator';

test('Return sum of two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('Return susbtraction', () => {
  expect(calculator.substract(5, 3)).toBe(2);
});

test('Return division of two numbers', () => {
  expect(calculator.divide(20, 2)).toBe(10);
});

test('Return error message when divide by zero', () => {
  expect(calculator.divide(10, 0)).toBe('Can\'t divide by zero');
});

test('Return multiply function', () => {
  expect(calculator.multiply(7, 3)).toBe(21);
});