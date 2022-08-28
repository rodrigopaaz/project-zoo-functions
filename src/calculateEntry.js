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

function calculateEntry(entrants = 0) {
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  if (entrants.length >= 1) {
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
    const valorAdult = adult * 49.99;
    const valorChild = child * 20.99;
    const valorSenior = senior * 24.99;
    const total = valorAdult + valorChild + valorSenior;
    return total;
  }
  return entrants;
}

module.exports = { calculateEntry, countEntrants };
