import React from "react";
import propTypes from "prop-types";

class FormField extends React.Component {

  // if (valuePS.length > 60) {
  //   onError(true);
  // } else {
  //   onError(false);
  // }

render() {
    const { valueName, valueAge, valuePS, onChange } = this.props;

    return (
      <fieldset>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={valueName}
            onChange={onChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={valueAge}
            onChange={onChange}
          />
        </label>
        <label>
          P.S.:
          <textarea
            name="PS"
            value={valuePS}
            onChange={onChange}
          />
        </label>
      </fieldset>
    );
  }
}

FormField.propTypes = {
  valueName: propTypes.string.isRequired,
  valueAge: propTypes.number.isRequired,
  valuePS: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default FormField;
