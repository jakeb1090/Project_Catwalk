import React, { Component } from 'react';
import ReviewApp from './Reviews/reviewapp';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div data-testid="app">
        <h1>Project Catwalk</h1>
        <h3>An Ingenious-ly project</h3>
        <ReviewApp />
      </div>
    );
  }
}

export default App;
