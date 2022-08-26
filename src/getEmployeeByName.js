const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName !== ('')) {
    return employees.map((element) => element)
      .find((element) => element.firstName === employeeName || element.lastName === employeeName);
  }
  return {};
}

module.exports = getEmployeeByName;

console.log(getEmployeeByName());