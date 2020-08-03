import capitalize from '../src/capitalize';

test('Return capitalized string', () => {
  expect(capitalize('luis')).toBe('Luis');
});

test('Return empty string if is empty', () => {
  expect(capitalize('')).toBe('');
});

test('Return an empty string if is not a string', () => {
  expect(capitalize(33)).toBe('');
});