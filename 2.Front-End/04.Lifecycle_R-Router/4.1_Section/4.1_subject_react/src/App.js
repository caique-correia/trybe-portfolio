import { Component } from 'react'
import './App.css';
import UserData from './components/UserData';

class App extends Component {
  state = {
    fetchObj: undefined,
    loading: true,
    userList: [],
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    this.setState({ loading: true }, async () => {
      const URL = 'https://api.randomuser.me/'
      const request = await fetch(URL);
      const response = await request.json();
      this.setState({
        fetchObj: response.results[0],
        loading: false,
      })
    })
  }

  newUserBtn = () => {
    this.setState(({ fetchObj, userList }) => ({ userList: [...userList, fetchObj] }));
    this.fetchUser();
  }

  render() {
    const { fetchObj, loading, userList } = this.state;
    return (
      <>
        <ul>
          {userList.map((userObj) => <li key={userObj.login.uuid} >
            <UserData userObj={userObj} /></li>)}
          {loading
            ? <li>Carregando...</li>
            : <li key={fetchObj.login.uuid}><UserData userObj={fetchObj} /></li>}
        </ul>
        <button type='button' onClick={this.newUserBtn}>
          New User
        </button>
      </>
    );
  }
}

export default App;
