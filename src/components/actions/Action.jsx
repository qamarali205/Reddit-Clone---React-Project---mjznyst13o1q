import React from 'react';
import './Action.css'
import Button from '../Button/Buttons';
import PersonIcon from '@material-ui/icons/person';
import ArrowDropdownIcon from '@material-ui/icons/ArrowDropDown'

const Action = () => {
  return (
    <div className='actions'>
      <Button label='Log In' />
      <Button primary label="Sign UP" />
      <div className='profile'>
        <PersonIcon className='hoverable'/>
        <ArrowDropdownIcon className='hoverable'/>
      </div>
    </div>
  )
}

export default Action;
