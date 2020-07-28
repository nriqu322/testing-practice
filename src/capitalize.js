const capitalize = (string) => {
  const capitilized = string[0].toUpperCase() + string.slice(1);
  return capitilized;
};

export default capitalize;