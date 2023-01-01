import { REQUEST_API } from "../actions";
import { GET_CHARACTER } from "../actions";
import { UPDATE_NAME } from "../actions";
import { RESCUE_NAME } from "../actions";

const INIT_STATE = {
  baseline: 0,
  charSearch: '',
  lastSearch: '',
  charInfo: {},
  isLoading: false,
}

const reducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_API:
      return { ...state, isLoading: true }
    case GET_CHARACTER:
      return { ...state, charInfo: payload, isLoading: false }
    case UPDATE_NAME:
      return { ...state, charSearch: payload }
    case RESCUE_NAME:
      return { ...state, lastSearch: state.charSearch}
    default:
      return state;
  }
}

export default reducer;
