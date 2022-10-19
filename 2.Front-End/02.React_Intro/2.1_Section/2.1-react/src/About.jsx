import React, { Component } from "react";

const fullName = 'Speech';
const description = 'Um pequeno rato com diminutas palavras e expressivas emoções.';
const attributes = [
  { 'init': 'Str', 'attribute': 'Strength', 'value': 3, 'modifier': -4 },
  { 'init': 'Con', 'attribute': 'Constitution', 'value': 24, 'modifier': 7 },
  { 'init': 'Dex', 'attribute': 'Dexterity', 'value': 9, 'modifier': -1 },
  { 'init': 'Int', 'attribute': 'Intelligence', 'value': 17, 'modifier': 3 },
  { 'init': 'Wis', 'attribute': 'Wisdom', 'value': 20, 'modifier': 5 },
  { 'init': 'Cha', 'attribute': 'Charisma', 'value': 5, 'modifier': -3 },
];

class About extends Component {
  render() {
    return (
      <>
        <header>
          <h1> {fullName} </h1>
          <p> {description} </p>
        </header>
        <main>
          <h2>Minhas Habilidades:</h2>
          <ul> {attributes.map(({ init, attribute, value, modifier }) => {
            const format = `${attribute}: ${value}[${modifier}]`;
            return <li key={init} > {format} </li>
          })} </ul>
        </main>
      </>
    );
  }
}

export default About;
