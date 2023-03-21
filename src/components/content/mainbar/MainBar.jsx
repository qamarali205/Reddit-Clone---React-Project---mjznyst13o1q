import React from 'react';
import './MainBar.css';
import CloseIcon from '@material-ui/icons/Close';
import PinImage from '../../../Images/pin.png';
import WhatsHot from '@material-ui/icons/Whatshot';
import NewRelases from '@material-ui/icons/NewReleases'
import TrendingUP from "@material-ui/icons/TrendingUp";
import Menu from '@material-ui/icons/Menu'
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import ArrowDropDown  from '@material-ui/icons/ArrowDropDown'

const MainBar = () => {
  return (
    <div className='mainbar'>
        <div className='update-card'>
            <div className="top-section">
                <span>Update from Reddit</span>
                <CloseIcon  className='hoverable'/>
            </div>
            <div className="body hoverable">
                <div className='context'>
                  <span className="title">Post Title </span>
                  <br />
                  <span className="description">Post Description</span>
                </div>
                <img src={PinImage} alt="pin" />
            </div>
        </div>
        <div className="filter-container">
          <div className='filter-item hoverable'>
            <WhatsHot />
            <span>Hot</span>
          </div>
          <div className='filter-item hoverable'>
            <span>EveryWhere</span>
            <ArrowDropDown />
            </div>
           <div className='filter-item-secondary hoverable'>
            <NewRelases />
            <span>New</span>
           </div>
           <div className='filter-item-secondary hoverable'>
            <TrendingUP />
            <span>Top</span>
           </div>
            <MoreHoriz className='filter-item-tertiary hoverable' />
           
           <div className="spacer"></div>
           <div className='filter-item-menu hoverable'>
            <Menu />
            <ArrowDropDown />
           </div>
        </div>
      
    </div>
  )
}

export default MainBar
