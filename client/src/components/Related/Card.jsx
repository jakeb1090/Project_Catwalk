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
  const { img, title, price, salesPrice, avgRating, features } = props.product;
  const { onCompareProductClick, onDeleteOutfitClick, onRelatedClick, onAddOutfitClick, id, addOutfit, btn } = props;
  return(
    <Div data-testid="card" onClick={() => onRelatedClick(id)}>
      {
        addOutfit === 'addOutfit'
        ?
        <AddOutfitBtn
          onClick={onAddOutfitClick}
        />
        :
        <>
        {
          btn === 'compare'
          ?
          <CompareBtn
            onCompareProductClick={onCompareProductClick}
            id={id}
          />
          :
          <DeleteBtn
            onDeleteOutfitClick={onDeleteOutfitClick}
            id={id}
          />
        }
        <CardImg
          src={img}
          alt={title}
        />
        <Title>{title}</Title>
        <RatingStars
          avgRating={avgRating}
        />
        </>
      }
    </Div>
  );
}

Card.defaultProps = {
  product: {},
  btn: '',
  onRelatedClick: () => {}
}

Card.propTypes = {
  product: PropTypes.object,
  btn: PropTypes.string,
  onRelatedClick: PropTypes.func
}

export default Card;
