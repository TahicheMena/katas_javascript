function getHelloWorld() {
  return "Hello World";
}

function getStringByCondition(condition) {
  if (condition) {
    return "La condición es verdadera";
  } else {
    return "La condición es falsa";
  }
}

function addKataToInput(sentence) {
  return `${sentence} kata`;
}

function basicCalculator(number1, number2, operation) {
  switch (operation) {
    case "+":
      return number1 + number2;
      break;
    case "-":
      return number1 - number2;
      break;
    case "/":
      return number1 / number2;
      break;
    case "*":
      return number1 * number2;
      break;
  }
}

function negativeNumber(number) {
  if (typeof number !== "number") {
    return null;
  }
  if (number < 0) {
    return number;
  }
  return number * -1;
}

function basicCalculatorWithValidation(number1, number2, operation) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return null;
  }
  if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "/" &&
    operation !== "*"
  ) {
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
    if (typeof array[i] === "number") {
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
    if (typeof array[i] === "number" && array[i] < 0) {
      result += 1;
    }
  }
  return result;
}

function converToEuro(price) {
    let priceConvertToString = Number.parseFloat(price).toFixed(2);
    if (typeof price !== "number") {
      return "0.00€";
    }
    return priceConvertToString + "€";
}

function abbreviateWords(word1, word2) {
  if (word1 === '' 
    || typeof word1 !== 'string' 
    || word2 === ''
    || typeof word2 !== 'string') {
       return null;
    }
  return `${word1[0]}.${word2[0]}`
} 

function abbreviateWords(word1, word2) {

  if (

    word1 === "" ||

    typeof word1 !== "string" ||

    word2 === "" ||

    typeof word2 !== "string"

  ) {

    return null;

  }

  return `${word1[0]}.${word2[0]}`;

}

// function filterByWord(phrase, word) {
//   if (typeof phrase !== "string" || typeof word !== "string") {
//     return null;
//   }

//   return phrase.split(word).join("");
// }


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
}
