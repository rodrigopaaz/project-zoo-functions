const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { species } = data;
const names = employees.map((element) => element.firstName);
const lastNames = employees.map((element) => element.lastName);
const ids = employees.map((element) => element.id);

const colaborador = (...parametro) => {
  if (names.includes(parametro[0].name)) {
    return employees.find((element) => element.firstName === parametro[0].name);
  }
  if (lastNames.includes(parametro[0].name)) {
    return employees.find((element) => element.lastName === parametro[0].name);
  }
  if (ids.includes(parametro[0].id)) {
    return employees.find((element) => element.id === parametro[0].id);
  }
};
const animalAndLocation = (...parametro) => {
  const animais = parametro[0].reduce((acc, atual) => {
    acc[atual] = species.find((elemento) => elemento.id === atual).name;
    return acc;
  }, {});
  const location = parametro[0].reduce((acc, atual) => {
    acc[atual] = species.find((elemento) => elemento.id === atual).location;
    return acc;
  }, {});
  return { animais: Object.values(animais), location: Object.values(location) };
};

const resultado = (...parametro) => {
  const employee = colaborador(...parametro);
  const lugaresAnimais = animalAndLocation(employee.responsibleFor);
  return [employee].reduce((acc, atual) => {
    acc[atual] = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: lugaresAnimais.animais,
      locations: lugaresAnimais.location,
    };
    return Object.values(acc)[0];
  }, {});
};

function getEmployeesCoverage(...parametro) {
  if (parametro.length <= 0) {
    return names.reduce((acc, atual) => {
      acc[atual] = resultado({ name: atual });
      return Object.values(acc);
    }, {});
  }
  if (
    names.includes(parametro[0].name)
    || lastNames.includes(parametro[0].name)
    || ids.includes(parametro[0].id)
  ) {
    return resultado(...parametro);
  }
  const erro = 'Informações inválidas';
  throw erro;
}

module.exports = getEmployeesCoverage;
