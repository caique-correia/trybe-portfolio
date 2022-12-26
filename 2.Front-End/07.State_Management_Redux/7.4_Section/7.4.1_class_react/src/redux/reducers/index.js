import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from '../actions'

const initState = {
  isFetching: false,
  imageURL: '',
  errorMessage: '',
};

const dogReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        imageURL: '',
        errorMessage: '',
      }
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imageURL: payload,
        errorMessage: '',
      }
    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        imageURL: '',
        errorMessage: payload,
      }
    default:
      return state;
  }
};

export default dogReducer;