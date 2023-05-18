function getHelloWorld() {
  return 'Hello World';
}

function getStringByCondition(condition) {
  if (condition) {
    return 'La condición es verdadera';
  }
  return 'La condición es falsa';
}

function addKataToInput(sentence) {
  const subfix = ' kata';
  return `${sentence}${subfix}`;
}

function basicCalculator(number1, number2, operation) {
  if (operation === '+') {
    return number1 + number2;
  }
  if (operation === '-') {
    return number1 - number2;
  }
  if (operation === '/') {
    return number1 / number2;
  }
  if (operation === '*') {
    return number1 * number2;
  }
}

function negativeNumber(number) {
  if (typeof number !== 'number') {
    return null;
  }
  if (number < 0) {
    return number;
  }
  return number * -1;
}

function basicCalculatorWithValidation(number1, number2, operation) {
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    return null;
  }
  if (operation !== '+' && operation !== '-' && operation !== '/' && operation !== '*') {
    return null;
  }
  return basicCalculator(number1, number2, operation);
}

function sumNumbersInArray(array) {
  let result = 0;

  if (!Array.isArray(array)) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      result += array[i];
    }
  }

  return result;
}

function countNegativeNumbersInArray(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (typeof number === 'number' && number < 0) {
      result += 1;
    }
  }
  return result;
}

function converToEuro(number) {
  if (typeof number !== 'number') {
    return '0.00€';
  }
  return `${number.toFixed(2)}€`;
}

function abbreviateWords(word1, word2) {
  if (word1 === '' || typeof word1 !== 'string' || word2 === '' || typeof word2 !== 'string') {
    return null;
  }

  return `${word1[0]}.${word2[0]}`;
}

function filterByWord(phrase, word) {
  if (typeof phrase !== 'string' || typeof word !== 'string') {
    return null;
  }

  return phrase.split(word).join('');
}

function reverse(word) {
  if (typeof word !== 'string') {
    return null;
  }

  // Versión corta
  return word.split('').reverse().join('');
}

function isAllUpperCase(word) {
  if (typeof word !== 'string') {
    return false;
  }
  return word === word.toUpperCase();
}

function isPalindrome(word) {
  if (typeof word !== 'string') {
    return false;
  }
  const wordReverse = reverse(word);
  if (word.toLowerCase() === wordReverse.toLowerCase()) {
    return true;
  }
  return false;
}

function filterAndReverse(phrase, filter, bool) {
  if (typeof phrase !== 'string') {
    return null;
  }

  if (typeof filter !== 'string') {
    return null;
  }

  if (typeof bool !== 'boolean') {
    return null;
  }

  const phraseFilter = filterByWord(phrase, filter);

  if (bool === true) {
    return reverse(phraseFilter);
  }

  return phraseFilter;
}

function repeatWord(word, number) {
  if (typeof word !== 'string' || typeof number !== 'number') {
    return null;
  }

  let repeatedWord = '';

  for (let i = 0; i < number; i++) {
    repeatedWord += word;
  }

  return repeatedWord;
}

function replaceWordInSentence(sentence, pattern, value) {

  if (typeof sentence !== 'string' || typeof pattern !== 'string' || typeof value !== 'string') {
    return null;
  }
  
  if (pattern === '') {
    return sentence;
  }
  let replaceSentence = sentence.replace(pattern, value);

  return replaceSentence;
}

function sumNumbersToFinalNumber(number) {

  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}

function largestExpression(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return null;
  }
  let max = -Infinity;

  const operation1 = a * (b + c);
  const operation2 = a * b * c;
  const operation3 = a + b * c;
  const operation4 = (a + b) * c;
  const operation5 = a * b + c;
  const operation6 = a + b + c;

  const operations = [operation1, operation2, operation3, operation4, operation5, operation6];

  for (const operation of operations) {
    if (operation > max) {
      max = operation;
    }
  }

  return max;
}

function largestExpressionAdvance(a, b, c) {

  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') return null;
  
  const operations = [
    a * (b + c),
    a * b * c,
    a + b * c,
    (a + b) * c,
    a * b + c,
    a + b + c,
  ];

  return Math.max(...operations);
}

module.exports = {
  getHelloWorld,
  getStringByCondition,
  addKataToInput,
  basicCalculator,
  negativeNumber,
  basicCalculatorWithValidation,
  sumNumbersInArray,
  countNegativeNumbersInArray,
  converToEuro,
  abbreviateWords,
  filterByWord,
  reverse,
  isAllUpperCase,
  isPalindrome,
  repeatWord,
  filterAndReverse,
  replaceWordInSentence,
  sumNumbersToFinalNumber,
  largestExpression,
  largestExpressionAdvance,
};
