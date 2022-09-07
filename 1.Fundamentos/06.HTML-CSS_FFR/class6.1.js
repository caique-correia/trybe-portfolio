// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function onClickHrefLink(event) {
  event.preventDefault();
}

function onClickInputCheckbox(event) {
  event.preventDefault();
}

function onKeypressInputText(event) {
  const eventKey = event.key;
  if (eventKey !== 'a') {
    event.preventDefault();
  }
}

HREF_LINK.addEventListener('click', onClickHrefLink);
INPUT_CHECKBOX.addEventListener('click', onClickInputCheckbox);
INPUT_TEXT.addEventListener('keypress', onKeypressInputText);