import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div>
      <div className='header'>
        <video autoPlay muted loop className="video-bg">
          <source src={assets.video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className="header-contents">
          {/* <h2>Order your favourite food here</h2>
            <p>Choose</p>
            <button>View Menu</button> */}
        </div>
      </div>
    </div>
  )
}

export default Header
