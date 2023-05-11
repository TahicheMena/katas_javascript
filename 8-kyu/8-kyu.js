function addKataToInput(input) {
  return `${input} kata`;
}

function basicCalculator(a, b, operator) {
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === '/') return a / b;
  if (operator === '*') return a * b;
}

function basicCalculatorWithValidation(a, b, operator = null) {
  if (typeof a !== 'number' || typeof b !== 'number') return null;
  switch (operator) {
    case '+':
    case '-':
    case '/':
    case '*':
      return basicCalculator(a, b, operator);
    default:
      return null;
  }
}

function converToEuro(a) {
  if (typeof a !== 'number') return '0.00€';
  const formated = a.toFixed(2);
  return `${formated}€`;
}

function abbreviateWords(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return null;
  if (a === '' || b === '') return null;
  return `${a[0]}.${b[0]}`;
}

function filterByWord(source, filter) {
  if (typeof source !== 'string') return null;
  if (typeof filter !== 'string') return null;
  return source.split(filter).join('');
}

function reverse(source) {
  if (typeof source !== 'string') return null;
  return source.split('').reverse().join('');
}

function filterAndReverse(source, filter, isReverse) {
  if (typeof source !== 'string' || typeof filter !== 'string' || typeof isReverse !== 'boolean') return null;
  const filtered = filterByWord(source, filter);
  if (isReverse) {
    return reverse(filtered);
  }
  return filtered;
}

function repeatWord(word, repeatNumber) {
  if (typeof word !== 'string' || typeof repeatNumber !== 'number') return null;
  const wordRepeated = [];
  for (let i = 0; i < repeatNumber; i++) {
    wordRepeated.push(word);
  }
  return wordRepeated.join('');
}

function isAllUpperCase(word) {
  if (typeof word !== 'string') return false;
  return (word === word.toUpperCase());
}

function replaceWordInSentence(sentence, patron, word) {
  if (typeof sentence !== 'string' || typeof patron !== 'string' || typeof word !== 'string') return null;
  if (patron === '') {
    return sentence;
  }
  return sentence.replace(patron, word);
}

function negativeNumber(number) {
  if (typeof number !== 'number') return null;
  if (number < 0) return number;
  return number * -1;
}

function largestExpression(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') return null;
  const expressions = [
    a + b + c,
    a * b * c,
    a + b * c,
    a * b + c,
    (a + b) * c,
    a * (b + c),
  ];
  return Math.max(...expressions);
}

function countNegativeNumbersInArray(array) {
  if (!Array.isArray(array)) return 0;

  let count = 0;

  for (const num of array) {
    if (typeof num === 'number' && num < 0) {
      count++;
    }
  }

  return count;
}

function isPalindrome(word) {
  if (typeof word !== 'string') return false;

  const lowerCaseWord = word.toLowerCase();
  const reversedWord = lowerCaseWord.split('').reverse().join('');

  return lowerCaseWord === reversedWord;
}

function sumNumbersInArray(array) {
  if (!Array.isArray(array)) return 0;
  let sum = 0;

  for (const num of array) {
    if (typeof num === 'number') {
      sum += num;
    }
  }

  return sum;
}

function getHelloWorld() {
  return 'Hello World';
}

function getStringByCondition(condition) {
  if (condition) {
    return 'La condición es verdadera';
  }
  return 'La condición es falsa';
}

function sumNumbersToFinalNumber(number) {
  if (typeof number !== 'number' || number <= 0) return 0;

  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}

  
module.exports = {
  addKataToInput, basicCalculator, basicCalculatorWithValidation, converToEuro,
  abbreviateWords, filterByWord, reverse, filterAndReverse, repeatWord, isAllUpperCase,
  replaceWordInSentence, negativeNumber, largestExpression, countNegativeNumbersInArray,
  isPalindrome, sumNumbersInArray, getHelloWorld, getStringByCondition, sumNumbersToFinalNumber,
};