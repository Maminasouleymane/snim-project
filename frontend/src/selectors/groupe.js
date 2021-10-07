export default (data, { text = "GR3" }) => {
  return data.filter((obj) => {
    const textMatch = obj.numero;
    return textMatch === text;
  });
};
