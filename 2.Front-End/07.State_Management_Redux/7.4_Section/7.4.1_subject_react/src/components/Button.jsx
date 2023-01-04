import { Component } from "react";
import { connect } from "react-redux";
import { fetchAPI } from "../redux/actions";

class Button extends Component {
  render () {
    const { dispatch, charSearch } = this.props;
    return(
        <button
          type="button"
          onClick={() => {dispatch(fetchAPI(charSearch))}}
        >
          Search
        </button>
    );
  }
}

const mapStateToProps = (state) => ({
  charSearch: state.charSearch,
})

export default connect(mapStateToProps)(Button);
