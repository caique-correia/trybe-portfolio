function createDaysOfTheWeek() {
  const weekDays = ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// December Days;

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function decemberDays(x) {
  const getDaysUl = document.getElementById('days');

  for (let i = 0; i < x.length; i += 1) {
    const newLi = document.createElement('li');
    newLi.className = 'day';
    if (x[i] === 24 || x[i] === 25 || x[i] === 31) {
      newLi.classList.add('holiday');
    }
    if (x[i] === 4 || x[i] === 11 || x[i] === 18 || x[i] === 25) {
      newLi.classList.add('friday');
    }
    newLi.innerText = x[i];
    getDaysUl.appendChild(newLi);
  }
}

decemberDays(decemberDaysList);

// Button Holiday;

const getButtonsContainer = document.getElementsByClassName('buttons-container');

function addHolidayButton() {
  const newButton = document.createElement('button');
  newButton.id = 'btn-holiday';
  newButton.innerHTML = 'Feriados';
  getButtonsContainer[0].appendChild(newButton);
}

addHolidayButton();

// Background Holiday;

const getHolidayButtonId = document.getElementById('btn-holiday');
const getHolidayClass = document.getElementsByClassName('holiday');
const getDayClass = document.getElementsByClassName('day');
const naturalBgColor = 'rgb(238,238,238)';
const naturalLtColor = 'rgb(119,119,119)';
const holidayBgColor = 'green';
const whiteLtColor = 'white';

function applyNaturalColor() {
  for (let i = 0; i < getDayClass.length; i += 1) {
    getDayClass[i].style.backgroundColor = naturalBgColor;
    getDayClass[i].style.color = naturalLtColor;
  }
}

applyNaturalColor()

function onClickHolidayColor() {
  const holidayClassColor = getHolidayClass[0].style.backgroundColor;
  if (holidayClassColor === naturalBgColor || holidayClassColor !== holidayBgColor) {
    for (let i = 0; i < getHolidayClass.length; i += 1) {
      getHolidayClass[i].style.backgroundColor = holidayBgColor;
      getHolidayClass[i].style.color = whiteLtColor;
    }
  } else {
    for (let i = 0; i < getHolidayClass.length; i += 1) {
      getHolidayClass[i].style.backgroundColor = naturalBgColor;
      getHolidayClass[i].style.color = naturalLtColor;
    }
  }
}

getHolidayButtonId.addEventListener('click', onClickHolidayColor);

// Add Friday Button;

function addFridayButton() {
  const newButton = document.createElement('button');
  newButton.id = 'btn-friday';
  newButton.innerHTML = 'Sexta-feira';
  getButtonsContainer[0].appendChild(newButton);
}

addFridayButton();

// Background Holiday
const getFridayButtonId = document.getElementById('btn-friday');
const getFridayClass = document.getElementsByClassName('friday');
const fridayBgColor = 'blue';

function onClickFridayColor() {
  const fridayClassColor = getFridayClass[0].style.backgroundColor;
  if (fridayClassColor === naturalBgColor || fridayClassColor !== fridayBgColor) {
    for (let i = 0; i < getFridayClass.length; i += 1) {
      getFridayClass[i].style.backgroundColor = fridayBgColor;
      getFridayClass[i].style.color = whiteLtColor;
    }
  } else {
    for (let i = 0; i < getFridayClass.length; i += 1) {
      getFridayClass[i].style.backgroundColor = naturalBgColor;
      getFridayClass[i].style.color = naturalLtColor;
    }
  }
}

getFridayButtonId.addEventListener('click', onClickFridayColor);

// Zoom Day

function onMouseoverDayClass(event) {
  event.target.style.fontSize = '2.5em'
}

function onMouseoutDayClass(event) {
  event.target.style.fontSize = ''
}

for (let i = 0; i < getDayClass.length; i += 1) {
  getDayClass[i].addEventListener('mouseover', onMouseoverDayClass);
  getDayClass[i].addEventListener('mouseout', onMouseoutDayClass);
}

// Add Tasks;

const getTaskInputId = document.getElementById('task-input');
const getBtnAddId = document.getElementById('btn-add');

function onClickAddTask(event) {
  const getMyTasksClass = document.getElementsByClassName('my-tasks');
  const newSpan = document.createElement('span');
  newSpan.innerHTML = getTaskInputId.value + '<br>';
  getMyTasksClass[0].appendChild(newSpan);
}

getBtnAddId.addEventListener('click', onClickAddTask)