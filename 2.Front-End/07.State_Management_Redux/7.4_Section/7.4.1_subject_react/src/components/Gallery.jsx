import { Component } from "react";
import { connect } from "react-redux";

class Gallery extends Component {
  render() {
    const { isLoading, charInfo, lastSearch } = this.props;
    if (isLoading) return <h2>Loading...</h2>;
    if (charInfo[0]) return <h2>Invalid Search: Type a Number!</h2>
    if (charInfo.url) return (
      <>
        <h2>Accessible Info of #{lastSearch}</h2>
        {charInfo.name.length > 0 && (
          <ul>Name:
            <li>{charInfo.name}</li>
          </ul>
        )}

        {charInfo.gender.length > 0 && (
          <ul>Gender:
            <li>{charInfo.gender}</li>
          </ul>
        )}

        {charInfo.culture.length > 0 && (
          <ul>Culture:
            <li>{charInfo.culture}</li>
          </ul>
        )}

        {charInfo.born.length > 0 && (
          <ul>Born:
            <li>{charInfo.born}</li>
          </ul>
        )}

        {charInfo.died.length > 0 && (
          <ul>Died:
            <li>{charInfo.died}</li>
          </ul>
        )}

        {charInfo.titles[0].length > 0 && (
          <ul>Titles:
            {charInfo.titles.map((title, i) => <li key={i}>{title}</li>)}
          </ul>
        )}

        {charInfo.aliases[0].length > 0 && (
          <ul>Aliases:
            {charInfo.aliases.map((alias, i) => <li key={i}>{alias}</li>)}
          </ul>
        )}

        {/* {charInfo.father.length > 0 && <h3>Father:</h3>}
        <p>{charInfo.father}</p>
        {charInfo.mother.length > 0 && <h3>Mother:</h3>}
        <p>{charInfo.mother}</p>
        {charInfo.spouse.length > 0 && <h3>Spouse:</h3>}
        <p>{charInfo.spouse}</p> */}

        {charInfo.playedBy[0].length > 0 && (
          <ul>Played By:
            {charInfo.playedBy.map((player, i) => <li key={i}>{player}</li>)}
          </ul>
        )}

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
