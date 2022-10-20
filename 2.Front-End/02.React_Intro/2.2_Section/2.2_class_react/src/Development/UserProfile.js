import React from 'react';
import propTypes from 'prop-types';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p> { user.name } </p>
        <p> { user.email } </p>
        <Image source={ user.avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: propTypes.object.isRequired,
}

export default UserProfile;