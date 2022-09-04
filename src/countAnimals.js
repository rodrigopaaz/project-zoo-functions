const data = require('../data/zoo_data');

const { species } = data;
/* const all = species.filter((element) => element.name).map((element) => element.residents); */
const names = species
  .filter((element) => element.name)
  .map((element) => element.name);

const animais = (...parametro) => {
  const animals = species.find(
    (element) => element.name === parametro[0].specie,
  ).residents;
  const genero = animals.filter((element) => element.sex === parametro[0].sex);
  return Object.keys(parametro[0]).length === 1
    ? animals.length
    : genero.length;
};

const allAnimals = (...parametro) => {
  const retorno = parametro.reduce((acc, atual) => {
    acc[atual] = animais({ specie: atual });
    return acc;
  }, {});
  return retorno;
};

function countAnimals(animal = '') {
  return animal.length <= 0 ? allAnimals(...names) : animais(animal);
}
console.log(names);
module.exports = countAnimals;
