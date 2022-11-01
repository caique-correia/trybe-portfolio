import React, { Component } from 'react';
import './App.css';
// import RickMorty from './components/RickMorty';
import DadJoke from './components/DadJoke';

class App extends Component {
  render() {
    return (
      <main>
        {/* <RickMorty /> */}
        <DadJoke />
      </main>
    );
  }
}

export default App;