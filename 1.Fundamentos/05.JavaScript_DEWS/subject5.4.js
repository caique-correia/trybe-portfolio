// window.onload

// const header = document.querySelector('header');
// const mainArticle = document.getElementById('mainArticle');
// const listsSection = document.getElementById('listsSection');
// const mainOl = document.getElementById('mainOl');
// const mainUl = document.getElementById('mainUl');
// const InputsAside = document.getElementById('inputsAside');

// console.log(listsSection);
// console.log(listsSection.children);

// header.style.color = 'pink';

// mainArticle.style.color = 'red';
// mainArticle.getElementsByTagName('h2')[0].style.color = 'green';
// mainArticle.getElementsByTagName('p')[1].style.color = 'blue';

// listsSection.style.backgroundColor = 'yellow';
// listsSection.getElementsByTagName('ol')[0].getElementsByTagName('li')[1].style.backgroundColor = 'purple';


// --------IT'S SHOW TIME!--------

// ---'CONST' DEFINITION---
const allButtons = document.getElementsByClassName('buttonInput');
const allTexts = document.getElementsByClassName('textInput');

const bodyStyle = document.body.style;

const textColor = bodyStyle.color;
const fontFamily = bodyStyle.fontFamily;
const fontSize = bodyStyle.fontSize;
const lineSpace = bodyStyle.lineHeight;


// ---FUNCTION SECTION---
function colorAlter() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor
}


function fontFamilyAlter() {
    let randomFamily = Math.floor(Math.random() * 3);
    let decision
    switch (randomFamily) {
        case randomFamily === 0:
            decision = 'cursive';
            break;
        case randomFamily === 1:
            decision = 'monospace';
            break;
        case randomFamily === 2:
            decision = 'fantasy';
    }
    return decision
}


function sizeAlter() {
    let randomSize = Math.ceil((Math.random() * 15)) + 5;
    return randomSize + 'px'
}


// ---EVENT LISTENERS---
allButtons[0].addEventListener('click', function () {
    bodyStyle.backgroundColor = colorAlter();
});

allButtons[1].addEventListener('click', function () {
    bodyStyle.color = colorAlter();
});

allButtons[2].addEventListener('click', function () {
    bodyStyle.fontFamily = fontFamilyAlter();
});

allButtons[3].addEventListener('click', function () {
    bodyStyle.fontSize = sizeAlter();
});

allButtons[4].addEventListener('click', function () {
    bodyStyle.lineHeight = sizeAlter();
});


// ---TESTS---
// bodyStyle.fontSize = sizeAlter();
// console.log(sizeAlter());












// --------FAILED TRY--------
// for (let i = 0; i < allButtons.length; i += 1) {
//     allButtons[i].addEventListener('click', function () {
//         switch (i) {
//             case i === 0:
//                 bodyStyle.backgroundColor = colorAlter();
//                 break;
//             case i === 1:
//                 bodyStyle.color = colorAlter();
//                 break;
//             case i === 2:
//                 bodyStyle.fontFamily = fontFamilyAlter();
//                 break;
//             case i === 3:
//                 bodyStyle.fontSize = sizeAlter();
//                 break;
//             case i === 4:
//                 bodyStyle.lineHeight = sizeAlter();
//                 break;
//         }

//     });
// }
