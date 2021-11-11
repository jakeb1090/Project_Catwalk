import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import ForwardArrow from './ForwardArrow';
import ReverseArrow from './ReverseArrow';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
  margin: auto;
  padding: 5px;
  position: relative;
  z-index: 1;
  `;

const Slider = styled.section`
  display: flex;
  justify-content: flex-start;
  width: 98%;
  height: 100%;
  margin: auto;
  overflow-x: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movePer: 328,
      maxMove: ((this.props.data.length * 328) + 328) - (this.props.innerWidth * 1.02),
      location: 0,
      productLeft: '0',
    };
    this.rightMover = this.rightMover.bind(this);
    this.leftMover = this.leftMover.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { data, innerWidth, btn } = this.props;
    const maxOffset = btn === 'compare' ? 320 : 0;
    if (prevProps.data !== data) {
      this.setState({ maxMove: ((data.length * 328) + 328) - (innerWidth * 1.02) - maxOffset });
    }
  }

  rightMover() {
    const { location, movePer, maxMove } = this.state;
    if (location < maxMove) {
      this.setState({
        productLeft: `-${location + movePer}px`,
        location: location + movePer,
      });
    }
  }

  leftMover() {
    const { location, movePer } = this.state;
    if (location <= 0) {
      this.setState({ location: 0 });
    }
    if (location > 0) {
      this.setState({
        productLeft: `-${location - movePer}px`,
        location: location - movePer,
      });
    }
  }

  render() {
    const { productLeft, location, maxMove } = this.state;
    const {
      onCompareProductClick,
      onDeleteOutfitClick,
      onCardClick,
      onAddOutfitClick,
      data,
      btn,
    } = this.props;

    return (
      <Container data-testid="carousel">
        {/* Add Outfit Button Card */}
        {
        location > 0
          ? <ReverseArrow onClick={this.leftMover} />
          : null
        }
        <Slider>
          {btn !== 'compare' && <Card onAddOutfitClick={onAddOutfitClick} productLeft={productLeft} addOutfit />}
          {data.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              productLeft={productLeft}
              onCardClick={onCardClick}
              onCompareProductClick={onCompareProductClick}
              onDeleteOutfitClick={onDeleteOutfitClick}
              product={product}
              btn={btn}
            />
          ))}
        </Slider>
        {
        location < maxMove
          ? <ForwardArrow onClick={this.rightMover} />
          : null
        }
      </Container>
    );
  }
}

Carousel.defaultProps = {
  onCompareProductClick: () => {},
  onDeleteOutfitClick: () => {},
  onCardClick: () => {},
  onAddOutfitClick: () => {},
};

Carousel.propTypes = {
  onCompareProductClick: PropTypes.func,
  onDeleteOutfitClick: PropTypes.func,
  onCardClick: PropTypes.func,
  onAddOutfitClick: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      salesPrice: PropTypes.string,
      avgRating: PropTypes.number.isRequired,
      features: PropTypes.arrayOf(PropTypes.shape({
        feature: PropTypes.string,
        value: PropTypes.string,
      })),
    }).isRequired,
  ).isRequired,
  btn: PropTypes.string.isRequired,
};

export default Carousel;
