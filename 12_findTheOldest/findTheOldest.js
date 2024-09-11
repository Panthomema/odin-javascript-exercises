const findTheOldest = function(peopleArr) {
  return peopleArr.sort((a, b) => getAge(b) - getAge(a))[0];
};

const getAge = function(person) {
  return (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
}

// Do not edit below this line 
module.exports = findTheOldest;
