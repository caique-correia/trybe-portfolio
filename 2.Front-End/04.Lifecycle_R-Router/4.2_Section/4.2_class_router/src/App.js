import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </BrowserRouter >
    );
  }
}
export default App;
