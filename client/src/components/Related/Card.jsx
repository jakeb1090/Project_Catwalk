import React from 'react';
import styled from 'styled-components';
import CompareBtn from './CompareBtn';
import DeleteBtn from './DeleteBtn';
import CardImg from './CardImg';
import RatingStars from './RatingStars';
import AddOutfitBtn from './AddOutfitBtn';

const Div = styled.div`
  border: solid purple;
`;

const Card = () => (
  <Div data-testid="card">
    <CompareBtn />
    <DeleteBtn />
    <CardImg />
    <RatingStars />
    <AddOutfitBtn />
  </Div>
);

export default Card;
