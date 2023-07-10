import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>Be In Touch With Us</span>
        <div className="mail">
              <input type="text" placeholder='Enter your email...' />
              <button>Join Us</button>
        </div>
        <div className="icons">
              <FacebookIcon className="icon"/>
              <TwitterIcon className="icon"/>
              <InstagramIcon className="icon"/>
              <PinterestIcon className="icon"/>
        </div>
      </div>
    </div>
  )
}

export default Contact
