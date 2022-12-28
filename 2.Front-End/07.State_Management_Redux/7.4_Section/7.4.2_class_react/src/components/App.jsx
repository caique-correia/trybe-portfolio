import React from 'react';
import '../style/App.css';
import Button from './Button';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <h1>Show me a CAT!!</h1>
      <Gallery />
      <Button />
    </div>
  );
}

export default App;
