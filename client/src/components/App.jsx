import React, { Component } from 'react';
import Related from './Related/Related';
// import QuestionsMain from './Questions/QuestionsMain';
import Questions from './Questions/Questions';

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
        <Questions />
      </div>
    );
  }
}

export default App;
