const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const objetos = {''};
  const managers = employees.map((element) => element.managers);
  objetos.push(managers[0])
  console.log(objetos);
  if (Object.values(managers).includes(id)) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {

}
console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
module.exports = { isManager, getRelatedEmployees };


