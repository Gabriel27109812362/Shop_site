import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.ul`
  padding: 0;
    margin: 0;
    overflow: hidden;
    list-style-type: none;
`;

const NavButton = styled.li`
 float: left;
`;
const StyledLink = styled.a`
 font-size: 16px;
    font-weight: 100;
    padding: 15px 35px;
    color: #fff;
    display: block;
    text-decoration: none;
`;

const Navbar = () => {
   return (
      <StyledNavbar>
         <NavButton>
            <StyledLink href='/'>Home</StyledLink>
         </NavButton>
         <NavButton>
            <StyledLink href='/catalog'>Catalog</StyledLink>
         </NavButton>
         <NavButton>
            <StyledLink href='/about'>About</StyledLink>
         </NavButton>
      </StyledNavbar>
   );
};
export default Navbar;