import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CompareBtn from './CompareBtn';
import DeleteBtn from './DeleteBtn';
import CardImg from './CardImg';
import RatingStars from './RatingStars';
import AddOutfitBtn from './AddOutfitBtn';

const Div = styled.div`
  border: solid purple;
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
  } = props;

  const {
    img,
    name,
    avgRating,
    features,
  } = product;

  return (
    <Div data-testid="card" onClick={() => onRelatedClick(id)}>
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
    </Div>
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
  onRelatedClick: PropTypes.func,
  onCompareProductClick: PropTypes.func,
  onDeleteOutfitClick: PropTypes.func,
  onAddOutfitClick: PropTypes.func,
};

export default Card;
