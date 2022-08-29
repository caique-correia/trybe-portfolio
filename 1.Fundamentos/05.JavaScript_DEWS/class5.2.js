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

let pai = document.querySelector('#pai')
let dad = pai.querySelectorAll('section');
console.log(pai.childNodes);
console.log(dad);

// pai.firstElementChild.remove();
// pai.lastElementChild.remove();
// pai.lastElementChild.remove();
// pai.lastElementChild.remove();
// console.log(pai.childNodes[10])
// console.log(document.querySelector('#pai :nth-child(5)'));
// console.log(pai.nextElementSibling);

for (let i = dad.length; i >= 0; i -= 1) {
	if (i !== 2) {
		pai.remove(dad[i]);
	}
}