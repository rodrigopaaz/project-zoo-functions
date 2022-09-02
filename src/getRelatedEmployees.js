const data = require('../data/zoo_data');

const { employees } = data;
const managers = employees.map((element) => element.managers);

function isManager(id) {
  const checkManager = managers.find((element) => element.includes(id));
  return checkManager !== undefined;
}

function getRelatedEmployees(managerId) {
  const checkManager = managers.find((element) => element.includes(managerId));
  const erro = 'O id inserido não é de uma pessoa colaboradora gerente!';
  if (checkManager !== undefined) {
    return employees
      .filter((element) => element.managers.includes(managerId))
      .map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  }
  throw new Error(erro);
}
module.exports = { isManager, getRelatedEmployees };
