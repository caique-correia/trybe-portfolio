import { render } from "@testing-library/react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "../../redux/reducers";

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({counterReducer}), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export default renderWithRedux;