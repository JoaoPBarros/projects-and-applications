/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { animals, employees, prices, hours } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return ids ? animals.filter(animal => ids.find(id => animal.id === id)) : undefined;
}

function animalsOlderThan(animal, age) {
  return animals.find(({ name }) => (name === animal))
    .residents.every(oltherThan => oltherThan.age >= age);

  // base de modelagem
  // const animalFilter = data.animals.find(typeName => typeName.name === animal);
  // const ageAnimalFilter = animalFilter.residents.every(oltherThan => oltherThan.age >= age);
  // return ageAnimalFilter;
}

function employeeByName(employeeName) {
  const findEmployeeName = employees.find(({ firstName, lastName }) => (
    firstName === employeeName || lastName === employeeName));
  return employeeName ? findEmployeeName : {};
}

function createEmployee(personalInfo, associatedWith) {
  const newObject = {};
  Object.assign(newObject, personalInfo, associatedWith);
  return newObject;
}

function isManager(id) {
  return employees.some(({ managers }) =>
  (managers.some(manager => manager === id)));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const numberOfSpecies = {};
  animals.forEach(({ name, residents }) => (numberOfSpecies[name] = residents.length));
  return species ? numberOfSpecies[species] : numberOfSpecies;
}

function entryCalculator(entrants) {
  return entrants ? Object.keys(entrants)
  .reduce((sum, key) => (sum += (entrants[key] * prices[key])), 0) : 0;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const returnableObj = {};
  Object.keys(hours).forEach((day) => {
    if (day !== 'Monday') {
      returnableObj[day] =
      `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
    } else { returnableObj[day] = 'CLOSED'; }
  });
  return dayName ? { [dayName]: returnableObj[dayName] } : returnableObj;
}

console.log(schedule('Monday'));

function oldestFromFirstSpecies(identity) {
  const findEmployee = employees.find(({ id }) => identity === id);
  const findSpecie = findEmployee.responsibleFor[0];
  const findInListAnimals = animals.find(({ id }) => findSpecie === id);
  const findOldestAnimal = findInListAnimals.residents
    .reduce((older, newprobablyOlder) =>
    (older.age <= newprobablyOlder.age ?
      newprobablyOlder
      : older));
  return Object.values(findOldestAnimal);
}

function increasePrices(percentage) {
  Object.keys(prices).forEach(price => (prices[price] = Math
    .ceil(prices[price] * (100 + percentage)) / 100));
  return prices;
}

// console.log(increasePrices(50));

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
