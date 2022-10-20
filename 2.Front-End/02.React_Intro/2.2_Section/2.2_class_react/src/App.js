import React from 'react';
import './App.css';
import cute_cat_staring from './Images/cute_cat_staring.jpg'
import Data from './Development/Data'
import Image from './Development/Image';
import Album from './Development/Album';
import UserProfile from './Development/UserProfile';

class App extends React.Component {
  render() {
    const {album01, album02, users} = Data;
    return (
      <>
      <Image source={ cute_cat_staring } alternativeText="Cute cat staring" />
        <div>
          <Album album={album01} />
          <Album album={album02} />
        </div>
        <div className="App">
          {users.map((user, index) => <UserProfile key={index} user={user} />)}
        </div>
      </>
    );
  }
}

export default App;
