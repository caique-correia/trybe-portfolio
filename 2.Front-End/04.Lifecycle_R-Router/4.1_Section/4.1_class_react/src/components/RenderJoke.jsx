import React from 'react'

class RenderJoke extends React.Component {
  render() {
    const { jokeObj, saveJoke } = this.props;
    return (
      <section>
        <p>{jokeObj.joke}</p>
        <button type="button" onClick={saveJoke}>
          Save Joke!
        </button>
      </section>
    )
  }
}

export default RenderJoke