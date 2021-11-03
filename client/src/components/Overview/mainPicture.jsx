import React from 'react';

//The primary picture
//on click, should expand to a larger size.
//on second click, should return to original size
//setting this up as a clickable button
//should also work as carousel. This video should show how to do that https://www.youtube.com/watch?v=l1MYfu5YWHc&ab_channel=BrianDesign

class mainPicture extends React.Component {

  const mainImage = () => {
    //will become the zoom action
    console.log('I was clicked!')
  }
  //display main clothing picture
  render() {
    return (
      <img src={require('https://static.ffx.io/images/$zoom_1%2C$multiply_1.2223%2C$ratio_1.777778%2C$width_1309%2C$x_58%2C$y_64/t_crop_custom/q_62%2Cf_auto/7b47212bde0cacbe67bf8a8e25c24f761514414a')} onClick={this.mainImage} />
    )
  }
}

export default mainPicture;