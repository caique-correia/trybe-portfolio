const getNameInput = document.getElementById('name-input');
const getEmailInput = document.getElementById('email-input');
const getAnswerField = document.getElementById('answer-field');
const getSubmitButton = document.getElementById('submit-button');

const minName = 10;
const maxName = 40;
const minEmail = 10;
const maxEmail = 50;
const minAnswer = 0;
const maxAnswer = 500;

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

function emailInputLength(min, max) {
  const inputLength = getEmailInput.value.length;
  let flag = 0;
  if (inputLength < min) {
    flag = 1;
  } else if (inputLength >= max) {
    flag = 2;
  }
  return flag;
}

function answerInputLength(min, max) {
  const inputLength = getAnswerField.value.length;
  let flag = 0;
  if (inputLength < min) {
    flag = 1;
  } else if (inputLength >= max) {
    flag = 2;
  }
  return flag;
}

function nameInputLengthMin(nameInputLength, event) {
  if (nameInputLength === 1) {
    event.preventDefault();
    alert(`Número mínimo de caracteres em "Nome": 10.`);
  }
}

function nameInputLengthMax(nameInputLength, event) {
  if (nameInputLength === 2) {
    event.preventDefault()
    alert(`Número máximo de caracteres em "Nome": 40.`)
  }
}

function emailInputLengthMin(emailInputLength, event) {
  if (emailInputLength === 1) {
    event.preventDefault();
    alert(`Número mínimo de caracteres em "Email": 10.`);
  }
}

function emailInputLengthMax(emailInputLength, event) {
  if (emailInputLength === 2) {
    event.preventDefault()
    alert(`Número máximo de caracteres em "Email": 50.`)
  }
}

function answerFieldLengthMin(answerFieldLength, event) {
  if (answerFieldLength === 1) {
    event.preventDefault();
    alert(`Número mínimo de caracteres para resposta: 0.`);
  }
}

function answerFieldLengthMax(answerFieldLength, event) {
  if (answerFieldLength === 2) {
    event.preventDefault()
    alert(`Número máximo de caracteres para resposta: 500.`)
  }
}

// Listeners;

getNameInput.addEventListener('keypress', (event) => {
  const nameInputParameters = nameInputLength(10, 40);
  nameInputLengthMax(nameInputParameters, event);
})

getSubmitButton.addEventListener('click', (event) => {
  const nameInputParameters = nameInputLength(10, 40);
  const emailInputParameters = emailInputLength(10, 50);
  const answerFieldParameters = emailInputLength(0, 500);
  
  nameInputLengthMin(nameInputParameters, event);
  nameInputLengthMax(nameInputParameters, event);
  
  emailInputLengthMin(emailInputParameters, event);
  emailInputLengthMax(emailInputParameters, event);

  answerFieldLengthMin(emailInputParameters, event);
  answerFieldLengthMax(emailInputParameters, event);
})