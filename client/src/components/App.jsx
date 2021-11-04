import React, { Component } from 'react';
import ReviewApp from './Reviews/reviewapp';
import Overview from './Overview/Overview.jsx';
import Related from './Related/Related';
// import QuestionsMain from './Questions/QuestionsMain';
import Questions from './Questions/Questions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentProduct: 61622
    };
  }

  render() {
    const { currentProduct } = this.state;
    return (
      <div data-testid="app">
        <h1>Project Catwalk</h1>
        <h3>An Ingenious-ly project</h3>
        {/* <Overview /> */}
        {/* <Related
          currentProduct={currentProduct}
        /> */}
        <Questions
          currentProduct={currentProduct} />
        {/* <ReviewApp /> */}
      </div>
    );
  }
}

export default App;
