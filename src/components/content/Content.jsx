import React from 'react';
import './Content.css'
import MainBar from './mainbar/MainBar';
import Sidebar from './sidebar/Sidebar';

const Content = () => {
  return (
    <div className='content'>
      <div className='bars-wrapper'>
      <span className='popular-posts-title'>Popular Posts</span>
      <div className='bars-wrapper-inside'>
      <MainBar />
      <Sidebar />
      </div>
      </div>
    </div>
  )
}

export default Content
