let stepOne = document.querySelector('#header-container');

stepOne.style.backgroundColor = 'green';
stepOne.firstElementChild.style.color = 'white';

let stepTwo = document.querySelector('.emergency-tasks');

stepTwo.style.backgroundColor = 'orange';
stepTwo.firstElementChild.firstElementChild.style.color = 'white';
stepTwo.lastElementChild.firstElementChild.style.color = 'white';
stepTwo.firstElementChild.firstElementChild.style.backgroundColor = 'purple';
stepTwo.lastElementChild.firstElementChild.style.backgroundColor = 'purple';

let stepThree = document.querySelector('.no-emergency-tasks');

stepThree.style.backgroundColor = 'yellow';
stepThree.firstElementChild.firstElementChild.style.color = 'white';
stepThree.lastElementChild.firstElementChild.style.color = 'white';
stepThree.firstElementChild.firstElementChild.style.backgroundColor = 'black';
stepThree.lastElementChild.firstElementChild.style.backgroundColor = 'black';

let stepFour = document.querySelector('#footer-container');

stepFour.style.backgroundColor = 'green';
stepFour.style.position = 'fixed'
stepFour.style.left = '0'
stepFour.style.bottom = '0'
stepFour.style.width = '100%'



console.log(stepOne, stepTwo, stepThree, stepFour);