const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  divide: (x, y) => {
    if (y === 0) {
      return 'Can\'t divide by zero';
    }
    return x / y;
  },
  multiply: (x, y) => x * y,
};

export default calculator;