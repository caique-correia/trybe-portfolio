// First;
const valueInput1 = document.getElementById('value1');
const valueInput2 = document.getElementById('value2');
const resultP = document.getElementById('result')
const button = document.getElementById('button');

const verifyIsEmpty = () => {
  if (valueInput1.value === '' || valueInput2.value === '') {
    throw new Error('Todos os campos devem ser preenchidos!');
  }
};

const verifyIsNaN = (value1, value2) => {
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    throw new Error('Válidos apenas caracteres númericos!');
  }
};

const printResult = (value1, value2) => {
  const result = value1 + value2;
  resultP.innerHTML = `Resultado: ${result}`;
};

const printError = error => resultP.innerHTML = error;

const resetValues = () => {
  valueInput1.value = '';
  valueInput2.value = '';
};

const sum = () => {
  const value1 = Number(valueInput1.value);
  const value2 = Number(valueInput2.value);

  try {
    verifyIsEmpty();
    verifyIsNaN(value1, value2);
    printResult(value1, value2);
  } catch (error) {
    printError(error);
    console.warn(error);
  } finally {
    resetValues();
  }
};

window.onload = () => {
  button.addEventListener('click', sum);
}