import React from 'react';
import styled from 'styled-components';

const Space = styled.div`
  width: 970px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;
const StyledFooter = styled.div`
 margin-top: 60px;
    width: 100%;
    background-color: #fff;
    text-align: right;
    padding: 5px 0;
`;

const Footer = () => {
   return (
      <StyledFooter>
         <Space>
            <p>Shop © 2020 <br/> Designed by Gabriel</p>
         </Space>
      </StyledFooter>

   );
};

export default Footer;

