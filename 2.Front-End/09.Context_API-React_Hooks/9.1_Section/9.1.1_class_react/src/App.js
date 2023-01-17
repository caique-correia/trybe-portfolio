// import { useState } from 'react';
import './style/App.css';

function App() {
  // const [] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="Full Name" />
        <input type="number" placeholder="Age" />
        <input type="text" placeholder="City" />
        <label htmlFor="Fundamentos">
          <input
            type="radio"
            id="Fundamentos"
            name="module"
            value="Fundamentos"
          />
          Fundamentos
        </label>
        <label htmlFor="Front-end">
          <input
            type="radio"
            id="Front-end"
            name="module"
            value="Front-end"
          />
          Front-end
        </label>
        <label htmlFor="Back-end">
          <input
            type="radio"
            id="Back-end"
            name="module"
            value="Back-end"
          />
          Back-end
        </label>
        <label htmlFor="Ciência da Computação">
          <input
            type="radio"
            id="Ciência da Computação"
            name="module"
            value="Ciência da Computação"
          />
          Ciência da Computação
        </label>
      </header>
    </div>
  );
}

export default App;
