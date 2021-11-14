import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CompareBtn from './CompareBtn';
import DeleteBtn from './DeleteBtn';
import CardImg from './CardImg';
import RatingStars from '../Common/RatingStars';
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
  margin:  0 4px 0 4px;
  border-radius: 1%;
  left: ${({ productLeft }) => productLeft};
  transition: 0.5s;
  &:hover {
    border: solid 1px black;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  height: 25%;
  margin-right: 20px;
`;
const Title = styled.span`
  font-weight: 700;
`;
const Price = styled.span`
  color: ${({ sale }) => (sale ? 'red;' : 'inherit;')}
  text-decoration: ${({ sale }) => (sale ? 'line-through red;' : 'inherit;')}
`;

const SalePrice = styled.span`
  margin-left: 10px;
`;

const Card = (props) => {
  const {
    onCompareProductClick,
    onDeleteOutfitClick,
    onCardClick,
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
    price,
    salesPrice,
  } = product;

  return (
    <Product data-testid="card" onClick={() => onCardClick(id)} productLeft={productLeft}>
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
              <Details>
                <Title>{ name }</Title>
                <hr style={{width: '100%'}}/>
                {salesPrice
                  ? (
                    <div>
                      <Price sale>
                        $
                        {price}
                      </Price>
                      <SalePrice>
                        $
                        {salesPrice}
                      </SalePrice>
                    </div>
                  )
                  : (
                    <Price>
                      $
                      {price}
                    </Price>
                  )}
                <RatingStars value={avgRating} />
              </Details>
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
  onCardClick: () => {},
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
  onCardClick: PropTypes.func,
  onCompareProductClick: PropTypes.func,
  onDeleteOutfitClick: PropTypes.func,
  onAddOutfitClick: PropTypes.func,
};

export default Card;
