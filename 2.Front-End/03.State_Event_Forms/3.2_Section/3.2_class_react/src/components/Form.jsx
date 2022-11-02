import React, { Component } from 'react'
import '../style/Form.css'
import FormSelect from './FormSelect';
import FormField from './FormField';
import FormCheckbox from './FormCheckbox';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      choice: '',
      name: '',
      age: 0,
      PS: '',
      check: false,
      error: false,
    };
  }

  handleError = (bool) => this.setState({ error: bool });

  handleChanges = ({ target: { name, value, type, checked } }) => {
    const setValue = type === 'checkbox' ? checked : value
    this.setState({ [name]: setValue });
    const { PS } = this.state;
    this.handleError(PS.length > 60);
  };

  render() {
    const { choice, name, age, PS, check, error } = this.state;
    return (
      <div>
        <h1>ToFixOne;</h1>
        <form className="form">
          <FormSelect
            value={choice}
            onChange={this.handleChanges} />
          <FormField
            valueName={name}
            valueAge={Number(age)}
            valuePS={PS}
            onChange={this.handleChanges}
            setError={error}
            onError={this.handleError}
          />
          <FormCheckbox
            value={check}
            onChange={this.handleChanges} />
          <input className="outside" type="file" />
        </form>
      </div>
    );
  }
}

export default Form;