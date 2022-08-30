const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;
function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.filter((element) =>
    element.id === id);
  const firstAnimal = findEmployee.find((element) => element).responsibleFor[0];
  const animalsById = species.filter((element) => element.id === firstAnimal);
  const { residents } = animalsById[0];
  const oldestAnimal = residents.reduce((age1, age2) => (age1.age > age2.age ? age1 : age2));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
