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
  const pets = sum.reduce((element, index) => console.log(index),{})

function countAnimals(animal) {

}
console.log(pets);
module.exports = countAnimals;
