const getNameInput = document.getElementById('name-input');
const getSubmitButton = document.getElementById('submit-button');

function nameInputLength(min, max) {
  const inputLength = getNameInput.value.length;
  let flag = 0;
  if (inputLength < min) {
    flag = 1;
  } else if (inputLength >= max) {
    flag = 2;
  }
  return flag;
}

function nameInputLengthMax(nameInputLength, event) {
  if (nameInputLength === 2) {
    event.preventDefault()
    alert(`Número máximo de caracteres em "Nome": 40.`)
  }
}

function nameInputLengthMin(nameInputLength, event) {
  if (nameInputLength === 1) {
    event.preventDefault();
    alert(`Número mínimo de caracteres em "Nome": 10.`);
  }
}

// Listeners;

getNameInput.addEventListener('keypress', (event) => {
  const nameInputParameters = nameInputLength(10, 40);
  nameInputLengthMax(nameInputParameters, event);
})

getSubmitButton.addEventListener('click', (event) => {
  const nameInputParameters = nameInputLength(10, 40);
  nameInputLengthMin(nameInputParameters, event);
  nameInputLengthMax(nameInputParameters, event);
})