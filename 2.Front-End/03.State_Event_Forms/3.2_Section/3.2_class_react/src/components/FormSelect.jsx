import React from "react"
import propTypes from "prop-types";

class FormSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label>
      Choose:
      <select name="choice" value={value} onChange={onChange}>
        <option value="Default"></option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>
    </label>
    );
  }
}

FormSelect.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default FormSelect;
