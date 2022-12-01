import { Component } from 'react';
import { connect } from 'react-redux';
import { actSum, actClick, actReset1, actReset2 } from '../redux/Store';
import Button from '../components/Button';

class Counter extends Component {
  render() {
    const { dispatch, countState, clicksState } = this.props;
    return (
      <>
        <h1>Counter Activity</h1>
        <h2>Final Sum: {countState}</h2>
        <h3>Click Count: {clicksState}</h3>
        <Button label={+1} dispatch={dispatch} sum={actSum} click={actClick} />
        <Button label={+5} dispatch={dispatch} sum={actSum} click={actClick} />
        <Button label={-1} dispatch={dispatch} sum={actSum} click={actClick} />
        <Button label={-5} dispatch={dispatch} sum={actSum} click={actClick} />
        <Button label={'Reset'} dispatch={dispatch} r1={actReset1} r2={actReset2} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
  clicksState: state.clicks,
})

export default connect(mapStateToProps)(Counter);