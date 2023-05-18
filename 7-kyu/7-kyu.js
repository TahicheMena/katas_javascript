function getAVG(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers)) {
    return 0;
  }
  if (arrayOfNumbers.length === 0) {
    return 0;
  }

  let avg;
  let sumNumbers = 0;
  let countNumbers = 0;

  for (const number of arrayOfNumbers) {
    if (typeof number === 'number') {
      sumNumbers += number;
      countNumbers++;
    }
  }
  avg = sumNumbers / countNumbers;

  return avg;
}

function getAVGAdvanced(arrayOfNumbers) {
  if (!Array.isArray(arrayOfNumbers) || arrayOfNumbers.length === 0) {
    return 0;
  }
  let sum = 0;

  const arrayOfRealNumbers = arrayOfNumbers.filter((number) => typeof number === 'number');
  arrayOfRealNumbers.forEach((number) => {
    sum += number;
  });

  return sum / arrayOfRealNumbers.length;
}

module.exports = { getAVG, getAVGAdvanced };
