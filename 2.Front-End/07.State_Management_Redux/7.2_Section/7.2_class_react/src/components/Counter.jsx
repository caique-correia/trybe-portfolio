import { Component } from 'react';

class Counter extends Component {
  render() {
    return (
    <>
      <h1>Counter Activite</h1>
      <h2>0</h2>
      <button id='add1' type='button'>+1</button>
      <button id='add5' type='button'>+5</button>
    </>
    );
  }
}

export default Counter;