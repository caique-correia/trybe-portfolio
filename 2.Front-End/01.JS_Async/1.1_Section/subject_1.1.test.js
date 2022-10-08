const { uppercase, getPokemonDetails, handlePokemonSearch } = require('./subject_1.1');

describe('UPPERCASE!', () => {
  it('uppercase "Trybe!" to "TRYBE!"', (done) => {
    uppercase('Trybe!', (str) => {
      try {
        expect(str).toMatch('TRYBE!');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});

describe('POKEMON!', () => {
  it('Unexpected Pokemon', (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails('Chamandere', (error, message) => {
      try {
        expect(error).toEqual(expectedError);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it('Expected Pokemon', (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas';
    getPokemonDetails('Charmander', (error, message) => {
      try {
        expect(message).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
