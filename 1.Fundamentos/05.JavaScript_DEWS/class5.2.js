

function babyMaker(x, y, place, id, text) {
    let furnace = document.querySelector(x);
    if (y) {
        furnace = furnace(y)
    }
    let mold = document.createElement(place);
    mold.id = id;
    mold.innerHTML = text;
    return furnace.append(mold);
}

console.log(babyMaker('#elementoOndeVoceEsta', '.parentNode', 'section', 'adoptedChild', '5'));
console.log(babyMaker)
