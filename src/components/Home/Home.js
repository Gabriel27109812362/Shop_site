import React from 'react';
import styled from 'styled-components';
import Product from '../../components/Product/Product';

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

const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Home = () => {
   return (
      <div>
         <HeaderBig>Welcome to our store </HeaderBig>
         <HeaderSmall>Desktops</HeaderSmall>
         <Products>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/CCanSEL.jpg' name='Surface Studio' alt='Microsoft Surface Studio' price='$3749.99'/>
               <Product image='https://i.imgur.com/qQx2zmv.jpg' alt='Dell Inspion 23' name='Dell Inspion 23' price='$1987.99'/>
               <Product image='https://i.imgur.com/7Zp9oiW.jpg' name='Lenovo IdeaCenter' alt='Lenovo IdeaCenter' price='$2487.99'/>
         </Products>
         <HeaderSmall>Tablets</HeaderSmall>
         <Products>
               <Product image='https://i.imgur.com/uROXKvy.jpg' name='Mi Pad 2' alt='Xiamomi Mi Pad 2' price='$899.99'/>
               <Product image='https://i.imgur.com/9bliZbf.jpg' name='Apple iPad Air' alt='Apple iPad Air' price='$1249.99'/>
               <Product image='https://i.imgur.com/f6vLn7N.jpg' name='Asus Transformer' alt='Asus Transformer' price='$1157.99'/>
               <Product image='https://i.imgur.com/NUsqPRC.jpg' name='iPad Mini' alt='iPad Mini' price='$480.99'/>
         </Products>
      </div>

   );
};

export default Home;

