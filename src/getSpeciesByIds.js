const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  const parametro = [ids];
  const chaves = parametro.reduce((acc, crr) => acc[crr]);
  const objeto = [];
  const keys = (arr) => arr.forEach((elemento) => objeto
    .push(species.find((element) => element.id === elemento)));
  keys(chaves);
  return objeto;
}
module.exports = getSpeciesByIds;
