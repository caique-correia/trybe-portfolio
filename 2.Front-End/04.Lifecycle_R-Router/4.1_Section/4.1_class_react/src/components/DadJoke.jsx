import React from 'react';
import RenderJoke from './RenderJoke';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState({ loading: true }, async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        jokeObj: requestObject,
        loading: false,
      })
    })
  }

  saveJoke() {
    this.setState(({ jokeObj, storedJokes }) => ({ storedJokes: [...storedJokes, jokeObj] }))
    this.fetchJoke();
  }

  componentDidMount() {
    this.fetchJoke();
  }

  render() {
    const { jokeObj, loading, storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <main>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>
        {loading
          ? loadingElement
          : <RenderJoke jokeObj={jokeObj} saveJoke={this.saveJoke} />}
      </main>
    );
  }
}

export default DadJoke;