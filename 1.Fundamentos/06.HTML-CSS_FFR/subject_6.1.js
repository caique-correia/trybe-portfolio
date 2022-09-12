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

function nameInputLength() {
  const inputLength = getNameInput.value.length;
  let flag = 0;
  if (inputLength < minName) {
    flag = 1;
  } else if (inputLength >= maxName) {
    flag = 2;
  }
  return flag;
}

function emailInputLength() {
  const inputLength = getEmailInput.value.length;
  let flag = 0;
  if (inputLength < minEmail) {
    flag = 1;
  } else if (inputLength >= maxEmail) {
    flag = 2;
  }
  return flag;
}

function answerFieldLength() {
  const inputLength = getAnswerField.value.length;
  let flag = 0;
  if (inputLength < minAnswer) {
    flag = 1;
  } else if (inputLength >= maxAnswer) {
    flag = 2;
  }
  return flag;
}

function nameInputLengthMin(nameInputLength, event) {
  if (nameInputLength === 1) {
    event.preventDefault();
    alert(`Dados Inválidos!`);
    alert(`Número mínimo de caracteres em "Nome": 10.`);
  }
}

function nameInputLengthMax(nameInputLength, event) {
  if (nameInputLength === 2) {
    event.preventDefault()
    alert(`Dados Inválidos!`);
    alert(`Número máximo de caracteres em "Nome": 40.`)
  }
}

function emailInputLengthMin(emailInputLength, event) {
  if (emailInputLength === 1) {
    event.preventDefault();
    alert(`Dados Inválidos!`);
    alert(`Número mínimo de caracteres em "Email": 10.`);
  }
}

function emailInputLengthMax(emailInputLength, event) {
  if (emailInputLength === 2) {
    event.preventDefault()
    alert(`Dados Inválidos!`);
    alert(`Número máximo de caracteres em "Email": 50.`)
  }
}

function answerFieldLengthMin(answerFieldLength, event) {
  if (answerFieldLength === 1) {
    event.preventDefault();
    alert(`Dados Inválidos!`);
    alert(`Número mínimo de caracteres para resposta: 0.`);
  }
}

function answerFieldLengthMax(answerFieldLength, event) {
  if (answerFieldLength === 2) {
    event.preventDefault()
    alert(`Dados Inválidos!`);
    alert(`Número máximo de caracteres para resposta: 500.`)
  }
}

// Listeners;

getSubmitButton.addEventListener('click', (event) => {
  const nameInputParameters = nameInputLength();
  const emailInputParameters = emailInputLength();
  const answerFieldParameters = answerFieldLength();
  
  nameInputLengthMin(nameInputParameters, event);
  nameInputLengthMax(nameInputParameters, event);
  
  emailInputLengthMin(emailInputParameters, event);
  emailInputLengthMax(emailInputParameters, event);

  answerFieldLengthMin(answerFieldParameters, event);
  answerFieldLengthMax(answerFieldParameters, event);
})