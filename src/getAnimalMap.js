const data = require('../data/zoo_data');

const { species } = data;
const locationSE = species
  .filter((element) => element.location.includes('SE'))
  .map((element) => element.name);
const locationNE = species
  .filter((element) => element.location.includes('NE'))
  .map((element) => element.name);
const locationNW = species
  .filter((element) => element.location.includes('NW'))
  .map((element) => element.name);
const locationSW = species
  .filter((element) => element.location.includes('SW'))
  .map((element) => element.name);

const animais = (parametro) => {
  const animals = species.find((element) =>
    element.name.includes(parametro)).residents;
  const animalsNamed = animals.map((element) => element.name);
  return animalsNamed;
};

const animaisSex = (parametro) => {
  const animals = species.find((element) =>
    element.name.includes(parametro)).residents;
  const animalsNamed = animals
    .filter((element) => element.sex === 'female')
    .map((element) => element.name);
  return animalsNamed;
};

const animalsBySex = (parametro) => {
  const retorno = parametro.reduce((acc, atual) => {
    acc[atual] = { [atual]: animaisSex(atual) };
    return acc;
  }, {});
  return retorno;
};

const animalsBySexFiltered = (parametro) => {
  const retorno = parametro.reduce((acc, atual) => {
    acc[atual] = { [atual]: animaisSex(atual).sort() };
    return acc;
  }, {});
  return retorno;
};

const allAnimals = (parametro) => {
  const retorno = parametro.reduce((acc, atual) => {
    acc[atual] = { [atual]: animais(atual) };
    return acc;
  }, {});
  return retorno;
};
const filtered = (parametro) => {
  const retorno = parametro.reduce((acc, atual) => {
    acc[atual] = { [atual]: animais(atual).sort() };
    return acc;
  }, {});
  return retorno;
};

const resultadoFinal = () => ({
  NE: Object.values(allAnimals(locationNE)),
  NW: Object.values(allAnimals(locationNW)),
  SE: Object.values(allAnimals(locationSE)),
  SW: Object.values(allAnimals(locationSW)),
});

const resultado = (parametro) => {
  const filter = parametro;
  if (filter.includeNames === true && filter.sex === 'female') {
    return {
      NE: Object.values(animalsBySex(locationNE)),
      NW: Object.values(animalsBySex(locationNW)),
      SE: Object.values(animalsBySex(locationSE)),
      SW: Object.values(animalsBySex(locationSW)),
    };
  }
  if (filter.includeNames === true && filter.sorted === true) {
    return {
      NE: Object.values(filtered(locationNE)),
      NW: Object.values(filtered(locationNW)),
      SE: Object.values(filtered(locationSE)),
      SW: Object.values(filtered(locationSW)),
    };
  }
  return resultadoFinal();
};

function getAnimalMap(options = { includeNames: false, sorted: false }) {
  const filter = options;
  if (filter.includeNames !== true) {
    return { NE: locationNE, NW: locationNW, SE: locationSE, SW: locationSW };
  }
  if (
    filter.includeNames === true
    && filter.sorted === true
    && filter.sex === 'female'
  ) {
    return {
      NE: Object.values(animalsBySexFiltered(locationNE)),
      NW: Object.values(animalsBySexFiltered(locationNW)),
      SE: Object.values(animalsBySexFiltered(locationSE)),
      SW: Object.values(animalsBySexFiltered(locationSW)),
    };
  }
  return resultado(options);
}
module.exports = getAnimalMap;
