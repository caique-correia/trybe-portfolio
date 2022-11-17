import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  const typed = email.length;
  return (
    <div>
      <h2
        style={ { display: typed ? 'block' : 'none' } }
        data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <h3
        style={ verifyEmail(email) ? { color: 'green' } : typed ? { color: 'red' } : {} }
      >{(verifyEmail(email) ? 'Email Válido' : typed ? 'Email Inválido' : 'Digite seu email')}</h3>
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
