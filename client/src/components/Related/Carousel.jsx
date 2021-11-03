import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import ForwardArrow from './ForwardArrow';
import ReverseArrow from './ReverseArrow';

const Carousel = (props) => {
  const { onAddOutfitClick, data, btn } = props;
  return(
    <div data-testid="carousel">
      {/* Add Outfit Button Card */}
      {
        btn === 'compare'
        ?
        <></>
        :
        <Card
          onAddOutfitClick={onAddOutfitClick}
          addOutfit='addOutfit'
        />
      }
      <ReverseArrow />
      {data.map((product) => {
        return (
          <Card
            key={product.id}
            product={product}
            btn={btn}
          />
        )
      })}
      <ForwardArrow />
    </div>
  );
}

export default Carousel;
