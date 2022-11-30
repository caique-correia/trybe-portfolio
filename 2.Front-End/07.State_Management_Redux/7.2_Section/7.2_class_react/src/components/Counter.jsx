import { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    const { countState } = this.props;
    return (
      <>
        <h1>Counter Activite</h1>
        <h2>{countState}</h2>
        <button id='add1' type='button'>+1</button>
        <button id='add5' type='button'>+5</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
})

export default connect(mapStateToProps)(Counter);