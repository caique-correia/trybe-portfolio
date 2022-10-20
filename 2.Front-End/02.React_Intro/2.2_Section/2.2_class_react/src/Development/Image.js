import React from 'react';
import propTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={source} alt={alternativeText} />;
  }
}

Image.propTypes = {
  source: propTypes.string.isRequired,
  alternativeText: propTypes.string.isRequired,
}

export default Image;