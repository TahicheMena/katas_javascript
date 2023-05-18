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
  largestExpression,
  countNegativeNumbersInArray,
  isPalindrome,
  sumNumbersInArray,
  getHelloWorld,
  getStringByCondition,
  sumNumbersToFinalNumber,
} = require('./8-kyu');

/**
 * Función que devuelve la palabra Hello World
 */
it("getHelloWorld", () => {
  expect(getHelloWorld()).toEqual("Hello World");
});

/**
 * Función que devuelve una frase indicando si la condición es
 * verdadera o falsa
 */
it("getStringByCondition", () => {
  expect(getStringByCondition(true)).toEqual("La condición es verdadera");
  expect(getStringByCondition(false)).toEqual("La condición es falsa");
});

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
 * Función que suma todos los números en un array dado.
 * 
 * En caso de que un elemento no seá un número. Se ignora.
 */
it("sumNumbersInArray", () => {
  expect(sumNumbersInArray([2,4,-7,1])).toEqual(0);
  expect(sumNumbersInArray([2,-4,-7,-23])).toEqual(-32);
  expect(sumNumbersInArray([1,-4,'gofio',1])).toEqual(-2);
  expect(sumNumbersInArray([2,null,'gofio',2])).toEqual(4);
  expect(sumNumbersInArray([])).toEqual(0);
  expect(sumNumbersInArray(null)).toEqual(0);
  expect(sumNumbersInArray()).toEqual(0);
});

/**
 * Función que devuelve la cantidad de números negativos que hay en
 * un array.
 * 
 * En caso de que un elemento no seá un número. Se ignora.
 */
it("countNegativeNumbersInArray", () => {
  expect(countNegativeNumbersInArray([2,4,-7,23])).toEqual(1);
  expect(countNegativeNumbersInArray([2,-4,-7,-23])).toEqual(3);
  expect(countNegativeNumbersInArray([2,-4,'gofio',23])).toEqual(1);
  expect(countNegativeNumbersInArray([2,null,'gofio',23])).toEqual(0);
  expect(countNegativeNumbersInArray([])).toEqual(0);
  expect(countNegativeNumbersInArray()).toEqual(0);
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
 * Función que indica si todos los carácteres de una palabra están en mayúsculas
 * 
 * En caso de que el argumento no sea un string. Devuelve false
 * Pista: toUpperCase()
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
 * Función que indica si la palabra dada es palíndromo.
 * Es decir, que se lee igual de derecha a izquierda y vicebersa
 * 
 * En caso de que el argumento no sea un string. Devuelve false
 * Pista: Usar toLowerCase()
 */
it("isPalindrome", () => {
  expect(isPalindrome('hola')).toBeFalsy();
  expect(isPalindrome('Wow')).toBeTruthy();
  expect(isPalindrome('')).toBeTruthy();
  expect(isPalindrome('ana')).toBeTruthy();
  expect(isPalindrome(33)).toBeFalsy();
  expect(isPalindrome()).toBeFalsy();
  expect(isPalindrome(null)).toBeFalsy();
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

/**
 * Función que devuelve la sumatoria de los números desde 1 hasta el
 * número dado
 * 
 * En caso de que el argumento no sea un número, devuelve 0
 * En caso de que el número sea negativo, devuelve 0
 * 
 */
it("sumNumbersToFinalNumber", () => {
  expect(sumNumbersToFinalNumber(2)).toEqual(3);
  expect(sumNumbersToFinalNumber(8)).toEqual(36);
  expect(sumNumbersToFinalNumber(-3)).toEqual(0);
  expect(sumNumbersToFinalNumber()).toEqual(0);
  expect(sumNumbersToFinalNumber('gofio')).toEqual(0);
  expect(sumNumbersToFinalNumber(null)).toEqual(0);
});
/**
 *  PRUEBA TECNICA:
 * 
 * Descripción
 * Dado tres números enteros a, b y c, devuelve el número más grande obtenido después de insertar los siguientes operadores y paréntesis: +, , ()
 * En otras palabras, prueba todas las combinaciones posibles de a, b y c con [+()], y devuelve el máximo obtenido (lee las notas para más detalles).
 * 
 * Ejemplo
 * Con los números 1, 2 y 3, aquí tienes algunas formas de colocar los signos y paréntesis:
 * 
 * 1 * (2 + 3) = 5
 * 1 * 2 * 3 = 6
 * 1 + 2 * 3 = 7
 * (1 + 2) * 3 = 9
 * 
 * Entonces, el valor máximo que puedes obtener es 9.
 * 
 * Notas:
 *   - En caso de que alguno de los argumentos no sea númerico. Se devuelve null
 *   - No puedes intercambiar los operandos. Por ejemplo, en el ejemplo dado no puedes obtener la expresión (1 + 3) * 2 = 8.
 */
it("largestExpression", () => {
  expect(largestExpression(1, 2, 3)).toEqual(9);
  expect(largestExpression(2, 3, 4)).toEqual(24);
  expect(largestExpression(5, 5, 5)).toEqual(125);
  expect(largestExpression(1, 1, 1)).toEqual(3);
  expect(largestExpression('gofio', 2, 3)).toEqual(null);
  expect(largestExpression(1, -10, 1)).toEqual(-8);
  expect(largestExpression(-1, 2, 3)).toEqual(5);
  expect(largestExpression(1, -2, 3)).toEqual(2);
  expect(largestExpression(-1, -2, -3)).toEqual(9);
});