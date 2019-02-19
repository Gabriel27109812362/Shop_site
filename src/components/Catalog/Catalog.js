import React from 'react';
import styled from 'styled-components';
import FilterHeader from '../FilterHeader/FilterHeader';
import FilterInput from '../FilterInput/FilterInput';
import Radio from '../Radio/Radio';
import Product from '../Product/Product';

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
const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Catalog = () => {
   return (
      <div>
         <HeaderBig>Catalog</HeaderBig>
         <MainDiv>
         <ColumnLeft>
            <Filter>
               <FilterHeader/>
               <FilterInput type='text' placeholder='search...'/>
               <h4>Manufacturer</h4>
               <Radio name='manufacturere' id='all' label='All' checked='true'/>
               <Radio name='manufacturere' id='apple' label='Apple'/>
               <Radio name='manufacturere' id='dell' label='Dell'/>
            </Filter>
         </ColumnLeft>
         <ColumnRight>
            <Products>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
               <Product image='https://i.imgur.com/s7zey8T.jpg' name='iMac 27 Retina' alt='Apple iMac 27 Retina' price='$2099.99'/>
            </Products>
         </ColumnRight>
         </MainDiv>
      </div>

   );
};

export default Catalog;

