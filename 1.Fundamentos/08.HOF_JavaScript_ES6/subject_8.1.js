const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const generateEmail = (name) => `${name.toLowerCase().replace(' ', '_')}@trybe.com`;
const newEmployee = (name) => ({ Nome: name, Email: generateEmail(name) });
console.log(newEmployees(newEmployee));

