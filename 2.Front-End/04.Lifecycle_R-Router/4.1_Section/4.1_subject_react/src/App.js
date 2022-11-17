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

  shouldComponentUpdate(nextProp, nextState) {
    const obj = nextState.fetchObj;
    return !obj || obj.dob.age <= 50
  }

  fetchUser = () => {
    this.setState({ loading: true }, async () => {
      const URL = 'https://api.randomuser.me/'
      const request = await fetch(URL);
      const response = await request.json();
      response.results[0].dob.age <= 50
      ? this.setState({
        fetchObj: response.results[0],
        loading: false,
      })
      : this.fetchUser();
    })
  }

  newUserBtn = () => {
    const { fetchObj } = this.state;
    if (fetchObj) {
      const age = fetchObj.dob.age;
      if (age <= 50) {
        this.setState(({ fetchObj, userList }) => ({ userList: [...userList, fetchObj] }))
      }
    }
    this.fetchUser();
  }

  render() {
    const { fetchObj, loading, userList } = this.state;
    
    return (
      <>
        <button type='button' onClick={this.newUserBtn}>
          New User
        </button>
        <ul>
          {userList.map((userObj) => <li key={userObj.login.uuid} >
            <UserData userObj={userObj} /></li>)}
          {loading
            ? <li>Carregando...</li>
            : <li key={fetchObj.login.uuid}><UserData userObj={fetchObj} /></li>}
        </ul>
      </>
    );
  }
}

export default App;
