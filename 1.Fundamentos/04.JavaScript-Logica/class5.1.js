let stepOne = document.querySelector('#header-container');
stepOne.style.backgroundColor = 'green';
stepOne.firstElementChild.style.color = 'white';

let stepTwo = document.querySelector('.emergency-tasks');
stepTwo.style.backgroundColor = 'orange';
stepTwo.getElementsByTagName('h3').style.color = 'white';
stepTwo.firstElementChild.firstElementChild.style.backgroundColor = 'purple';

console.log(stepOne, stepTwo);