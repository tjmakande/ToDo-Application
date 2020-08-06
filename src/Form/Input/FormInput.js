import React from 'react';
import './FormInput.scss'

const Input = (props) => {
    return(
        <div className='form--group'>
            <label htmlFor={props.name} className='form--group__label'>
                {props.label + ': '}
            </label>
            <br/>
            <input 
                className='form--group__input'
                name={props.name} 
                type={props.inputType} 
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.handleChange}  
            />
        </div>
    )
}

export default Input