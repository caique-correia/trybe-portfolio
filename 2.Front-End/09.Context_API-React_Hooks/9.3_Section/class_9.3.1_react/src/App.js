import React from 'react';
import Swal from 'sweetalert2';
import useFormInput from './hooks/useFormInput';
import Input from './components/Input';
import './styles/App.css';

function App() {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    Swal.fire(
      'Formulário enviado',
      JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
      }),
      'success'
    );
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Input
          text="First name:"
          value={firstName.value}
          onChange={firstName.onChange}
        />
        
        <Input
          text="Last name:"
          value={lastName.value}
          onChange={lastName.onChange}
        />
        
        <Input
          text="E-mail:"
          value={email.value}
          onChange={email.onChange}
        />
        
        <button type="submit">Submeter formulário</button>
      </form>
    </div>
  );
}

export default App;
