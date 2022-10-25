import React from "react"
import propTypes from "prop-types";

class FormCheckbox extends React.Component {
  render() {
    const { value, onChange } = this.props
    return (
      <label className="outside">
        Allow?
        <input
          type="checkbox"
          name="check"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

FormCheckbox.propTypes = {
  value: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
};

export default FormCheckbox;
