import { useState } from 'react';
import './style/App.css';

function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [module, setModule] = useState('Fundamentos');

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={({ target }) => setName(target.value)}
        />

        <input
          type="number"
          value={age}
          placeholder="Age"
          onChange={({ target }) => setAge(target.value)}
        />

        <input
          type="text"
          value={city}
          placeholder="City"
          onChange={({ target }) => setCity(target.value)}
        />

        <label htmlFor="Fundamentos">
          <input
            type="radio"
            id="Fundamentos"
            name="module"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onClick={() => setModule('Fundamentos')}
          />
          Fundamentos
        </label>

        <label htmlFor="Front-end">
          <input
            type="radio"
            id="Front-end"
            name="module"
            value="Front-end"
            checked={module === 'Front-end'}
            onClick={() => setModule('Front-end')}
          />
          Front-end
        </label>

        <label htmlFor="Back-end">
          <input
            type="radio"
            id="Back-end"
            name="module"
            value="Back-end"
            checked={module === 'Back-end'}
            onClick={() => setModule('Back-end')}
          />
          Back-end
        </label>

        <label htmlFor="Ciência da Computação">
          <input
            type="radio"
            id="Ciência da Computação"
            name="module"
            value="Ciência da Computação"
            checked={module === 'Ciência da Computação'}
            onClick={() => setModule('Ciência da Computação')}
          />
          Ciência da Computação
        </label>

      </header>
    </div>
  );
}

export default App;
