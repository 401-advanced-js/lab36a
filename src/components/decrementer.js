import React from "react";

import { CounterContext } from "./counter-context.js";

class Decrement extends React.Component {
  static contextType = CounterContext;
  render() {
    return (
      <CounterContext.Consumer>
        {context => (
          <>
            <button onClick={this.context.decrementCounter}>-</button>
          </>
        )}
      </CounterContext.Consumer>
    );
  }
}

export default Decrement;
