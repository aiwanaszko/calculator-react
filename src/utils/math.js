export const evaluate = (input) => {
  const trimmedInput = input.trim();
  const splittedInput = trimmedInput.split(/([+-])/);
  const startsWithNegativeNumber = splittedInput[0] === "";
  const firstNumberIndex = startsWithNegativeNumber ? 2 : 0;
  let result = startsWithNegativeNumber
    ? parseFloat(splittedInput[firstNumberIndex]) * -1
    : parseFloat(splittedInput[firstNumberIndex]);

  for (let i = firstNumberIndex + 1; i < splittedInput.length - 1; i++) {
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
  return parseFloat(input.toFixed(6));
};
