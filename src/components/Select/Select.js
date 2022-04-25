import React from 'react';
import './Select.scss';

const Select = ({items, label,...props}) => {
  return (
    <select defaultValue="default" className='select-input-container' {...props}>
        <option value="default" disabled hidden >{label}</option>
        {items.map((item,index)=><option value={item.id} key={index}>{item.value}</option>)}
    </select>
  )
}

export default Select