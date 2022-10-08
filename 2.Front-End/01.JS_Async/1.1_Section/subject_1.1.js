// ADD TIMEOUT;
const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  console.log('Returned planet: ', mars);
};

// setTimeout(() => getPlanet(), 4000);

// MARS TEMPERATURE;
const messageDelay = () => Math.ceil(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => Math.round(((degreeCelsius * (9 / 5)) + 32) * 10) / 10;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte.`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (callback) => {
  const probability = Math.random() <= .6;
  setTimeout(() => probability ? callback(getMarsTemperature()) : handleError('Robot is busy'), messageDelay());
}

// sendMarsTemperature(temperatureInFahrenheit);
// sendMarsTemperature(greet);

// TO UPPERCASE;
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// A função uppercase recebe um parâmetro str e uma callback. 
// Esta função transforma as letras de uma palavra em letras maiúsculas. 
// Escreva um teste que verifique a chamada da função uppercase. 
// Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

// POKEMON!;
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lança Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: 'Jato de Água',
  },
];

function getPokemonDetails(selectedPokemon, callback) {
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const handlePokemonSearch = (error, message) => {
  const answer = error ? error.message : message;
  console.log(answer);
};

// getPokemonDetails('Charmandere', handlePokemonSearch);

module.exports = {
  uppercase,
  getPokemonDetails,
  handlePokemonSearch,
}