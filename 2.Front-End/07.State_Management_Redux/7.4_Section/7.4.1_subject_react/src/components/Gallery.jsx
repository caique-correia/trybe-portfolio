import { Component } from "react";
import { connect } from "react-redux";

class Gallery extends Component {
  render() {
    const charKeys = [
      'Name',
      'Gender',
      'Culture',
      'Born',
      'Died',
      'Titles',
      'Aliases',
      'Played By',
    ];
    const { isLoading, charInfo, lastSearch } = this.props;
    if (isLoading) return <h2>Loading...</h2>;
    if (charInfo[0]) return <h2>Invalid Search: Type a Valid ID!</h2>
    if (charInfo.url) return (
      <>
        <h2>Accessible Info of #{lastSearch}</h2>
        {charKeys.map((key, i) => {
          if (typeof charInfo[key.toLowerCase()] === 'string' && charInfo[key.toLowerCase()].length > 0) {
            return (
              <ul key={`UL1. ${key}, ${i}`}>
                {`${key}: `}
                <li key={`LI1. ${key}, ${i}`}>
                  {charInfo[key.toLowerCase()]}
                </li>
              </ul>
            )
          }

          if (key === 'Played By' && charInfo.playedBy[0].length > 0) {
            return (
              <ul key={`UL2. ${key}, ${i}`}>
                {`${key}: `}
                {charInfo.playedBy.map((player) => (
                  <li key={`LI2. ${player}, ${i}`}>
                    {player}
                  </li>
                ))}
              </ul>
            )
          }

          if (key === 'Played By' && charInfo.playedBy[0].length === 0) {
            return null
          }

          if (charInfo[key.toLowerCase()][0]) {
            console.log(charInfo[key.toLowerCase()][0]);
            return (
              <ul key={`UL3. ${key}, ${i}`}>
                {`${key}: `}
                {charInfo[key.toLowerCase()].map((each) => (
                  <li key={`LI3. ${each}, ${i}`}>
                    {each}
                  </li>
                ))}
              </ul>
            )
          }

          return null;
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  charInfo: state.charInfo,
  lastSearch: state.lastSearch,
})

export default connect(mapStateToProps)(Gallery);
