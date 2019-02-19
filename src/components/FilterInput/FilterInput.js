import React from 'react';

const FilterInput = props => {

   return (
      <div>
         <input type={props.type} placeholder={props.placeholder}/>
      </div>
   );
};

export default FilterInput;