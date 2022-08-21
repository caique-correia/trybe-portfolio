// VARIÁVEIS;
let myName = 'Caíque';
const birthCity = 'Salvador';
const birthYear = '1998'

// birthYear = birthYear + 32; 

// console.log(myName, birthCity, birthYear);

// TP, TD, OA; 
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

// !!#2;
const base = 5;
let height = 8;

const area = base * height;
const perimeter = 2 * (base + height);

// console.log(area);
// console.log(perimeter);

//CONDIÇÕES IF/ELSE;
const score = 72;

if (score >= 80) {
  // console.log('Parabéns, você foi aprovado(a)');
} else if (score < 80 && score >= 60) {
  // console.log('Você está na nossa lista de espera');
} else if (score < 60) {
  // console.log('Você foi reprovado(a)');
} else {
  // console.log(ERROR);
};

// OPERADORES LÓGICOS;
const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  // console.log('Muito obrigado pela refeição :)');
} else {
  // console.log('Acho que houve um engano com meu pedido');
}


const bebidaPrincipal = 'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  // console.log("Obrigado por me atender :D")
} else {
  // console.log("Ei, eu não pedi isso!");
}

// SWITCH AND CASE;
let faixaEtaria = 'idoso';

switch (faixaEtaria) {
  case 'adolescente':
    // console.log('Consulte a classificação do filme');
    break;
  case 'adulto':
    // console.log('A pessoa adulta é classificada para assistir qualquer filme');
    break;
  case 'idoso':
    // console.log('A pessoa idosa é classificada para assistir qualquer filme');
    break;
  default:
  // console.log('só pode assistir filmes livres');
}



mes = 'Trybe';
let estacaoDoAno = '?';

switch (mes) {
  case 'janeiro':
  case 'fevereiro':
  case 'março':
    estacaoDoAno = 'Verão';
    break;
  case 'abril':
  case 'maio':
  case 'junho':
    estacaoDoAno = 'Outono';
    break;
  case 'julho':
  case 'agosto':
  case 'setembro':
    estacaoDoAno = 'Inverno';
    break;
  case 'outubro':
  case 'novembro':
  case 'dezembro':
    estacaoDoAno = 'Primavera';
}

// console.log(estacaoDoAno); // 'Outono'


let state = 'aprovada';
let report = 'não se aplica';

switch (state) {
  case 'aprovada':
    report = 'aprovada';
    break;
  case 'lista':
    report = 'lista';
    break;
  case 'reprovada':
    report = 'reprovada';
    break;
}

console.log(report);
