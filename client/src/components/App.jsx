import React, { Component } from 'react';
import ReviewApp from './Reviews/reviewapp';
// import Overview from './Overview/Overview.jsx';
import Related from './Related/Related';
import Questions from './Questions/Questions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentProduct: 61590,
      innerWidth: 0,
      innerHeight: 0,
    };
    this.onCardClick = this.onCardClick.bind(this);
  }

  componentDidMount() {
    const { innerWidth, innerHeight } = window;
    this.setState({
      innerWidth,
      innerHeight,
    });
  }

  onCardClick(id) {
    this.setState({ currentProduct: id });
  }

  render() {
    const { currentProduct, innerWidth, innerHeight } = this.state;
    return (
      <div data-testid="app">
        <h1>Project Catwalk</h1>
        <h3>An Ingenious-ly project</h3>
        {/* <Overview /> */}
        <Related
          currentProduct={currentProduct}
          innerWidth={innerWidth}
          innerHeight={innerHeight}
          onCardClick={this.onCardClick}
        />
        <Questions
          currentProduct={currentProduct}
        />
        <ReviewApp id={currentProduct} />
      </div>
    );
  }
}

export default App;
