const { sum, numArgs, getEight } = require('./9-kyu');

/**
 * Función que suma dos números dados por argumentos
 */
it("sum", () => {
  expect(sum(2, 3)).toEqual(5);
  expect(sum(33, 10)).toEqual(43);
  expect(sum(14, 56)).toEqual(70);
});

/**
 * Función que devuelve el número de argumentos
 */
it("numArgs", () => {
  expect(numArgs()).toEqual(0);
  expect(numArgs("foo")).toEqual(1);
  expect(numArgs("foo", "bar")).toEqual(2);
  expect(numArgs(true, false)).toEqual(2);
  expect(numArgs({})).toEqual(1);
});

/**
 * Función que siempre devuelve el número 8
 * No se puede usar ningúno de estos carácteres (incluidos números): 0123456789*+-/
 */
it("getEight", () => {
  expect(getEight()).toEqual(8);
  expect(getEight(null)).toEqual(8);
  expect(getEight('what')).toEqual(8);
  expect(getEight(10)).toEqual(8);
});