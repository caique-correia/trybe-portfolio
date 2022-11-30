import { Component } from 'react';
import { connect } from 'react-redux';
import { actionSum, actionReset } from '../redux/Store'

class Counter extends Component {
  render() {
    const { dispatch, countState } = this.props;
    return (
      <>
        <h1>Counter Activity</h1>
        <h2>{countState}</h2>
        <button
          type='button'
          onClick={() => dispatch(actionSum(1))}
        >+1</button>
        <button
          type='button'
          onClick={() => dispatch(actionSum(5))}
        >+5</button>
        <button
          type='button'
          onClick={() => dispatch(actionSum(-1))}
        >-1</button>
        <button
          type='button'
          onClick={() => dispatch(actionSum(-5))}
        >-5</button>
        <button
          type='button'
          onClick={() => dispatch(actionReset())}
        >Reset</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
})

export default connect(mapStateToProps)(Counter);