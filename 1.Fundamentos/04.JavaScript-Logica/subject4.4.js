// OBJETOS;
let diasDaSemana = {
  1: 'domingo',
  2: 'segunda',
  3: 'terça',
  4: 'quarta',
  5: 'quinta',
  6: 'sexta',
  7: 'sábado',
};

// diasDaSemana.1; // SyntaxError: Unexpected number
// console.log(diasDaSemana['1']); // domingo


let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};

let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank

//   console.log(conta.agencia); // 0000
//   console.log(conta.agencia); // 0000

//   console.log(conta.banco.cod); // 012
//   console.log(conta.banco.id); // 4


let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player0 = {
  name: name,
  lastName: lastName,
  age: age,
  medals: medals,
}

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
}

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.')
// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')
// console.log(player);


// FOR/IN E FOR/OF;
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let i in names) {
  // console.log('Olá,', names[i]);
}


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let i in car) {
  // console.log(i, car[i]);
}


const trybeStudent = {
  name: "Luiza",
  class: 15,
  favoriteSubject: "javascript",
};


// AGORA À PRÁTICA!;
// PART I;
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}

info.recorrente = 'Sim';

let info1 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

// console.log(info);
// console.log('Bem-vinda, ' + info.personagem);

for (let i in info) {
  switch (true) {
    case info[i] != info1[i]:
      // console.log(info[i] + ' e ' + info1[i]);
      break;
    default:
    // console.log('Ambos Recorrentes');
  }
}


let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};


// console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'.")

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})

// console.log(leitor.livrosFavoritos[1])
// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')


// PART II;
function palindromeCheck(word) {
  let flag = true;
  let drow = '';
 
  for (let i = word.length - 1; i >= 0; i -= 1) {
    drow += (word[i]);
  }

  return word == drow;
}

console.log(palindromeCheck('HZ'));

