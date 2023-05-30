const {
  getAVG,
  replaceVocalWithPosition,
  convertArrayStringsToArrayNumbers,
  convertNumberToStringWords,
  getCenturyByYear,
  buildArray,
  findDuplicates,
  removeValues,
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
 * Función que devuelve un array con los elementos que no estén contenidos en el segundo array dado
 * 
 * Si el array origen no es de tipo array, se devuelve array vacio
 * Si el segundo array no es de tipo array, se devuelve el primer array
 */
it('removeValues', () => {
  expect(removeValues([1, 1, 2, 3, 1, 2, 3, 4], [1, 3])).toEqual([2, 2, 4]);
  expect(removeValues([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2])).toEqual([5, 6, 7, 8]);
  expect(removeValues([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3])).toEqual([8, 7, 6, 5, 1]);
  expect(removeValues(null, [2, 4, 3])).toEqual([]);
  expect(removeValues([1, 1, 2, 3, 1, 2, 3, 4], null)).toEqual([1, 1, 2, 3, 1, 2, 3, 4]);
});

/**
 * Función que dado un número (n) y dos argumentos (value1, value2).
 * Devuelve un array de longitud n cuyo contenido es los arg1 y arg2 repetidos
 * alternativamente
 * 
 * Si el número dado, no es de tipo numérico se devuelve array vacío
 */
it('buildArray', () => {
  expect(buildArray(5, true, false)).toEqual([true, false, true, false, true]);
  expect(buildArray(10, 'blue', 'red')).toEqual(['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']);
  expect(buildArray(0, 'one', 'two')).toEqual([]);
  expect(buildArray('cuatro', 'one', 'two')).toEqual([]);
});

/**
 * Función que devuelve un array en base a los elementos duplicados que existen el array dado
 * 
 * En caso de que el array de entrada no sea de tipo array, se devuelve []
 */
it('findDuplicates', () => {
  expect(findDuplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])).toEqual([4, 3, 1]);
  expect(findDuplicates([0, 1, 2, 3, 4, 5])).toEqual([]);
  expect(findDuplicates(['a', 'b', 'c', 'c', 'b', 'a', 'a'])).toEqual(['c', 'b', 'a']);
  expect(findDuplicates([true, false, true, false, true, true])).toEqual([true, false]);
  expect(findDuplicates()).toEqual([]);
  expect(findDuplicates(null)).toEqual([]);
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