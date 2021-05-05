export const evaluate = (input) => {
  const trimmedInput = input.trim();
  const splittedInput = trimmedInput.split(/([+-])/);
  let result = parseFloat(splittedInput[0]);

  for (let i = 1; i < splittedInput.length - 1; i++) {
    const operator = splittedInput[i];

    if (operator === "+") {
      result += parseFloat(splittedInput[i + 1]);
    } else if (operator === "-") {
      result -= parseFloat(splittedInput[i + 1]);
    }
  }

  return parseFloat(result);
};

export const round = (input) => {
  return input.toFixed(6);
};
