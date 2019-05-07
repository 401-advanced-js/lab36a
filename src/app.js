import React from "react";

import CounterContext from "./components/counter-context.js";
import Counter from "./components/counter.js";
import Incrementer from "./components/incrementer.js";
import Decrementer from "./components/decrementer.js";

class App extends React.Component {
  render() {
    return (
      <>
        <CounterContext>
          <Decrementer />
          <Counter />
          <Incrementer />
        </CounterContext>
      </>
    );
  }
}

export default App;
