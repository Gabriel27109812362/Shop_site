import React, {Component} from 'react';
import styled from 'styled-components';

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

class Products extends Component {

   constructor() {
      super();
      this.state = {
         count: 0,
      };
   }

   render() {
      return (
         <List>
            <p>products {this.state.count}</p>
         </List>

      );
   }
}

export default Products;