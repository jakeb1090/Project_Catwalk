import React, { Component } from 'react';
import addToCart from './addToCart.jsx';
import addToOutfit from './addToOutfit.jsx';
import amount from './amount.jsx';
import clothingStyles from './clothingStyles.jsx';
import mainPicture from './mainPicture.jsx';
import pictureScroll from './pictureScroll.jsx';
import productDescription from './productDescription.jsx';
import reviews from './reviews.jsx';
import sizes from './sizes.jsx';


//parent branch for all module files in overview

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture = ''
    }
  }


  render() {
    return (
      <div>
        <div>Product Overview</div>
        <addToCart />
        <addToOutfit />
        <amount />
        <clothingStyles />
        <mainPicture />
        <pictureScroll />
        <productDescription />
        <reviews />
        <sizes />
      </div>
    )
  }
}

export default Overview;