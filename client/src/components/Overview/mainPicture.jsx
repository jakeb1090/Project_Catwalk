import React from 'react';

//The primary picture
//on click, should expand to a larger size.
//on second click, should return to original size
//setting this up as a clickable button


class mainPicture extends React.Component {

  const mainImage = () => {
    //will become the zoom action
    console.log('I was clicked!')
  }
  //display main clothing picture
  render() {
    return (
      <img src={require('location in DB')} onClick={this.mainImage} />
    )
  }
}

export default mainPicture;