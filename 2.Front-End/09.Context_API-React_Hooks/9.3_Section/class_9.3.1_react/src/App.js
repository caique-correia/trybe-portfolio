import React from 'react';
import Swal from 'sweetalert2';
import useFormInput from './hooks/useFormInput';
import Input from './components/Input';
import Button from './components/Button';
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

    [firstName, lastName, email].forEach((e) => e.clear())
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
        
        <Button text="Submeter Formulário" type="submit" />
      </form>
    </div>
  );
}

export default App;
