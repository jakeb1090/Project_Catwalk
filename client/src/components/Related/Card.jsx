import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CompareBtn from './CompareBtn';
import DeleteBtn from './DeleteBtn';
import CardImg from './CardImg';
import RatingStars from './RatingStars';
import AddOutfitBtn from './AddOutfitBtn';

// max-width: ${({ innerWidth }) => {
//   if (innerWidth < 1920) {
//     return '375px';
//   }
//   return '375px';
// }};
// min-width: ${({ innerWidth }) => {
//   if (innerWidth < 1920) {
//     return '375px';
//   }
//   return '375px';
// }};
const Product = styled.span`
  position: relative;
  min-width: 320px;
  max-width: 320px;
  height: 90%;
  background: whitesmoke;
  margin:  0 5px 0 0;
  border-radius: 1%;
  left: ${({ productLeft }) => productLeft};
  transition: 0.5s;
`;

const Title = styled.h5`

`;

const Card = (props) => {
  const {
    onCompareProductClick,
    onDeleteOutfitClick,
    onRelatedClick,
    onAddOutfitClick,
    id,
    addOutfit,
    btn,
    product,
    productLeft,
  } = props;

  const {
    img,
    name,
    avgRating,
    features,
  } = product;

  return (
    <Product data-testid="card" onClick={() => onRelatedClick(id)} productLeft={productLeft}>
      {
        addOutfit
          ? <AddOutfitBtn onAddOutfitClick={onAddOutfitClick} />
          : (
            <>
              { btn === 'compare'
                ? (
                  <CompareBtn
                    onCompareProductClick={onCompareProductClick}
                    id={id}
                    features={features}
                  />
                )
                : <DeleteBtn onDeleteOutfitClick={onDeleteOutfitClick} id={id} /> }

              <CardImg src={img} alt={name} />
              <Title>{ name }</Title>
              <RatingStars avgRating={avgRating} />
            </>
          )
      }
    </Product>
  );
};
Card.defaultProps = {
  product: {},
  btn: '',
  id: null,
  addOutfit: false,
  onRelatedClick: () => {},
  onCompareProductClick: () => {},
  onDeleteOutfitClick: () => {},
  onAddOutfitClick: () => {},
};

Card.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    salesPrice: PropTypes.string,
    avgRating: PropTypes.number,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    })),
  }),
  btn: PropTypes.string,
  id: PropTypes.number,
  addOutfit: PropTypes.bool,
  productLeft: PropTypes.string.isRequired,
  onRelatedClick: PropTypes.func,
  onCompareProductClick: PropTypes.func,
  onDeleteOutfitClick: PropTypes.func,
  onAddOutfitClick: PropTypes.func,
};

export default Card;
