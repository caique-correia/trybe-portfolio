import { Component } from 'react';

class UserData extends Component {
  render() {
    const { userObj } = this.props;
    const {
      dob: { age }, email, name: { title, first, last }, picture: { medium },
    } = userObj;

    // const newUser = (
    //   <li key={uuid}>
    //     <img src={medium} alt="Foto de Perfil" />
    //     <p>{`${title}. ${first} ${last}, ${age}`}</p>
    //     <p>{email}</p>
    //   </li>
    // )

    return (
      (
        <>
          <img src={medium} alt="Foto de Perfil" />
          <div>
          <p>{`${title}. ${first} ${last}, ${age}`}</p>
          <p>{email}</p>
          </div>
        </>
      )
    )
  }
}

export default UserData;