import React from 'react'
import { UserAuth } from "../context/AuthContext";
import './welcome.css';

const Welcome = () => {
     const {user}=UserAuth();
  return (
    <div className='welcome'>
      {user &&  <p>Hi <span>{user.displayName}</span> Welcome to Reddit Clone App</p>}

     
    </div>
  )
}

export default Welcome
