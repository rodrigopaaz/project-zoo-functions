const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const weekDays = [Object.keys(hours)];

const speciesAvailable = species.map((element) => element.name);

const speciesPerDay = (parametro) => species.filter((element) => element.availability
  .includes(parametro)).map((element) => element.name);

const day = (...parametro) =>
  parametro.reduce((acc, curr) => {
    if (curr === 'Monday') {
      acc[curr] = ({
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      });
      return acc;
    }
    acc[curr] = ({
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: speciesPerDay(curr),
    });
    return acc;
  }, {});

function getSchedule(...scheduleTarget) {
  if (speciesAvailable.includes(scheduleTarget[0])) {
    return species.find((element) => element.name === scheduleTarget[0]).availability;
  }
  if (weekDays[0].includes(scheduleTarget[0])) {
    return day(scheduleTarget[0]);
  } return day('Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday');
}

module.exports = getSchedule;

console.log(getSchedule('asdfafa'));
