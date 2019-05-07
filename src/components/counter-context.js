import React from "react";

export const CounterContext = React.createContext();

export default class CounterProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      incrementCounter: this.incrementCounter,
      decrementCounter: this.decrementCounter
    };
  }
  incrementCounter = () => this.setState({ count: this.state.count + 1 });
  decrementCounter = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}
