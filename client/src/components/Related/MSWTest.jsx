import React from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../../utils';

class MSWTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    const { currentProduct } = this.props;
    getProduct(currentProduct)
      .then((data) => {
        this.setState({ product: data.data });
      });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        {product && <h1>{product.name}</h1>}
      </div>
    );
  }
}

MSWTest.propTypes = {
  currentProduct: PropTypes.number.isRequired,
};

export default MSWTest;
