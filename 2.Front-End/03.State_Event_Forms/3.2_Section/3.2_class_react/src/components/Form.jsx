import React, { Component } from 'react'
import '../style/Form.css'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      // choiceState: '',
      nameState: '',
      ageState: 0,
      PSState: '',
    };
  }

  // handleChoice = (event) => {
  //   this.setState({
  //     choiceState: event.target.value,
  //   });
  // }

  handleName = (event) => {
    this.setState({
      nameState: event.target.value,
    });
  }

  handleAge = (event) =>  {
    this.setState({
      ageState: event.target.value,
    });
  }

  handlePS = (event) => {
    this.setState({
      PSState: event.target.value,
    });
  }

  render() {
    const { nameState, ageState, PSState } = this.state;
    return (
      <div>
        <h1>ToFixOne;</h1>
        <form className="form">
          <label>
            Choose:
            <input
              type="checkbox"
              name="choice"
              // value={choiceState}
              // onChange={this.handleChoice}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={nameState}
              onChange={this.handleName}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={ageState}
              onChange={this.handleAge}
            />
          </label>
          <label>
            P.S.:
            <textarea
              name="PS"
              value={PSState}
              onChange={this.handlePS}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;