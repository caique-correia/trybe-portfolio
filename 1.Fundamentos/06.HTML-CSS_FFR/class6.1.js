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

function onKeyupInputText(event) {
  event.preventDefault();
  const eventKey = event.key;
  if (eventKey === 'a') {
    
  }
}

HREF_LINK.addEventListener('click', onClickHrefLink);
HREF_LINK.addEventListener('click', onClickInputCheckbox);
HREF_LINK.addEventListener('keyup', onKeyupInputText);