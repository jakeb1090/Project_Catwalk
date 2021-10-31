import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Related from './Related/Related';
=======
import Questions from './Questions/QuestionsMain';
>>>>>>> 5a43fcf (Set up test components for API requests)
=======
import Questions from './Questions/Questions';
>>>>>>> e32449df701931fecd09323aa201dff108b30c95

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
<<<<<<< HEAD
<<<<<<< HEAD
        <Related />
=======
        <Questions />
>>>>>>> 5a43fcf (Set up test components for API requests)
=======
        <Questions />
>>>>>>> e32449df701931fecd09323aa201dff108b30c95
      </div>
    );
  }
}

export default App;
