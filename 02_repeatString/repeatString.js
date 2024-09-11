const repeatString = function(string, num) {
  let output = (num >= 0) ? '' : 'ERROR';

  for (let index = 0; index < num; index++) {
    output += string;
  }

  return output;
};

// Do not edit below this line
module.exports = repeatString;
