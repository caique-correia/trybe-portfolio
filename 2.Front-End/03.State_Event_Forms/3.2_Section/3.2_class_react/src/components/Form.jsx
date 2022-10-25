import React, { Component } from 'react'
import '../style/Form.css'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      choice: '',
      name: '',
      age: 0,
      PS: '',
      check: false,
    };
  }

  handleChanges = ({ target: { name, value, type, checked } }) => {
    const setValue = type === 'checkbox' ? checked : value
    this.setState({ [name]: setValue });
  };

  render() {
    const { choice, name, age, PS, check } = this.state;
    return (
      <div>
        <h1>ToFixOne;</h1>
        <form className="form">
          <fieldset>
            <label>
              Choose:
              <select name="choice" value={choice} onChange={this.handleChanges}>
                <option value="Default"></option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
              </select>
            </label>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChanges}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={age}
                onChange={this.handleChanges}
              />
            </label>
            <label>
              P.S.:
              <textarea
                name="PS"
                value={PS}
                onChange={this.handleChanges}
              />
            </label>
          </fieldset>
          <label>
            Allow?
            <input
              type="checkbox"
              name="check"
              value={check}
              onChange={this.handleChanges}
            />
          </label>
          <input type="file" />
        </form>
      </div>
    );
  }
}

export default Form;