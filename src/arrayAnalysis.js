const analyze = (array) => {
  if (array.length === 0 || array.some(ele => typeof ele === 'string')) {
    return 'Array must contain only numbers';
  }
  const { length } = array;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const getAverage = (arr) => arr.reduce((acc, n) => acc + n, 0) / length;
  const average = getAverage(array);
  return {
    average, min, max, length,
  };
};

export default analyze;