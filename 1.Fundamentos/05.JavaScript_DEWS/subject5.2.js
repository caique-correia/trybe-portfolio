const newH1 = document.createElement('h1');
newH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(newH1);

const newMain = document.createElement('main');
newMain.className = 'main-content';
document.body.appendChild(newMain);
const alterMain = document.getElementsByTagName('main');

const secNames = ['center-content', 'left-content', 'right-content'];
for (let i = 0; i < 3; i += 1) {
    const newSec = document.createElement('section');
    newSec.className = secNames[i];
    alterMain[0].appendChild(newSec);
}
const alterSec = document.getElementsByTagName('section');

const newP = document.createElement('p');
alterSec[0].appendChild(newP);
const alterP = document.getElementsByTagName('p');
alterP[0].innerText = 'Think about it!';

const newImg = document.createElement('img');
newImg.className = 'small-image';
newImg.src = 'https://picsum.photos/200';
alterSec[1].appendChild(newImg);

const numbExt = {
    1: 'Um',
    2: 'Dois',
    3: 'Três',
    4: 'Quatro',
    5: 'Cinco',
    6: 'Seis',
    7: 'Sete',
    8: 'Oito',
    9: 'Nove',
    10: 'Dez',
}
const newUL = document.createElement('ul');
alterSec[2].appendChild(newUL);
const alterUL = document.getElementsByTagName('ul');
for (let i = 1; i <= 10; i += 1) {
    const newLi = document.createElement('li');
    newLi.innerHTML = numbExt[i];
    alterUL[0].appendChild(newLi)
}
