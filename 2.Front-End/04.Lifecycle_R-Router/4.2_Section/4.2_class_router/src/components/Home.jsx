import { Component } from 'react';

class Home extends Component {
  state = {
    userName: 'Tryber',
    role: 'Admin',
  }
  
  render() {
    const { history } = this.props;
    return (
      <>
        <h1>Home Page;</h1>
        <button type="button" onClick={() => history.push('/welcome', this.state)}>
          To Welcome
        </button>
      </>
    );
  }
}

export default Home;