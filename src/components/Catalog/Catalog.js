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
const Filter = styled.div`
    background-color: #f7f7f7;
    padding: 5px 15px 20px;
    margin-top: 5px;
    margin-right: 10px;
`;

const Catalog = () => {
   return (
      <MainDiv>
         <HeaderBig>Catalog</HeaderBig>
         <ColumnLeft>
            <Filter>

            </Filter>
         </ColumnLeft>
         <ColumnRight>

         </ColumnRight>

      </MainDiv>

   );
};

export default Catalog;

