const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  return species.filter((element) => element.name === animal).map((element) => element.residents)
    .reduce((acc, curr) => acc[curr]).every((element) => element.age >= age);
}
module.exports = getAnimalsOlderThan;
