let furnace = document.querySelector('#elementoOndeVoceEsta');

function babyMaker(id, text) {
	let cast = document.createElement('section');
	cast.id = id;
	cast.innerHTML = text;
	return furnace.parentNode.appendChild(cast);
}

// function babyChooser() {
//     let boil;
//     switch (true) {
//         case type === 'parentNode':
//             boil = furnace.parentNode;
//             break;
//         case type === 'firstElementChild':
//             boil = furnace.firstElementChild

//     }
// }

console.log(babyMaker('adoptedChild', '5'));

let practiceYou = document.querySelector('#elementoOndeVoceEsta');

let thySon = document.createElement('section');
thySon.id = 'grandson';
thySon.innerHTML = '2.3';
practiceYou.appendChild(thySon)

let thySonsSon = document.createElement('section');
thySonsSon.id = 'grandgrandson';
thySonsSon.innerHTML = '2.1.1';
practiceYou.firstElementChild.appendChild(thySonsSon)

let last = practiceYou.firstElementChild.firstElementChild;
let last0 = last.parentNode.parentNode.nextSibling.nextSibling
// console.log(last0)

// let practiceYou = document.querySelector('#elementoOndeVoceEsta');
// let practice1 = practiceYou.firstElementChild

// function abcd (a, b, c, d) {
//     let create = document.createElement(a);
//     create.id = b;
//     create.innerHTML = c;
//     return practice1.appendChild(create);
// }

// console.log(abcd('section', 'test', 'thisIsATest'))

const pai = document.querySelector('#pai')
const dad = pai.childNodes;

for (let i = dad.length - 1; i >= 0; i -= 1) {
	if (i !== 3) {
		dad[i].remove();
	}
}

const rest = document.getElementById('segundoEUltimoFilhoDoFilho');