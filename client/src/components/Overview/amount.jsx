import React from 'react';

//Dropdown menu for the amount of clothing selected
//will need to be connected to add to cart so that the amount selected is saved when it's Clickted to the cart
//good resource: https://react-bootstrap.github.io/components/dropdowns/

class amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount = 0;
    }
    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    const amount = this.state.amount;
    this.props.handleClick(amount);
  }

  handleClick(event) {
    const amount = amount.target;
    this.setState({amount: amount})
  }


  //dropdown for amount (15 maximum, should be less if lower amount available)
  render() {
    <SplitButton id="dropdown-amount" title="Dropdown amount button" onclick={this.onClick}>
      <Dropdown.Item href="amount=1">1</Dropdown.Item>
      <Dropdown.Item href="amount=2">2</Dropdown.Item>
      <Dropdown.Item href="amount=3">3</Dropdown.Item>
      <Dropdown.Item href="amount=4">4</Dropdown.Item>
      <Dropdown.Item href="amount=5">5</Dropdown.Item>
      <Dropdown.Item href="amount=6">6</Dropdown.Item>
      <Dropdown.Item href="amount=7">7</Dropdown.Item>
      <Dropdown.Item href="amount=8">8</Dropdown.Item>
      <Dropdown.Item href="amount=9">9</Dropdown.Item>
      <Dropdown.Item href="amount=10">10</Dropdown.Item>
      <Dropdown.Item href="amount=11">11</Dropdown.Item>
      <Dropdown.Item href="amount=12">12</Dropdown.Item>
      <Dropdown.Item href="amount=13">13</Dropdown.Item>
      <Dropdown.Item href="amount=14">14</Dropdown.Item>
      <Dropdown.Item href="amount=15">15</Dropdown.Item>
    </SplitButton>
  }
}

export default amount;