const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let adult = 0;
  let child = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age >= 50) {
      senior += 1;
    } else if (element.age >= 18) {
      adult += 1;
    } else {
      child += 1;
    }
  });
  return { adult, child, senior };
}

const calculate = (adult, child, senior) => {
  const valorAdult = adult * 49.99;
  const valorChild = child * 20.99;
  const valorSenior = senior * 24.99;
  return valorAdult + valorChild + valorSenior;
};

function calculateEntry(entrants = 0) {
  if (entrants.length >= 1) {
    const custumers = countEntrants(entrants);
    const { adult } = custumers;
    const { child } = custumers;
    const { senior } = custumers;
    return calculate(adult, child, senior);
  } return 0;
}

module.exports = { calculateEntry, countEntrants };
