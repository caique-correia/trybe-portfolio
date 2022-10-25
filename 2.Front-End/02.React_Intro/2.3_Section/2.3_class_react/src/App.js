import React from 'react';
import './App.css';
// import Outside from './Components/toFixOne';

class App extends React.Component {
  // constructor() {
  //   super()
  //   this.setClickNumber = this.setClickNumber.bind(this);
  //   this.state = { clickNumber: 0 }
  // }

  state = { countBtn1: 0, countBtn2: 0, countBtn3: 0 };

  countBtnOne = () => {
    const { countBtn1 } = this.state;
    this.setState((prevState) => ({
      countBtn1: prevState.countBtn1 + 1
    }), () => {
      console.log((countBtn1))
    });
  };

  countBtnTwo = () => {
    const { countBtn2 } = this.state;
    this.setState((prevState) => ({
      countBtn2: prevState.countBtn2 + 1
    }), () => {
      console.log(this.defineBG(countBtn2));
    });
  };

  countBtnThree = () => {
    const { countBtn3 } = this.state;
    this.setState((prevState) => ({
      countBtn3: prevState.countBtn3 + 1
    }), () => {
      console.log(this.defineBG(countBtn3));
    });
  };

  defineBG = (count) => count % 2 === 0 ? 'green' : 'gray';

  render() {
    const { countBtn1, countBtn2, countBtn3 } = this.state;
    return (
      <>
        <p>{`First: ${countBtn1}; Second: ${countBtn2}; Thrid: ${countBtn3}`}</p>
        <button
          type="button"
          onClick={this.countBtnOne}
          style={{ backgroundColor: this.defineBG(countBtn1) }}
        >
          First Box!
        </button>
        <button
          type="button"
          onClick={this.countBtnTwo}
          style={{ backgroundColor: this.defineBG(countBtn2) }}
        >
          Second Box!
        </button>
        <button
          type="button"
          onClick={this.countBtnThree}
          style={{ backgroundColor: this.defineBG(countBtn3) }}
        >
          Third Box!
        </button>
      </>
    );
  }
}

export default App;
