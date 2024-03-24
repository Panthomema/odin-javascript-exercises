const fibonacci = function(pos) {
  if (pos < 0) return 'OOPS';

  const fib = [0, 1];

  for (let i = 2; i <= pos; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib[pos];
};

// Do not edit below this line
module.exports = fibonacci;
