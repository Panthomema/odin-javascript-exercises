const palindromes = function (str) {
  const processedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return processedString === [...processedString].reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
