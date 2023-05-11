function sum(a,b) {
  return a + b;
}

function numArgs() {
  return arguments.length;
}

function getEight() {
  const word = 'frontend';
  return word.length;
}
  
module.exports = { sum, numArgs, getEight };