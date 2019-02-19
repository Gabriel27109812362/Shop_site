import React from 'react';
import styled from 'styled-components';
import Products from '../../components/Products/Products'

const HeaderBig = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
    padding: 15px 0;
`;

const HeaderSmall = styled.h2`
    font-size: 22px;
    text-transform: uppercase;
    padding: 5px 0;
`;

const Home = () => {
   return (
      <div>
         <HeaderBig>Welcome to our store </HeaderBig>
         <HeaderSmall>Desktops</HeaderSmall>
         <Products>Products</Products>
         <HeaderSmall>Tablets</HeaderSmall>
      </div>


   );
};

export default Home;

