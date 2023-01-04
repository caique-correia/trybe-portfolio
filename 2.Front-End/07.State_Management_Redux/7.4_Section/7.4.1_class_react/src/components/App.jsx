import { Component } from 'react';
import { connect } from 'react-redux';
import fetchDogImage from '../redux/actions'
import '../style/style.css';

class App extends Component {
  render() {
    const { isFetching, imageURL, dispatch } = this.props;
    if (isFetching) return <p>Carregando...</p>
    return (
      <>
        <button
          type='button'
          onClick={() => { dispatch(fetchDogImage()) }}
        >
          New Dog
        </button>
        {
          imageURL &&
          <img
          src={imageURL}
          alt='New random dog.'
        />
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  imageURL: state.imageURL,
  isFetching: state.isFetching,
})

export default connect(mapStateToProps)(App);
