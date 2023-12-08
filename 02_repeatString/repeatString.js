const repeatString = function(string, timesToRepeat) {

  let repeatedString = "";

  if (timesToRepeat < 0) return 'ERROR';

  for (let i = 1; i <= timesToRepeat; i++) {

    repeatedString += string;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
