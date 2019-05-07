import React from "react";

import { CounterContext } from "./counter-context.js";

class Increment extends React.Component {
  static contextType = CounterContext;
  render() {
    return (
      <CounterContext.Consumer>
        {context => (
          <>
            <button onClick={this.context.incrementCounter}>+</button>
          </>
        )}
      </CounterContext.Consumer>
    );
  }
}

export default Increment;
