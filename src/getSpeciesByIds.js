const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  return species.filter((element) => element.id === '0938aa23-f153-4937-9f88-4858b24d6bce')
  .map((element) => element.residentes);
}

module.exports = getSpeciesByIds;

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
