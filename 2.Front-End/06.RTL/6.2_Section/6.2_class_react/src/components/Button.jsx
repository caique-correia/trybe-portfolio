import { Component } from "react";
import propTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { purpose, onClick } = this.props;
    return (
      <button
        type="button"
        onClick={onClick}  
      >{purpose}</button>
    )
  }
}

Button.propTypes = {
  purpose: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
}