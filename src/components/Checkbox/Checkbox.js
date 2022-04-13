import React from 'react';
import './Checkbox.scss';

export const Checkbox = ({left, right, ...props}) => {
    return <div className='checkbox-input-container'>
        {left}
        <input type="checkbox" className={`checkbox-input ${props.value && "active"}`}
         checked={props.value} onChange={props.onChange}/>
        {right}
    </div>
}