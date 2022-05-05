import React from 'react';
import './TextInput.scss';

export const TextInput = ({hideText, ...props}) => {
        return <input className="text-input-container" type={hideText ? "password" : "text"} {...props}/>
} 