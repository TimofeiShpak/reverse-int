module.exports = function reverse (n) {
  n = Math.abs(n);
  return Number((''+n).split('').reverse().join(''));
}
