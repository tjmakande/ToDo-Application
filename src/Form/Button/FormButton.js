import React from 'react'
import './FormButton.scss'

const FormButton = (props) => {
    return(
        <button className='FormButton' type='submit' onClick={props.sendState}>
            Submit
        </button>
    )
}

export default FormButton;