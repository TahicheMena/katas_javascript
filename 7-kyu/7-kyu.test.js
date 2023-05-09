const {
  getAVG,
  replaceVocalWithPosition,
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