import React from 'react';

//dropdown menu to select the size.
//this should be sent to the cart when 'Add to Cart' is clicked
//good resource: https://react-bootstrap.github.io/components/dropdowns/

  //dropdown of the sizes
  class sizes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        size = '';
      }
      this.onClick = this.onClick.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    onClick(event) {
      event.preventDefault();
      const size = this.state.size;
      this.props.handleClick(size);
    }

    handleClick(event) {
      const size = size.target;
      this.setState({size: size})
    }

    //dropdown options for size
    render() {
      <SplitButton id="dropdown-size" title="Dropdown size button" onclick={this.onClick}>
        <Dropdown.Item href="size=5">Extra Small</Dropdown.Item>
        <Dropdown.Item href="size=1">Small</Dropdown.Item>
        <Dropdown.Item href="size=2">Medium</Dropdown.Item>
        <Dropdown.Item href="size=3">Large</Dropdown.Item>
        <Dropdown.Item href="size=4">Extra Large</Dropdown.Item>
      </SplitButton>
    }
}

export default sizes;