import React, { Component } from 'react';
import Overview from './Overview/Overview.jsx';
import Related from './Related/Related';

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
        <Related />
      </div>
    );
  }
}

export default App;
