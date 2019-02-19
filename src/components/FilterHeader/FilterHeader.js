import React from 'react';
import styled from 'styled-components';

const Fh = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Clear = styled.a`
    color: #00a1b4;
    text-decoration: none;
    font-size: 13px;
`;

const FilterHeader = () => {

   return (
      <Fh>
         <h4>Search</h4>
         <Clear href='#'>Clear</Clear>
      </Fh>
   );
};

export default FilterHeader;