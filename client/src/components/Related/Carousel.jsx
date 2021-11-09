import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Card from './Card';
import ForwardArrow from './ForwardArrow';
import ReverseArrow from './ReverseArrow';

const Carousel = (props) => {
  const {
    onCompareProductClick,
    onDeleteOutfitClick,
    onRelatedClick,
    onAddOutfitClick,
    data,
    btn,
  } = props;

  return (
    <div data-testid="carousel">
      {/* Add Outfit Button Card */}
      {btn !== 'compare' && <Card onAddOutfitClick={onAddOutfitClick} addOutfit />}
      <ReverseArrow />
      {data.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          onRelatedClick={onRelatedClick}
          onCompareProductClick={onCompareProductClick}
          onDeleteOutfitClick={onDeleteOutfitClick}
          product={product}
          btn={btn}
        />
      ))}
      <ForwardArrow />
    </div>
  );
};
Carousel.defaultProps = {
  onCompareProductClick: () => {},
  onDeleteOutfitClick: () => {},
  onRelatedClick: () => {},
  onAddOutfitClick: () => {},
};

Carousel.propTypes = {
  onCompareProductClick: PropTypes.func,
  onDeleteOutfitClick: PropTypes.func,
  onRelatedClick: PropTypes.func,
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
