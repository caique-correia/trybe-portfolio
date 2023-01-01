import { Component } from "react";
import NumberInput from "./NumberInput";
import Gallery from "./Gallery"
import Button from "./Button";

class App extends Component {
  render() {
    return(
      <>
        <h1>Game of Thunks</h1>
        <Gallery />
        <NumberInput />
        <Button />
      </>
    );
  }
}

export default App;