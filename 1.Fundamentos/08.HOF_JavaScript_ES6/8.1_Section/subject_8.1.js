// NOVA PESSOA CONTRATADA;
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const generateEmail = (name) => `${name.toLowerCase().replace(' ', '_')}@trybe.com`;
const newEmployee = (name) => ({ Nome: name, Email: generateEmail(name) });

// console.log(newEmployees(newEmployee));

// SORTEADOR DE LOTERIA;
const randomNumberGenerator = (maxResult) => Math.ceil(Math.random() * maxResult);
const compareLuckyNumber = (luckyNumber, RNG) => luckyNumber === RNG(5) ? 'Parabéns, você ganhou!' : 'Tente novamente...';

// console.log(compareLuckyNumber(5, randomNumberGenerator));

// CORRETOR AUTOMÁTICO DE EXAME;
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  switch (true) {
    case studentAnswer === 'N.A':
      return 0;
    case studentAnswer === rightAnswer:
      return 1;
    default:
      return 0.5;
  }
};

const answersReading = (rightAnswers, studentAnswers, callback) => {
  let result = 0;
  for (let i in rightAnswers) {
    result += callback(rightAnswers[i], studentAnswers[i]);
  }
  return result;
};

// console.log(answersReading(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

// BONUS - GAME ACTIONS SIMULATOR;
// PART I;
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const defineDragonDamage = ({ strength }) => {
  const damageDragon = Math.floor(Math.random() * (strength - 14) + 15);
  return damageDragon;
};

const defineWarriorDamage = ({ strength, weaponDmg }) => {
  const damageWarrior = Math.floor(Math
    .random() * ((strength * weaponDmg) - strength + 1) + strength);
  return damageWarrior;
};

const defineMageDamage = (intelligence) => {
  const damageMage = Math.floor(Math.random() * (intelligence + 1) + intelligence);
  return damageMage;
};

const handleMageTurn = ({ intelligence, mana }) => {
  const mageTurn = { dealtDamage: 0, spentMana: 'Insufficient Mana!' }

  if (mana >= 15) {
    mageTurn.dealtDamage = defineMageDamage(intelligence);
    mageTurn.spentMana = 15;
  }; return mageTurn;
};

// PART II;
const gameActionsF = ({ mage, warrior, dragon }, CBW, CBM, CBD) => {
  warrior.damage = CBW(warrior);
  dragon.healthPoints -= warrior.damage;

  const { dealtDamage, spentMana } = CBM(mage);
  dragon.healthPoints -= dealtDamage;
  mage.damage = dealtDamage;
  mage.mana -= spentMana;

  dragon.damage = CBD(dragon);
  warrior.healthPoints -= dragon.damage;
  mage.healthPoints -= dragon.damage;
};

const gameActions = {
  warriorTurn: (CBW) => {
    warrior.damage = CBW(warrior);
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (CBM) => {
    const { dealtDamage, spentMana } = CBM(mage);
    dragon.healthPoints -= dealtDamage;
    mage.damage = dealtDamage;
    typeof spentMana === 'string' ? mage.mana = spentMana : mage.mana -= spentMana;
  },
  dragonTurn: (CBD) => {
    dragon.damage = CBD(dragon);
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  endRound: () => battleMembers,
};

gameActions.warriorTurn(defineWarriorDamage);
gameActions.mageTurn(handleMageTurn);
gameActions.dragonTurn(defineDragonDamage);
console.log(gameActions.endRound());