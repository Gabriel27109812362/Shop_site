import React from 'react';
import styled from 'styled-components';

const HeaderBig = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
    padding: 15px 0;
`;

const MainDiv = styled.div`
    display: flex;
`;
const ColumnLeft = styled.div`
    width: 25%;
`;
const ColumnRight = styled.div`
    width: 75%;
`;

const Catalog = () => {
   return (
      <MainDiv>
         <HeaderBig>Catalog</HeaderBig>
         <ColumnLeft>

         </ColumnLeft>
         <ColumnRight>

         </ColumnRight>

      </MainDiv>

   );
};

export default Catalog;

