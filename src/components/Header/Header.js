import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';

const StyledNav = styled.nav`
 position: relative;
    min-height: 50px;
    background-color: #0b102b;
`;

const Container = styled.div`
width: 970px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;


const Header = () => {
   return (
      <StyledNav>
         <Container>
            <Navbar/>
         </Container>
      </StyledNav>

   );

};

export default Header;