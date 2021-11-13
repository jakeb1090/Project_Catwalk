import React, { Component } from 'react';
import styled from 'styled-components';
import { getProduct } from '../utils';
import ReviewApp from './Reviews/reviewapp';
import Overview from './Overview/Overview';
import Related from './Related/Related';
import Questions from './Questions/Questions';

const AppStyle = styled.div`
  margin: ${({ mobile }) => (mobile ? '60px 0' : '60px 15%')};
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
  color: #696969;
  font-family: 'Montserrat', sans-serif;
  font-weight: lighter;
  font-size: 20px;
  margin: 0px;
`;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 25px;
  background: black;
  color: white;
  top: 0;
  left: 0;
  padding: 10px 0 20px 0;
  z-index: 100;
`;

const Ingenious = styled.h1`
  margin: 10px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentProduct: 61593,
      currentObject: {},
      innerWidth: 0,
    };
    this.onCardClick = this.onCardClick.bind(this);
  }

  componentDidMount() {
    const { currentProduct } = this.state;
    const { innerWidth } = window;
    getProduct(currentProduct)
      .then((data) => {
        this.setState({
          currentObject: data.data,
          innerWidth,
        });
      });
  }

  onCardClick(id) {
    getProduct(id)
      .then((data) => {
        this.setState({
          currentObject: data.data,
        });
      });
    this.setState({ currentProduct: id });
  }

  render() {
    const {
      currentProduct,
      innerWidth,
      currentObject,
    } = this.state;
    const mobile = innerWidth <= 480;
    return (
      <div data-testid="app">
        <Nav>
          <Ingenious>Ingenious</Ingenious>
        </Nav>
        <AppStyle mobile={mobile}>
          <Overview
            mobile={mobile}
            currentObject={currentObject}
          />
          <hr />
          <Related
            currentProduct={currentProduct}
            innerWidth={mobile ? innerWidth : innerWidth * 0.85}
            onCardClick={this.onCardClick}
            WidgetTitle={WidgetTitle}
          />
          <hr />
          <Questions
            currentProduct={currentProduct}
            WidgetTitle={WidgetTitle}
            TextButton={TextButton}
            BorderedButton={BorderedButton}
            ModalButton={ModalButton}
          />
          <hr />
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

export default App;
