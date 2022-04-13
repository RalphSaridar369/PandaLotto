import React from 'react';
import './TextInput.scss';

export const TextInput = (props) => {
        return <input className='text-input-container' type={props.password ? "password" : "text"} {...props}/>
} 