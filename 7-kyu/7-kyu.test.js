const {
  getAVG,
  replaceVocalWithPosition,
  convertArrayStringsToArrayNumbers,
  convertNumberToStringWords,
  getCenturyByYear,
} = require('./7-kyu');

/**
 * Función que devuelve la media de un array de números dado
 * 
 * Si el argumento no es un array. Devuelve 0.
 * Si dentro del array, algo no es un número, no se tiene en cuenta.
 */
it("getAVG", () => {
  expect(getAVG([1,3,6,2])).toEqual(3);
  expect(getAVG([1,1,1,1,1,1,1])).toEqual(1);
  expect(getAVG([1,'lol',3])).toEqual(2);
  expect(getAVG([1,'lol',null, null, 3])).toEqual(2);
  expect(getAVG(null)).toEqual(0);
  expect(getAVG([])).toEqual(0);
});

/**
 * Función que devuelve una frase con las vocales sustituidas por
 * sus respectivas posiciones en base a una frase dada
 * 
 * Si el argumento no es un string. Devuelve null.
 */
it("replaceVocalWithPosition", () => {
  expect(replaceVocalWithPosition('Programar es muy divertido')).toEqual('Pr3gr6m8r 11s m15y d19v21rt24d26');
  expect(replaceVocalWithPosition('Programar es MUY divertido')).toEqual('Pr3gr6m8r 11s M15Y d19v21rt24d26');
  expect(replaceVocalWithPosition(null)).toEqual(null);
  expect(replaceVocalWithPosition()).toEqual(null);
  expect(replaceVocalWithPosition(4242)).toEqual(null);
});

/**
 * Función que convierte un array de string en un array de números y lo retorna
 * 
 * Si el array no existe, se devuelve [0]
 * Si algún elemento no es un string, se añade como 0 al array de números
 */
it("convertArrayStringsToArrayNumbers", () => {
  expect(convertArrayStringsToArrayNumbers(["1", "2", "3"])).toEqual([1, 2, 3]);
  expect(convertArrayStringsToArrayNumbers()).toEqual([0]);
  expect(convertArrayStringsToArrayNumbers(null)).toEqual([0]);
  expect(convertArrayStringsToArrayNumbers([null, "2", "-3", "gofio"])).toEqual([0, 2, -3, 0]);
});

/**
 * Función que devuelve el siglo según un año dado
 * 
 * Si el argumento no es un número, se devuelve null
 */
it('getCenturyByYear', () => {
  expect(getCenturyByYear(1705)).toBe(18);
  expect(getCenturyByYear(1900)).toBe(19);
  expect(getCenturyByYear(1601)).toBe(17);
  expect(getCenturyByYear(2000)).toBe(20);
  expect(getCenturyByYear(2003)).toBe(21);
});


/**
 *  PRUEBA TECNICA:
 * 
 * Descripción:
 * Dado un número entero. Devuelve una string que contiene
 * la concatenación de las palabra, en inglés, de cada número
 * separados por un punto.
 * 
 * Ejemplo
 * Para el número 731, se obtiene 'seven.three.one'
 * 
 * Notas:
 *   - Se usará: zero, one, two, three, four, five, six, seven, eight, nine
 *   para representar: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
 *   - Si el argumento no es un número, se devuelve la cadena vacía
 *   - Si el número es negativo, se añade el prefijo: neg
 */
it("convertNumberToStringWords", () => {
  expect(convertNumberToStringWords(731)).toEqual('seven.three.one');
  expect(convertNumberToStringWords()).toEqual('');
  expect(convertNumberToStringWords('gofio')).toEqual('');
  expect(convertNumberToStringWords(null)).toEqual('');
  expect(convertNumberToStringWords(111)).toEqual('one.one.one');
  expect(convertNumberToStringWords(-52)).toEqual('neg.five.two');
});