function getAVG(arrayOfNumbers) {
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

module.exports = { getAVG };
