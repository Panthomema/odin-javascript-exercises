const removeFromArray = function(array, ...argsToRemove) {
  
  return array.filter(elem => !argsToRemove.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
