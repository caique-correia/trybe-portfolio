/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

let centerContent = document.getElementsByClassName('center-content');
let mainContent = document.getElementsByClassName('main-content');
let title = document.getElementsByClassName('title');
let tagP = document.getElementsByTagName('p');

function questFirst(x) {
  centerContent[0].getElementsByTagName('p')[0].innerText = x
}

function questSecond() {
  mainContent[0].style.backgroundColor = 'rgb(76,164,109)'
}

function questThird() {
  mainContent[0].childNodes[1].style.backgroundColor = 'white'
}

function questFourth () {
  title[0].innerText = 'Exercício 5.1 - JavaScript';
}

function questFifth () {
  for (let i in tagP)
  centerContent[0].getElementsByTagName('p')[i].style.textTransform = 'uppercase';
  // console.log(centerContent[0].getElementsByTagName('p')[i]);
  console.log(tagP[i].innerText)
}

function questSixth() {
  for (let i in tagP)
  console.log(tagP[i].innerText)
}

console.log(questFirst("It's my duty!"));
console.log(questSecond());
console.log(questThird());
console.log(questFourth());
// console.log(questFifth())
console.log(questSixth())