function getAVG(numbers) {
  if (!Array.isArray(numbers)) return 0;
  let countNumbers = 0;
  let valueNumbers = 0;
  for (const number of numbers) {
    if (typeof number === 'number') {
      countNumbers++;
      valueNumbers += number;
    }
  }
  if (countNumbers === 0) return 0;
  return valueNumbers / countNumbers;
}

function replaceVocalWithPosition(sentence) {
  if (typeof sentence !== 'string') return null;

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (vowels.includes(char.toLowerCase())) {
      result += (i + 1).toString();
    } else {
      result += char;
    }
  }
  return result;
}

function convertArrayStringsToArrayNumbers(arrayStrings) {
  if (!arrayStrings) {
    return [0];
  }

  const arrayNumbers = [];
  for (const string of arrayStrings) {
    const number = parseInt(string);
    arrayNumbers.push(isNaN(number) ? 0 : number);
  }
  return arrayNumbers;
}

function convertNumberToStringWords(number) {
  if (typeof number !== 'number') return '';

  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const isNegative = number < 0;
  const absNumber = Math.abs(number);
  const digits = String(absNumber).split('');
  const result = [];

  for (const digitStr of digits) {
    const digit = parseInt(digitStr);
    if (isNaN(digit)) {
      return '';
    }
    result.push(words[digit]);
  }

  if (isNegative) {
    result.unshift('neg');
  }

  return result.join('.');
}

function getCenturyByYear(year) {
  if (typeof year !== 'number') return null;
  return Math.ceil(year / 100);
}

module.exports = {
  getAVG,
  replaceVocalWithPosition,
  convertArrayStringsToArrayNumbers,
  convertNumberToStringWords,
  getCenturyByYear,
};
