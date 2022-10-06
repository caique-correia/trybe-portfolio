// callbacks-para-fixar-01.js;
const userFullName1 = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality1 = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const getUser1 = (callback) => {
  const user = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russo',
  };
  return callback(user);
};

// console.log(getUser1(userFullName1));
// console.log(getUser1(userNationality1));

// callbacks-para-fixar-02.js
const userFullName2 = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality2 = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const delay2 = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russo',
    };
    console.log(callback(user));
  }, delay2());
};

// getUser(userFullName2);
// getUser(userNationality2);

// callback-errors.js
const countryName = ({ name }) => console.log(`O país retornado é ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`A Moeda corrente do ${name} é ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Erro ao selecionar país: ${error}`);

const getCountry = (onSuccess /* segundoParametro */) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brasil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSuccess(country);
    } else {
      const errorMessage = 'País não encontrado';
      printErrorMessage(errorMessage);
    }
  }, delay());
};

// getCountry(countryName, printErrorMessage);
// getCountry(countryCurrency, printErrorMessage);

