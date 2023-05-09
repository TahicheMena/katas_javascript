const {
  addKataToInput,
  basicCalculator,
  basicCalculatorWithValidation,
  converToEuro,
  abbreviateWords,
  filterByWord,
  reverse,
  filterAndReverse,
  repeatWord,
  isAllUpperCase,
  replaceWordInSentence,
  negativeNumber,
} = require('./8-kyu');

/**
 * Función que añade la palabra ' kata' al final de la la frase
 * que se le pase como argumento
 */
it("addKataToInput", () => {
  expect(addKataToInput("super")).toEqual("super kata");
  expect(addKataToInput("estoy haciendo un")).toEqual("estoy haciendo un kata");
  expect(addKataToInput("")).toEqual(" kata");
});

/**
 * Función calculadora básica que devuelve el resultado
 * de la operación entre dos números según los argumentos:
 * (número 1, número 2, operación)
 * 
 */
it("basicCalculator", () => {
  expect(basicCalculator(2,  4, '+')).toEqual(6);
  expect(basicCalculator(6, 5, '-') ).toEqual(1);
  expect(basicCalculator(12, 3, '/')).toEqual(4);
  expect(basicCalculator(3, 4, '*') ).toEqual(12);
});

/**
 * Función que devuelve el negativo de un número dado.
 * 
 * Si el número es negativo, se devuelve el mismo
 * Si el argumento no es de tipo number, se devuelve null
 * 
 */
it("negativeNumber", () => {
  expect(negativeNumber(2)).toEqual(-2);
  expect(negativeNumber(0)).toEqual(-0);
  expect(negativeNumber(-34)).toEqual(-34);
  expect(negativeNumber(107.99)).toEqual(-107.99);
  expect(negativeNumber()).toEqual(null);
  expect(negativeNumber('loco')).toEqual(null);
  expect(negativeNumber(null)).toEqual(null);
});

/**
 * Función calculadora básica que devuelve el resultado
 * de la operación entre dos números según los argumentos:
 * (número 1, número 2, operación)
 * 
 * Si alguno de los dos primeros argumentos no son números, devuelve null
 * Si la operación no es una de la válidas (+, -, /, *), devuelve null
 */
it("basicCalculatorWithValidation", () => {
  expect(basicCalculatorWithValidation(2,  4, '+')).toEqual(6);
  expect(basicCalculatorWithValidation(6, 5, '-') ).toEqual(1);
  expect(basicCalculatorWithValidation(12, 3, '/')).toEqual(4);
  expect(basicCalculatorWithValidation(3, 4, '*') ).toEqual(12);
  expect(basicCalculatorWithValidation(12, 'loco', '/')).toEqual(null);
  expect(basicCalculatorWithValidation(null, 4, '*') ).toEqual(null);
  expect(basicCalculatorWithValidation(3, 4, '%') ).toEqual(null);
  expect(basicCalculatorWithValidation(3, 4) ).toEqual(null);
});

/**
 * Función que devuelve una string con formato moneda (x.xx€)
 * según el número dado.
 * 
 * En caso de que el argumento no sea un número. Devuelve 0.00€
 */
it("converToEuro", () => {
  expect(converToEuro(103)).toEqual('103.00€');
  expect(converToEuro(2)).toEqual('2.00€');
  expect(converToEuro(12.2359)).toEqual('12.24€');
  expect(converToEuro(1.4)).toEqual('1.40€');
  expect(converToEuro('pepe')).toEqual('0.00€');
  expect(converToEuro()).toEqual('0.00€');
  expect(converToEuro(null)).toEqual('0.00€');
});

/**
 * Función que abrevia dos palabras con sus iniciales separados
 * por un punto.
 * 
 * En caso de que alguno de los argumentos no sea un string o
 * en caso de que alguno de los argumentos sea la string vacía
 * Devuelve null
 */
it("abbreviateWords", () => {
  expect(abbreviateWords('Tahiche G.', 'María')).toEqual('T.M');
  expect(abbreviateWords(34, 'María')).toEqual(null);
  expect(abbreviateWords('', 'Leech')).toEqual(null);
  expect(abbreviateWords('', '')).toEqual(null);
  expect(abbreviateWords('Tahiche', 48)).toEqual(null);
  expect(abbreviateWords('Tahiche')).toEqual(null);
  expect(abbreviateWords(null, 'María')).toEqual(null);
});

/**
 * Función que filtra una frase según la palabra dada
 * 
 * En caso de que la frase no sea tipo string. Devuelve null
 * En caso de que el filtro no sea tipo string. Devuelve null
 */
it("filterByWord", () => {
  expect(filterByWord('Tahiche G.', 'a')).toEqual('Thiche G.');
  expect(filterByWord(34)).toEqual(null);
  expect(filterByWord()).toEqual(null);
  expect(filterByWord('', '')).toEqual('');
  expect(filterByWord(null)).toEqual(null);
  expect(filterByWord('Tahiche G.', null)).toEqual(null);
  expect(filterByWord('Tahiche G.')).toEqual(null);
  expect(filterByWord('Tahiche G.', 5)).toEqual(null);
});

/**
 * Función que invierte una palabra dada por argumento
 * 
 * En caso de que el argumento no sea un string. Devuelve null
 */
it("reverse", () => {
  expect(reverse('hola')).toEqual('aloh');
  expect(reverse('Wow')).toEqual('woW');
  expect(reverse(34)).toEqual(null);
  expect(reverse()).toEqual(null);
  expect(reverse('')).toEqual('');
  expect(reverse(null)).toEqual(null);
});

/**
 * Función que, dado una palabra, filtra esa palabra según el argumento de filtrado
 * Invierte la palabra filtrada, en caso de que se le indique mediante un argumento
 * booleano.
 * 
 * En caso de que el argumento no sea un string. Devuelve null
 * En caso de que el filtro no sea un string. Devuelve null
 * En caso de que el flag de invertir no sea una booleano. Devuelve null
 */
it("filterAndReverse", () => {
  expect(filterAndReverse('Tahiche G.', 'a', false)).toEqual('Thiche G.');
  expect(filterAndReverse(34)).toEqual(null);
  expect(filterAndReverse()).toEqual(null);
  expect(filterAndReverse('', '', false)).toEqual('');
  expect(filterAndReverse(null)).toEqual(null);
  expect(filterAndReverse('hola', '', true)).toEqual('aloh');
  expect(filterAndReverse('hola', 3, true)).toEqual(null);
  expect(filterAndReverse('Wow', 'o', true)).toEqual('wW');
  expect(filterAndReverse('hola', 'o', 23)).toEqual(null);
  expect(filterAndReverse('hola', 'o')).toEqual(null);
  expect(filterAndReverse('hola', 'o', null)).toEqual(null);
});

/**
 * Función que devuelve una string compuesta de una frase dada
 * repetida n veces, según número dado
 * 
 * En caso de que el argumento frase no sea un string. Devuelve null
 * En caso de que el argumento número no sea un número. Devuelve null
 */
it("repeatWord", () => {
  expect(repeatWord('hola', 1)).toEqual('hola');
  expect(repeatWord('hola', 4)).toEqual('holaholaholahola');
  expect(repeatWord('hola', 0)).toEqual('');
  expect(repeatWord(' ', 2)).toEqual('  ');
  expect(repeatWord('', 3)).toEqual('');
  expect(repeatWord(34)).toEqual(null);
  expect(repeatWord()).toEqual(null);
  expect(repeatWord('hola')).toEqual(null);
  expect(repeatWord('hola', null)).toEqual(null);
});

/**
 * Función que indica si todos los carácteres de una palabra están en mayúsculas
 * 
 * En caso de que el argumento no sea un string. Devuelve false
 */
it("isAllUpperCase", () => {
  expect(isAllUpperCase('hola')).toBeFalsy();
  expect(isAllUpperCase('HOLA')).toBeTruthy();
  expect(isAllUpperCase('')).toBeTruthy();
  expect(isAllUpperCase()).toBeFalsy();
  expect(isAllUpperCase(null)).toBeFalsy();
  expect(isAllUpperCase(345)).toBeFalsy();
});

/**
 * Función que sustituye un patrón, por una palabra dada, en una frase
 * 
 * En caso de que la frase, el patrón o la palabra no sean un string. Devuelve null
 * Si el patrón es cadena vacía. Devuelve la frase original
 */
it("replaceWordInSentence", () => {
  expect(replaceWordInSentence('¿Hola <name>, que tal llevas las clases?', '<name>', 'Tahiche')).toEqual('¿Hola Tahiche, que tal llevas las clases?');
  expect(replaceWordInSentence('Esto es un mensaje de <company>:', '<company>', 'Tahi Evil Corp.')).toEqual('Esto es un mensaje de Tahi Evil Corp.:');
  expect(replaceWordInSentence('¿Hola <name>, que tal llevas las clases?', '', 'Tahiche')).toEqual('¿Hola <name>, que tal llevas las clases?');
  expect(replaceWordInSentence('¿Hola <name>, que tal llevas las clases?', null, 'Tahiche')).toEqual(null);
  expect(replaceWordInSentence('¿Hola <name>, que tal llevas las clases?', '<name>', 23)).toEqual(null);
  expect(replaceWordInSentence('', '<name>', 'Tahiche')).toEqual('');
  expect(replaceWordInSentence(null, '<name>', 'Tahiche')).toEqual(null);
  expect(replaceWordInSentence()).toEqual(null);
});