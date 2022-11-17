import { Component } from 'react';

class Welcome extends Component {
  render() {
    const { history } = this.props;
    const { location: { state, pathname } } = history;
    return (
      <>
        <h1>Boas Vindas!</h1>
        <h2>{ state ? state.userName : 'Unknown Person' }</h2>
        <button type="button" onClick={ () => history.push('/') }>
          To Home
        </button>
        <button type="button" onClick={ () => console.log(pathname) }>
          Console Log
        </button>
      </>
    );
  }
}

export default Welcome;