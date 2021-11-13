import React, { Component } from 'react';
import styled from 'styled-components';
import ReviewApp from './Reviews/reviewapp';
// import Overview from './Overview/Overview.jsx';
import Related from './Related/Related';
import Questions from './Questions/Questions';

const AppStyle = styled.div`
padding: 15px 50px;
font-family: Georgia, serif;
`;

const TextButton = styled.button` //for helpful/report buttons
  text-align: center;
  background: rgba(0, 0, 0,0); //transparent
  font-size: 16px;
  text-decoration: underline;
  border: none;
  font-family: Georgia, serif;
  `;

const BorderedButton = styled.button` //for Annie & Jake's "Load More" "Add" etc.
  background-color: rgba(0, 0, 0,0); //transparent
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  font-family: Georgia, serif;
`;

const ModalButton = styled.button`
  background: rgba(235, 235, 235,0.5); //transparent
  border: solid black 1px;
  border-radius: 2px;
  margin: 10px;
  padding: 2px 5px;
  font-family: Georgia, serif;
`;

const WidgetTitle = styled.h4`
  color:green;
`;

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
        <AppStyle>
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
          <ReviewApp
            id={currentProduct}
            TextButton={TextButton}
            BorderedButton={BorderedButton}
            ModalButton={ModalButton}
            WidgetTitle={WidgetTitle}
          />
        </AppStyle>
      </div>
    );
  }
}

export { App };
