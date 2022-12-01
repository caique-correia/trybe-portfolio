import { Component } from 'react';

class Button extends Component {
  render() {
    const { label, dispatch, sum, click, r1, r2 } = this.props;
    if (sum) return (
      <button
        type='button'
        onClick={() => { dispatch(sum(label)); dispatch(click()); }}
      >
        {label}
      </button>
    );

    if (r1) return (
      <button
        type='button'
        onClick={() => { dispatch(r1()); dispatch(r2()); }}
      >
        {label}
      </button >
    );
  }
}

export default Button;
