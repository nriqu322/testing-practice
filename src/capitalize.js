const capitalize = (string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  const capitilized = string[0].toUpperCase() + string.slice(1);
  return capitilized;
};

export default capitalize;