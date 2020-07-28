import analyze from '../src/arrayAnalysis';

test('Return array operations', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Return error message if one of the elements is not a number', () => {
  expect(analyze([1, 'f', 3, 4, 2, 6])).toEqual('Array must contain only numbers');
});

test('Return error message the array is empty', () => {
  expect(analyze([])).toEqual('Array must contain only numbers');
});