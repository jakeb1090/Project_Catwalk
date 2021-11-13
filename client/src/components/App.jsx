import React, { Component } from 'react';
import styled from 'styled-components';
import { getProduct } from '../utils';
import ReviewApp from './Reviews/reviewapp';
import Overview from './Overview/Overview';
import Related from './Related/Related';
import Questions from './Questions/Questions';

const AppStyle = styled.div`
  margin: ${({ mobile }) => (mobile ? '60px 0' : '60px 15%')}
`;

const WidgetTitle = styled.h4`
  color:green;
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
  margin 10px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentProduct: 61577,
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
          />
          <hr />
          <Questions
            currentProduct={currentProduct}
          />
          <hr />
          <ReviewApp id={currentProduct} />
        </AppStyle>
      </div>
    );
  }
}

export default App;
