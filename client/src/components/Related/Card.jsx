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
  // console.log(props.product)
  const { img, title, price, salesPrice, avgRating, features } = props.product;
  const { btn } = props;
  return(
    <Div data-testid="card">
      {btn === 'compare' ? <CompareBtn /> : <DeleteBtn />}


      <CardImg
        src={img}
        alt={title}
      />
      <Title>{title}hello</Title>
      <RatingStars
        avgRating={avgRating}
      />
    </Div>
  );
}

// Card.defaultProps = {
//   product: {},
//   btn: ''
// }

Card.propTypes = {
  product: PropTypes.object.isRequired,
  btn: PropTypes.string.isRequired
}

export default Card;
