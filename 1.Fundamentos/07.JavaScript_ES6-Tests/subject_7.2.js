// First;
const valueInput1 = document.getElementById('value1');
const valueInput2 = document.getElementById('value2');
const resultP = document.getElementById('result')

const validateValues = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Please, stop!')
  }
}

const elaborateValues = (value1, value2) => {
  const result = value1 + value2;
  console.log(typeof result)
  resultP.innerHTML = `Resultado: ${result}`;
  valueInput1.value = '';
  valueInput2.value = '';
}

function sum() {
  const value1 = Number(valueInput1.value);
  const value2 = Number(valueInput2.value);

  try {
    validateValues(value1, value2);
    elaborateValues(value1, value2);
  } catch (e) {
    console.log('Yes!')
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}