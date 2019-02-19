import React from 'react';
import styled from 'styled-components';

const PrFrame = styled.div`
    width: 25%;
    background: white;
    margin: 1%;
    text-align: center;
    flex: 1 0 23%;
`;
const Picture = styled.img`
    display: block;
    width: 90%;
    height: auto;
    margin: 0 auto;
`;
const Price = styled.p`
    display: inline-block;
    font-size: 24px;
    line-height: 28px;
    color: #00a1b4;
    padding: 3px 0px;
`;
const Product = props => {

   return (
      <PrFrame>
         <Picture src={props.image} alt={props.alt}/>
         <Price>{props.price}</Price>
         <h3>{props.name}</h3>
      </PrFrame>

   );
};

export default Product;