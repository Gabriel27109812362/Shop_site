import React from 'react';

const Radio = props => {
   return (
      <div>
         <input type="radio" name={props.name} id={props.id} value={props.id} defaultChecked={props.checked}/>
         <label htmlFor={props.id}> {props.label}</label>
      </div>
   );
};
export default Radio;