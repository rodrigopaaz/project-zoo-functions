const data = require('../data/zoo_data');

const { species } = data;
const all = species.filter((element) => element.name).map((element) => element.residents);
const nam = species.filter((element) => element.name).map((element) => element.name);
const array = [];
const sum = all.reduce((acc,curr) => {
  acc = curr.length
  array.push(acc)
  return array
  },0)
  const pets = array.map((element, index) => {
    {
    nam[index],
    element[index],
    }
  }
  )

function countAnimals(animal = all) {
  //const spec = species.filter((element) => element.name === animal).map((element) => element.residents);
  return animal.filter((element) => element.name === 'bears');

}
console.log(pets);
module.exports = countAnimals;
