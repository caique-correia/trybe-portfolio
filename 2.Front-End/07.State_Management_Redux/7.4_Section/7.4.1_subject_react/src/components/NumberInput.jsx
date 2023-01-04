import { Component } from "react";
import { connect } from "react-redux";
import { updateName } from "../redux/actions";

class NameInput extends Component {
  handleNameInput = ({target}) => {
    const { dispatch } = this.props;
    dispatch(updateName(target.value))
  };

  render() {
    const { charSearch } = this.props;
    return (
    <label> {'Character ID: '}
      <input
        type="number"
        value={charSearch}
        onChange={this.handleNameInput}
      />
    </label>
    );
  }
}

const mapStateToProps = (state) => ({
  charSearch: state.charSearch,
})

export default connect(mapStateToProps)(NameInput);