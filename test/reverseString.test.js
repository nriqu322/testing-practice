import reverseString from '../src/reverseString';

test('Return reverse string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('Return empty string if is empty', () => {
  expect(reverseString('')).toBe('');
});

test('Return an empty string if is not a string', () => {
  expect(reverseString(33)).toBe('');
});