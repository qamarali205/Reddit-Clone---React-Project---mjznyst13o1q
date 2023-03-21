import React from 'react';
import './Button.css';

const Buttons = ({primary,label}) => {
    if(primary){
        return <div className='button priamry-button'>{label}</div>

    }else{
        return <div className='button secondary-button'>{label}</div>
    }
}

export default Buttons;
