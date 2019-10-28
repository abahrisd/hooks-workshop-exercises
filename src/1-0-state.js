import React, { Component } from 'react';
import { render } from 'react-dom';

class Counter extends Component {
  state = { count: 0 };
  render = () => (
    <>
      {this.state.count}
      <button onClick={() => this.setState({ count: this.state.count + 1 })} />
    </>
  );
}
render(<Counter />, document.getElementById('root-1-0'));